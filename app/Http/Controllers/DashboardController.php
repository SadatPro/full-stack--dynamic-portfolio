<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        
        $data = [
            'user' => $user,
            'profile' => $user->profile,
            'professionalFocuses' => $user->professionalFocuses,
            'coreCompetencies' => $user->coreCompetencies,
            'experiences' => $user->experiences,
            'collaborations' => $user->collaborations,
            'educations' => $user->educations,
            'languages' => $user->languages,
            'skillTools' => $user->skillTools,
            'projects' => $user->projects,
            'achievements' => $user->achievements,
            'galleryImages' => $user->galleryImages,
        ];
        
        return view('dashboard.index', $data);
    }
}