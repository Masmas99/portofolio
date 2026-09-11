<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(ProjectSeeder::class);

        User::query()->updateOrCreate(
            ['email' => config('admin.email')],
            [
                'name' => 'Admin',
                'password' => Hash::make(config('admin.password')),
            ],
        );
    }
}
