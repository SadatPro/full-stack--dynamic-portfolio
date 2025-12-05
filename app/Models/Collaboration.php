<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Collaboration extends Model
{
    protected $fillable = ['user_id', 'organization', 'role', 'description'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}