<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Seed the projects table with the initial portfolio entries.
     */
    public function run(): void
    {
        $projects = [
            [
                'title' => 'Library Management System',
                'description' => 'Full-featured library management with barcode scanning, book cataloging, and automated fine calculation.',
                'tags' => ['Laravel', 'MySQL', 'Bootstrap', 'QR Code'],
                'status' => 'Deployed',
                'sort_order' => 0,
            ],
            [
                'title' => 'School Attendance — Face Recognition',
                'description' => 'AI-powered attendance system using facial recognition for real-time student check-in and reporting.',
                'tags' => ['Python', 'OpenCV', 'Laravel', 'REST API'],
                'status' => 'Completed',
                'sort_order' => 1,
            ],
            [
                'title' => 'Server Config Automation',
                'description' => 'Shell scripts and Ansible playbooks for automated Ubuntu server provisioning, hardening, and monitoring.',
                'tags' => ['Bash', 'Ansible', 'Ubuntu', 'Nginx'],
                'status' => 'Active',
                'sort_order' => 2,
            ],
            [
                'title' => 'Portfolio Platform',
                'description' => 'This very website. Built with Laravel, Inertia, Vue 3, and Tailwind CSS v4.',
                'tags' => ['Laravel', 'Vue 3', 'Inertia', 'Tailwind'],
                'status' => 'Live',
                'sort_order' => 3,
            ],
        ];

        foreach ($projects as $project) {
            Project::query()->updateOrCreate(
                ['title' => $project['title']],
                [...$project, 'image' => null, 'link' => null],
            );
        }
    }
}
