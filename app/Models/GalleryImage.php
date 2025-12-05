<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GalleryImage extends Model
{
    protected $fillable = ['user_id', 'image_url', 'caption', 'order'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}