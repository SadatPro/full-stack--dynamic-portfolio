<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    protected $fillable = [
        'user_id', 'position', 'company', 'start_date', 'end_date',
        'is_current', 'description', 'type'
    ];

    protected $casts = [
        'start_date' => 'date',
        'end_date' => 'date',
        'is_current' => 'boolean'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}