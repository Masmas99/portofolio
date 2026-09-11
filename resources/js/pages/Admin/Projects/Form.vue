<script setup lang="ts">
import { ref } from 'vue';
import { Link, router, useForm } from '@inertiajs/vue3';
import {
    destroy as destroyProject,
    index as adminIndex,
    store as storeProject,
    update as updateProject,
} from '@/actions/App/Http/Controllers/Admin/ProjectController';
import type { Project } from '@/types/project';
import AdminLayout from '../AdminLayout.vue';

defineOptions({ layout: AdminLayout });

const props = defineProps<{ project: Project | null }>();

const statusOptions = ['Draft', 'Active', 'Completed', 'Deployed', 'Live'];

const form = useForm({
    title: props.project?.title ?? '',
    description: props.project?.description ?? '',
    tags: props.project?.tags ?? [],
    status: props.project?.status ?? 'Draft',
    link: props.project?.link ?? '',
    sort_order: props.project?.sort_order ?? 0,
    image: null as File | null,
    remove_image: false,
});

const tagDraft = ref('');
const previewUrl = ref<string | null>(null);
const existingImage = props.project?.image_url ?? null;
const isDeleteModalOpen = ref(false);
const isDeleting = ref(false);

function addTag(): void {
    const tag = tagDraft.value.trim();
    if (tag && !form.tags.includes(tag) && form.tags.length < 8) {
        form.tags.push(tag);
    }
    tagDraft.value = '';
}

function removeTag(index: number): void {
    form.tags.splice(index, 1);
}

function onTagKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ',') {
        event.preventDefault();
        addTag();
    }
    if (
        event.key === 'Backspace' &&
        tagDraft.value === '' &&
        form.tags.length > 0
    ) {
        form.tags.pop();
    }
}

function onImageChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) {
        return;
    }
    form.image = file;
    form.remove_image = false;
    previewUrl.value = URL.createObjectURL(file);
}

function removeCurrentImage(): void {
    form.image = null;
    form.remove_image = true;
    previewUrl.value = null;
}

function submit(): void {
    if (props.project) {
        form.transform((data) => ({
            ...data,
            _method: 'put',
        })).post(updateProject.url(props.project.id), {
            forceFormData: true,
        });
        return;
    }
    form.post(storeProject.url(), {
        forceFormData: true,
    });
}

function openDeleteModal(): void {
    isDeleteModalOpen.value = true;
}

function closeDeleteModal(): void {
    if (!isDeleting.value) {
        isDeleteModalOpen.value = false;
    }
}

function confirmDelete(): void {
    if (!props.project || isDeleting.value) return;

    isDeleting.value = true;
    router.delete(destroyProject.url(props.project.id), {
        onFinish: () => {
            isDeleting.value = false;
            isDeleteModalOpen.value = false;
        },
    });
}
</script>

