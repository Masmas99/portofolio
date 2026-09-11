export type Project = {
    id: number;
    title: string;
    description: string;
    tags: string[];
    status: string;
    link: string | null;
    image: string | null;
    image_url: string | null;
    sort_order: number;
    created_at: string;
    updated_at: string;
};

export type PaginatedProjects = {
    data: Project[];
    current_page: number;
    from: number | null;
    last_page: number;
    per_page: number;
    to: number | null;
    total: number;
    prev_page_url: string | null;
    next_page_url: string | null;
    links: { url: string | null; label: string; active: boolean }[];
};
