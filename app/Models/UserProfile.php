<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserProfile extends Model
{
    protected $fillable = [
        'user_id', 'name', 'taglines', 'professional_focus_text',
        'profile_picture_url', 'bio'
    ];

    protected $casts = [
        'taglines' => 'array'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Accessor for taglines array
    public function getTaglinesArrayAttribute()
    {
        if (!$this->taglines) return [];
        return explode(',', $this->taglines);
    }
}