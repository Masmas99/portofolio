<script setup lang="ts">
import { ref } from 'vue';
import { Link, router } from '@inertiajs/vue3';
import {
    create as createProject,
    destroy as destroyProject,
    edit as editProject,
} from '@/actions/App/Http/Controllers/Admin/ProjectController';
import type { PaginatedProjects, Project } from '@/types/project';
import AdminLayout from '../AdminLayout.vue';

defineOptions({ layout: AdminLayout });

defineProps<{ projects: PaginatedProjects }>();

const projectToDelete = ref<Pick<Project, 'id' | 'title'> | null>(null);
const isDeleting = ref(false);

function openDeleteModal(project: Pick<Project, 'id' | 'title'>): void {
    projectToDelete.value = project;
}

function closeDeleteModal(): void {
    if (!isDeleting.value) {
        projectToDelete.value = null;
    }
}

function confirmDelete(): void {
    if (!projectToDelete.value || isDeleting.value) return;

    isDeleting.value = true;
    router.delete(destroyProject.url(projectToDelete.value.id), {
        preserveScroll: true,
        onFinish: () => {
            isDeleting.value = false;
            projectToDelete.value = null;
        },
    });
}
</script>

<template>
    <div>
        <div class="mb-8 flex items-end justify-between gap-4">
            <div>
                <p
                    class="text-accent font-mono text-[10px] tracking-widest uppercase"
                >
                    Manage
                </p>
                <h1 class="mt-1 text-2xl font-semibold tracking-tight">
                    Selected Work
                </h1>
                <p class="text-text-muted mt-1 text-sm">
                    {{ projects.total }} project{{
                        projects.total === 1 ? '' : 's'
                    }}
                </p>
            </div>

            <Link
                :href="createProject.url()"
                class="bg-accent hover:bg-accent-dim shrink-0 rounded-lg px-4 py-2 text-sm font-medium text-zinc-950 transition-colors"
            >
                + New project
            </Link>
        </div>

        <div
            v-if="projects.data.length === 0"
            class="border-border-subtle bg-surface-raised rounded-xl border p-12 text-center"
        >
            <p class="text-text-secondary text-sm">
                No projects yet. Create your first one.
            </p>
        </div>

        <div
            v-else
            class="border-border-subtle overflow-hidden rounded-xl border"
        >
            <div
                v-for="project in projects.data"
                :key="project.id"
                class="border-border-subtle bg-surface hover:bg-surface-raised/50 flex items-center gap-4 border-b p-4 transition-colors last:border-b-0"
            >
                <!-- Thumbnail -->
                <a
                    v-if="project.image_url"
                    :href="project.image_url"
                    target="_blank"
                    rel="noopener"
                    :title="`Open screenshot for ${project.title}`"
                    class="border-border-subtle bg-surface-overlay grid h-14 w-20 shrink-0 place-items-center overflow-hidden rounded-md border"
                >
                    <img
                        :src="project.image_url"
                        :alt="project.title"
                        class="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                        loading="lazy"
                    />
                </a>
                <span
                    v-else
                    class="border-border-subtle bg-surface-overlay grid h-14 w-20 shrink-0 place-items-center rounded-md border"
                >
                    <span
                        class="text-text-muted font-mono text-[9px] uppercase"
                    >
                        No img
                    </span>
                </span>

                <!-- Main info -->
                <div class="min-w-0 flex-1">
                    <div class="flex items-center gap-2">
                        <h2 class="truncate text-sm font-medium">
                            <a
                                v-if="project.link"
                                :href="project.link"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="hover:text-accent inline-flex items-center gap-1.5 transition-colors"
                                :title="`Visit ${project.link}`"
                            >
                                {{ project.title }}
                                <svg
                                    class="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                    />
                                </svg>
                            </a>
                            <span v-else>{{ project.title }}</span>
                        </h2>
                    </div>
                    <p class="text-text-muted mt-0.5 truncate text-xs">
                        {{ project.tags.join(' ').slice(0, 80) }}
                    </p>
                </div>

                <!-- Sort -->
                <span
                    class="text-text-muted hidden shrink-0 font-mono text-[10px] sm:inline"
                >
                    #{{ project.sort_order }}
                </span>

                <!-- Actions -->
                <div class="flex shrink-0 items-center gap-2">
                    <Link
                        :href="editProject.url(project.id)"
                        class="border-border-subtle text-text-secondary hover:text-text-primary hover:bg-surface-overlay rounded-md border px-3 py-1.5 text-xs transition-colors"
                    >
                        Edit
                    </Link>
                    <button
                        type="button"
                        class="border-border-subtle rounded-md border px-3 py-1.5 text-xs text-red-400 transition-colors hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-300"
                        @click="openDeleteModal(project)"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>

        <!-- Pagination -->
        <div
            v-if="projects.last_page > 1"
            class="mt-6 flex items-center justify-between"
        >
            <Link
                :href="projects.prev_page_url ?? '#'"
                :class="[
                    'border-border-subtle text-text-secondary hover:bg-surface-overlay rounded-md border px-3 py-1.5 text-xs transition-colors',
                    !projects.prev_page_url && 'pointer-events-none opacity-40',
                ]"
                :preserve-scroll="true"
            >
                &larr; Previous
            </Link>
            <span class="text-text-muted font-mono text-[10px]">
                Page {{ projects.current_page }} of {{ projects.last_page }}
            </span>
            <Link
                :href="projects.next_page_url ?? '#'"
                :class="[
                    'border-border-subtle text-text-secondary hover:bg-surface-overlay rounded-md border px-3 py-1.5 text-xs transition-colors',
                    !projects.next_page_url && 'pointer-events-none opacity-40',
                ]"
                :preserve-scroll="true"
            >
                Next &rarr;
            </Link>
        </div>

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
                v-if="projectToDelete"
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
                                    >"{{ projectToDelete.title }}"</strong
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
