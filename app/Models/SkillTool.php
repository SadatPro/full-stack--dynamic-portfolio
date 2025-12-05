<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SkillTool extends Model
{
    protected $fillable = ['user_id', 'name', 'icon_url', 'category', 'order'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}