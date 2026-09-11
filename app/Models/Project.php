<?php

namespace App\Models;

use Database\Factories\ProjectFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    /** @use HasFactory<ProjectFactory> */
    use HasFactory;

    /** @var list<string> */
    protected $fillable = [
        'title',
        'description',
        'tags',
        'status',
        'link',
        'image',
        'sort_order',
    ];

    /** @var list<string> */
    protected $appends = ['image_url'];

    /** @return array<string, string> */
    protected function casts(): array
    {
        return [
            'tags' => 'array',
            'sort_order' => 'integer',
        ];
    }

    public function getImageUrlAttribute(): ?string
    {
        return $this->image ? '/storage/'.$this->image : null;
    }
}
