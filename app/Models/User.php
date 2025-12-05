<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
    
    public function profile()
    {
        return $this->hasOne(UserProfile::class);
    }

    public function professionalFocuses()
    {
        return $this->hasMany(ProfessionalFocus::class)->orderBy('order');
    }

    public function coreCompetencies()
    {
        return $this->hasMany(CoreCompetency::class)->orderBy('order');
    }

    public function experiences()
    {
        return $this->hasMany(Experience::class)->orderBy('start_date', 'desc');
    }

    public function collaborations()
    {
        return $this->hasMany(Collaboration::class)->orderBy('created_at', 'desc');
    }

    public function educations()
    {
        return $this->hasMany(Education::class)->orderBy('created_at', 'desc');
    }

    public function languages()
    {
        return $this->hasMany(Language::class)->orderBy('created_at', 'desc');
    }

    public function skillTools()
    {
        return $this->hasMany(SkillTool::class)->orderBy('category')->orderBy('order');
    }

    public function projects()
    {
        return $this->hasMany(Project::class)->orderBy('order');
    }

    public function achievements()
    {
        return $this->hasMany(Achievement::class)->orderBy('date', 'desc');
    }

    public function galleryImages()
    {
        return $this->hasMany(GalleryImage::class)->orderBy('order');
    }
}
