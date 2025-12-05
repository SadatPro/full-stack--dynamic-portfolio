<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'user_id', 'title', 'description', 'tech_stack', 
        'image_url', 'live_link', 'github_link', 'order'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Accessor for tech stack array
    public function getTechStackArrayAttribute()
    {
        if (!$this->tech_stack) return [];
        return array_map('trim', explode(',', $this->tech_stack));
    }
}