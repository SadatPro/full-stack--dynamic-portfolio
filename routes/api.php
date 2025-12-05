<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PortfolioController;
use App\Http\Controllers\Api\Dashboard\UserProfileController;
use App\Http\Controllers\Api\Dashboard\ProfessionalFocusController;
use App\Http\Controllers\Api\Dashboard\CoreCompetencyController;
use App\Http\Controllers\Api\Dashboard\ExperienceController;
use App\Http\Controllers\Api\Dashboard\ProjectController;
use App\Http\Controllers\Api\Dashboard\AchievementController;
use App\Http\Controllers\Api\Dashboard\SkillToolController;
use App\Http\Controllers\Api\Dashboard\GalleryController;

// Public API routes (no authentication required)
Route::get('/portfolio', [PortfolioController::class, 'index']);
Route::get('/test', function () {
    return response()->json(['message' => 'API is working']);
});

Route::middleware(['auth:sanctum'])->prefix('dashboard')->group(function () {
    // User Profile
    Route::post('/profile', [UserProfileController::class, 'update']);
    
    // Professional Focus
    Route::apiResource('professional-focuses', ProfessionalFocusController::class);
    
    // Core Competencies
    Route::apiResource('core-competencies', CoreCompetencyController::class);
    
    // Experiences
    Route::apiResource('experiences', ExperienceController::class);
    
    // Skill Tools
    Route::apiResource('skill-tools', SkillToolController::class);
    
    // Projects
    Route::apiResource('projects', ProjectController::class);
    
    // Achievements
    Route::apiResource('achievements', AchievementController::class);
    
    // Gallery
    Route::apiResource('gallery', GalleryController::class);
});