<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProfessionalFocus extends Model
{
    protected $table = 'professional_focuses';
    protected $fillable = ['user_id', 'title', 'description', 'order'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}