<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Models\Project;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Admin/Projects/Index', [
            'projects' => Project::query()
                ->orderBy('sort_order')
                ->orderBy('id')
                ->paginate(10)
                ->withQueryString(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Admin/Projects/Form', [
            'project' => null,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProjectRequest $request): RedirectResponse
    {
        $project = Project::query()->create($request->validated());

        if ($request->hasFile('image')) {
            $project->update([
                'image' => $request->file('image')->store('projects', 'public'),
            ]);
        }

        return Redirect::route('admin.projects.index')->with('success', 'Project created.');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project): Response
    {
        return Inertia::render('Admin/Projects/Form', [
            'project' => $project,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProjectRequest $request, Project $project): RedirectResponse
    {
        $data = $request->validated();
        unset($data['image']);

        if ($request->hasFile('image')) {
            $this->deleteStoredImage($project);
            $data['image'] = $request->file('image')->store('projects', 'public');
        } elseif ($request->boolean('remove_image') && $project->image) {
            $this->deleteStoredImage($project);
            $data['image'] = null;
        }

        $project->update($data);

        return Redirect::route('admin.projects.index')->with('success', 'Project updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Project $project): RedirectResponse
    {
        $this->deleteStoredImage($project);
        $project->delete();

        return Redirect::route('admin.projects.index')->with('success', 'Project deleted.');
    }

    private function deleteStoredImage(Project $project): void
    {
        if ($project->image) {
            Storage::disk('public')->delete($project->image);
        }
    }
}
