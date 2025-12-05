<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CoreCompetency extends Model
{
    protected $fillable = ['user_id', 'name', 'level', 'order'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}