<template>
    <div>
        <div class="mb-8 flex items-center justify-between gap-4">
            <div>
                <p
                    class="text-accent font-mono text-[10px] tracking-widest uppercase"
                >
                    {{ props.project ? 'Edit' : 'New' }}
                </p>
                <h1 class="mt-1 text-2xl font-semibold tracking-tight">
                    {{ props.project ? props.project.title : 'Create project' }}
                </h1>
            </div>
            <Link
                :href="adminIndex.url()"
                class="border-border-subtle text-text-secondary hover:text-text-primary hover:bg-surface-overlay rounded-lg border px-3 py-1.5 text-xs transition-colors"
            >
                &larr; Back
            </Link>
        </div>

        <form
            @submit.prevent="submit"
            class="border-border-subtle bg-surface-raised rounded-xl border p-6"
        >
            <div class="grid gap-6 lg:grid-cols-[1fr_16rem]">
                <!-- Left column -->
                <div class="space-y-5">
                    <div>
                        <label
                            for="title"
                            class="text-text-muted mb-1.5 block font-mono text-[10px] tracking-widest uppercase"
                        >
                            Title
                        </label>
                        <input
                            id="title"
                            v-model="form.title"
                            type="text"
                            required
                            class="border-border-subtle bg-surface text-text-primary focus:border-accent focus:ring-accent/30 w-full rounded-lg border px-3 py-2 text-sm transition-colors outline-none focus:ring-4"
                        />
                        <p
                            v-if="form.errors.title"
                            class="text-accent mt-1 text-xs"
                        >
                            {{ form.errors.title }}
                        </p>
                    </div>

                    <div>
                        <label
                            for="description"
                            class="text-text-muted mb-1.5 block font-mono text-[10px] tracking-widest uppercase"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            v-model="form.description"
                            rows="4"
                            required
                            class="border-border-subtle bg-surface text-text-primary focus:border-accent focus:ring-accent/30 w-full resize-none rounded-lg border px-3 py-2 text-sm transition-colors outline-none focus:ring-4"
                        />
                        <p
                            v-if="form.errors.description"
                            class="text-accent mt-1 text-xs"
                        >
                            {{ form.errors.description }}
                        </p>
                    </div>

                    <div>
                        <label
                            for="link"
                            class="text-text-muted mb-1.5 block font-mono text-[10px] tracking-widest uppercase"
                        >
                            Website link
                            <span class="text-text-secondary">(optional)</span>
                        </label>
                        <input
                            id="link"
                            v-model="form.link"
                            type="url"
                            placeholder="https://..."
                            class="border-border-subtle bg-surface text-text-primary focus:border-accent focus:ring-accent/30 w-full rounded-lg border px-3 py-2 text-sm transition-colors outline-none focus:ring-4"
                        />
                        <p
                            v-if="form.errors.link"
                            class="text-accent mt-1 text-xs"
                        >
                            {{ form.errors.link }}
                        </p>
                    </div>

                    <div>
                        <span
                            class="text-text-muted mb-1.5 block font-mono text-[10px] tracking-widest uppercase"
                        >
                            Tags
                        </span>
                        <div class="flex flex-wrap items-center gap-2">
                            <span
                                v-for="(tag, index) in form.tags"
                                :key="tag"
                                class="border-border-subtle bg-surface-overlay text-text-secondary inline-flex items-center gap-1.5 rounded-md border px-2 py-1 font-mono text-xs"
                            >
                                {{ tag }}
                                <button
                                    type="button"
                                    class="text-text-muted hover:text-accent"
                                    :aria-label="`Remove ${tag}`"
                                    @click="removeTag(index)"
                                >
                                    &times;
                                </button>
                            </span>
                            <input
                                v-model="tagDraft"
                                type="text"
                                placeholder="Type & press Enter..."
                                class="border-border-subtle bg-surface text-text-primary focus:border-accent w-40 rounded-lg border px-3 py-1.5 text-xs transition-colors outline-none"
                                @keydown="onTagKeydown"
                                @blur="addTag"
                            />
                        </div>
                        <p
                            v-if="form.errors.tags"
                            class="text-accent mt-1 text-xs"
                        >
                            {{ form.errors.tags }}
                        </p>
                    </div>
                </div>

                <!-- Right column -->
                <div class="space-y-5">
                    <div>
                        <label
                            for="status"
                            class="text-text-muted mb-1.5 block font-mono text-[10px] tracking-widest uppercase"
                        >
                            Status
                        </label>
                        <select
                            id="status"
                            v-model="form.status"
                            class="border-border-subtle bg-surface text-text-primary focus:border-accent focus:ring-accent/30 w-full rounded-lg border px-3 py-2 text-sm transition-colors outline-none focus:ring-4"
                        >
                            <option
                                v-for="option in statusOptions"
                                :key="option"
                                :value="option"
                            >
                                {{ option }}
                            </option>
                        </select>
                    </div>

                    <div>
                        <label
                            for="sort_order"
                            class="text-text-muted mb-1.5 block font-mono text-[10px] tracking-widest uppercase"
                        >
                            Sort order
                        </label>
                        <input
                            id="sort_order"
                            v-model.number="form.sort_order"
                            type="number"
                            min="0"
                            class="border-border-subtle bg-surface text-text-primary focus:border-accent focus:ring-accent/30 w-full rounded-lg border px-3 py-2 text-sm transition-colors outline-none focus:ring-4"
                        />
                    </div>

                    <div>
                        <span
                            class="text-text-muted mb-1.5 block font-mono text-[10px] tracking-widest uppercase"
                        >
                            Screenshot
                        </span>
                        <div class="space-y-2">
                            <div
                                class="border-border-subtle bg-surface grid h-40 place-items-center overflow-hidden rounded-lg border"
                            >
                                <img
                                    v-if="
                                        previewUrl ||
                                        (existingImage && !form.remove_image)
                                    "
                                    :src="previewUrl ?? existingImage ?? ''"
                                    alt="Preview"
                                    class="h-full w-full object-cover"
                                />
                                <span
                                    v-else
                                    class="text-text-muted font-mono text-[10px] uppercase"
                                >
                                    No screenshot
                                </span>
                            </div>
                            <input
                                id="image"
                                type="file"
                                accept="image/png,image/jpeg,image/webp,image/avif"
                                class="border-border-subtle bg-surface text-text-secondary file:text-text-secondary hover:file:bg-surface-overlay w-full cursor-pointer rounded-lg border px-3 py-2 text-xs transition-colors file:mr-3 file:border-0 file:bg-transparent file:px-0 file:py-0 file:text-xs file:font-medium"
                                @change="onImageChange"
                            />
                            <p
                                v-if="form.errors.image"
                                class="text-accent text-xs"
                            >
                                {{ form.errors.image }}
                            </p>
                            <div class="flex items-center gap-3">
                                <a
                                    v-if="
                                        existingImage &&
                                        !form.remove_image &&
                                        !form.image
                                    "
                                    :href="existingImage"
                                    target="_blank"
                                    rel="noopener"
                                    class="text-text-secondary hover:text-text-primary text-xs underline underline-offset-2"
                                >
                                    Open full screenshot
                                </a>
                                <button
                                    v-if="
                                        existingImage &&
                                        !form.remove_image &&
                                        !form.image
                                    "
                                    type="button"
                                    class="text-accent text-xs underline underline-offset-2"
                                    @click="removeCurrentImage"
                                >
                                    Remove screenshot
                                </button>
                                <span
                                    v-if="form.remove_image || form.image"
                                    class="text-text-muted text-xs"
                                >
                                    Will be replaced.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                class="border-border-subtle mt-8 flex flex-wrap items-center justify-between gap-3 border-t pt-5"
            >
                <div>
                    <button
                        v-if="props.project"
                        type="button"
                        class="border-border-subtle rounded-lg border px-4 py-2 text-sm text-red-400 transition-colors hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-300"
                        @click="openDeleteModal"
                    >
                        Delete project
                    </button>
                </div>

                <div class="flex items-center gap-3">
                    <Link
                        :href="adminIndex.url()"
                        class="border-border-subtle text-text-secondary hover:text-text-primary hover:bg-surface-overlay rounded-lg border px-4 py-2 text-sm transition-colors"
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        :disabled="form.processing"
                        class="bg-accent hover:bg-accent-dim rounded-lg px-4 py-2 text-sm font-medium text-zinc-950 transition-colors disabled:opacity-60"
                    >
                        {{
                            form.processing
                                ? 'Saving...'
                                : props.project
                                  ? 'Save changes'
                                  : 'Create project'
                        }}
                    </button>
                </div>
            </div>
        </form>

        <!-- Delete Confirmation Modal -->
        <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div
                v-if="isDeleteModalOpen && props.project"
                class="bg-surface/80 fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md"
                @click="closeDeleteModal"
                aria-modal="true"
                role="dialog"
            >
                <div
                    class="border-border-subtle bg-surface-raised w-full max-w-md space-y-4 rounded-2xl border p-6 shadow-2xl"
                    @click.stop
                >
                    <div class="flex items-start gap-4">
                        <div
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-500/30 bg-red-500/10 text-red-400"
                        >
                            <svg
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.8"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                />
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-base font-semibold text-white">
                                Delete project?
                            </h3>
                            <p class="text-text-secondary mt-1 text-sm">
                                Are you sure you want to delete
                                <strong class="text-text-primary"
                                    >"{{ props.project.title }}"</strong
                                >? This action cannot be undone.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-center justify-end gap-3 pt-2">
                        <button
                            type="button"
                            class="border-border-subtle text-text-secondary hover:text-text-primary hover:bg-surface-overlay rounded-lg border px-4 py-2 text-xs font-medium transition-colors"
                            :disabled="isDeleting"
                            @click="closeDeleteModal"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            class="rounded-lg bg-red-600 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-red-500 disabled:opacity-60"
                            :disabled="isDeleting"
                            @click="confirmDelete"
                        >
                            {{
                                isDeleting
                                    ? 'Deleting...'
                                    : 'Yes, delete project'
                            }}
                        </button>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>
