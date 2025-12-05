<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;

class PortfolioController extends Controller
{
    public function index()
    {
        try {
            // Get the first user (you might want to make this configurable)
            $user = User::first();
            
            if (!$user) {
                return response()->json([
                    'error' => 'No user found'
                ], 404);
            }

            // Load user relationships safely
            $relationships = [];
            
            // Check which tables exist before loading relationships
            if (Schema::hasTable('professional_foci')) {
                $relationships[] = 'professionalFocuses';
            }
            if (Schema::hasTable('core_competencies')) {
                $relationships[] = 'coreCompetencies';
            }
            if (Schema::hasTable('experiences')) {
                $relationships[] = 'experiences';
            }
            if (Schema::hasTable('collaborations')) {
                $relationships[] = 'collaborations';
            }
            if (Schema::hasTable('educations')) {
                $relationships[] = 'educations';
            }
            if (Schema::hasTable('languages')) {
                $relationships[] = 'languages';
            }
            if (Schema::hasTable('skill_tools')) {
                $relationships[] = 'skillTools';
            }
            if (Schema::hasTable('projects')) {
                $relationships[] = 'projects';
            }
            if (Schema::hasTable('achievements')) {
                $relationships[] = 'achievements';
            }
            if (Schema::hasTable('gallery_images')) {
                $relationships[] = 'galleryImages';
            }
            if (Schema::hasTable('user_profiles')) {
                $relationships[] = 'profile';
            }

            // Load only existing relationships
            if (!empty($relationships)) {
                $user->load($relationships);
            }

            // Build portfolio data with safe fallbacks
            $portfolioData = [
                'home' => [
                    'name' => $user->name,
                    'taglines' => ["Software Engineer.", "Robotics & Embedded Systems.", "UI/UX Designer."],
                    'professionalFocus' => $user->professionalFocuses ?? []
                ],
                'about' => [
                    'imageUrl' => $user->profile?->profile_image ?? "https://avatars.githubusercontent.com/u/66432898?v=4",
                    'bio' => $user->profile?->bio ?? "I am a 4th-year student at Daffodil International University and the General Secretary of the Embedded System Research Center. I specialize in robotics, embedded systems, 3D modeling, and UI/UX design.",
                    'skills' => $user->coreCompetencies ?? [],
                    'experience' => $user->experiences ?? [],
                    'collaborations' => $user->collaborations ?? [],
                    'education' => $user->educations ?? [],
                    'languages' => $user->languages ?? []
                ],
                'projects' => $user->projects ?? [],
                'achievements' => $user->achievements ?? [],
                'galleryImages' => $user->galleryImages ?? [],
                'skillsAndTools' => $user->skillTools ?? [],
                'contact' => [
                    'email' => $user->email ?? "sadatmahmud.bd@gmail.com",
                    'socials' => [
                        ['platform' => 'Blog', 'url' => 'https://sadatmahmud.blogspot.com'],
                        ['platform' => 'GitHub', 'url' => 'https://github.com/sadatpro'],
                        ['platform' => 'LinkedIn', 'url' => 'https://www.linkedin.com/in/sadatmahmud1/'],
                        ['platform' => 'Instagram', 'url' => 'https://www.instagram.com/sadat.mahmud_/'],
                        ['platform' => 'Telegram', 'url' => 'https://t.me/SadatMahmud']
                    ]
                ]
            ];

            return response()->json($portfolioData);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Server error',
                'message' => $e->getMessage()
            ], 500);
        }
    }
}