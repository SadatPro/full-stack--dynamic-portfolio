<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    protected $table = 'educations';
    protected $fillable = ['user_id', 'degree', 'institution', 'year_range', 'description'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}