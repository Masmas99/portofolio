<?php

use App\Models\Project;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Inertia\Testing\AssertableInertia;

beforeEach(function () {
    $this->actingAs(User::factory()->create());
});

it('lists projects for an admin', function () {
    Project::factory()->create(['title' => 'Alpha Site']);

    $this->get(route('admin.projects.index'))
        ->assertOk()
        ->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Projects/Index')
                ->has('projects.data', 1)
                ->where('projects.data.0.title', 'Alpha Site'),
        );
});

it('serializes projects with the image_url attribute', function () {
    Project::factory()->create(['title' => 'With Url']);

    $this->get(route('admin.projects.index'))
        ->assertInertia(
            fn (AssertableInertia $page) => $page->has(
                'projects.data.0.image_url',
            ),
        );
});

it('creates a project', function () {
    $this->post(route('admin.projects.store'), [
        'title' => 'My New Site',
        'description' => 'A description for the project.',
        'tags' => ['Laravel', 'Vue 3'],
        'status' => 'Active',
        'link' => 'https://example.com',
        'sort_order' => 3,
    ])->assertRedirect(route('admin.projects.index'));

    $this->assertDatabaseHas('projects', ['title' => 'My New Site']);
});

it('stores the screenshot when creating a project', function () {
    Storage::fake('public');

    $this->post(route('admin.projects.store'), [
        'title' => 'Site With Screenshot',
        'description' => 'A description.',
        'tags' => ['Laravel'],
        'status' => 'Live',
        'image' => UploadedFile::fake()->image('preview.png'),
    ])->assertRedirect(route('admin.projects.index'));

    $project = Project::where('title', 'Site With Screenshot')->firstOrFail();
    Storage::disk('public')->assertExists($project->image);
});

it('rejects a project without required fields', function () {
    $this->post(route('admin.projects.store'), [])
        ->assertSessionHasErrors(['title', 'description', 'tags']);
});

it('rejects an oversized screenshot', function () {
    $this->post(route('admin.projects.store'), [
        'title' => 'Bad Image',
        'description' => 'A description.',
        'tags' => ['Laravel'],
        'status' => 'Draft',
        'image' => UploadedFile::fake()->image('big.png')->size(11000),
    ])->assertSessionHasErrors('image');
});

it('updates a project', function () {
    $project = Project::factory()->create();

    $this->put(route('admin.projects.update', $project), [
        'title' => 'Updated Title',
        'description' => 'Updated description.',
        'tags' => ['PHP'],
        'status' => 'Completed',
        'link' => null,
        'sort_order' => 1,
    ])->assertRedirect(route('admin.projects.index'));

    $this->assertDatabaseHas('projects', [
        'id' => $project->id,
        'title' => 'Updated Title',
    ]);
});

it('preserves the existing screenshot when updating without a new image', function () {
    Storage::fake('public');

    $project = Project::factory()->create([
        'image' => 'projects/existing.png',
    ]);
    Storage::disk('public')->put('projects/existing.png', 'fake');

    $this->put(route('admin.projects.update', $project), [
        'title' => 'Title Changed',
        'description' => $project->description,
        'tags' => $project->tags,
        'status' => $project->status,
        'image' => null,
    ])->assertRedirect(route('admin.projects.index'));

    expect($project->fresh()->image)->toBe('projects/existing.png');
    Storage::disk('public')->assertExists('projects/existing.png');
});

it('updates a project using POST with _method spoofing', function () {
    $project = Project::factory()->create();

    $this->post(route('admin.projects.update', $project), [
        '_method' => 'PUT',
        'title' => 'Spoofed Title',
        'description' => 'Updated description.',
        'tags' => ['PHP'],
        'status' => 'Completed',
    ])->assertRedirect(route('admin.projects.index'));

    $this->assertDatabaseHas('projects', [
        'id' => $project->id,
        'title' => 'Spoofed Title',
    ]);
});

it('replaces the screenshot when updating a project', function () {
    Storage::fake('public');

    $project = Project::factory()->create([
        'image' => 'projects/old.png',
    ]);
    Storage::disk('public')->put('projects/old.png', 'fake');

    $this->put(route('admin.projects.update', $project), [
        'title' => $project->title,
        'description' => $project->description,
        'tags' => $project->tags,
        'status' => $project->status,
        'image' => UploadedFile::fake()->image('new.png'),
    ])->assertRedirect(route('admin.projects.index'));

    Storage::disk('public')->assertMissing('projects/old.png');
    $this->assertNotSame('projects/old.png', $project->fresh()->image);
});

it('removes the screenshot when requested', function () {
    Storage::fake('public');

    $project = Project::factory()->create([
        'image' => 'projects/old.png',
    ]);
    Storage::disk('public')->put('projects/old.png', 'fake');

    $this->put(route('admin.projects.update', $project), [
        'title' => $project->title,
        'description' => $project->description,
        'tags' => $project->tags,
        'status' => $project->status,
        'remove_image' => true,
    ])->assertRedirect(route('admin.projects.index'));

    $this->assertNull($project->fresh()->image);
    Storage::disk('public')->assertMissing('projects/old.png');
});

it('deletes a project and its screenshot', function () {
    Storage::fake('public');

    $project = Project::factory()->create([
        'image' => 'projects/to-delete.png',
    ]);
    Storage::disk('public')->put('projects/to-delete.png', 'fake');

    $this->delete(route('admin.projects.destroy', $project))
        ->assertRedirect(route('admin.projects.index'));

    $this->assertDatabaseMissing('projects', ['id' => $project->id]);
    Storage::disk('public')->assertMissing('projects/to-delete.png');
});
