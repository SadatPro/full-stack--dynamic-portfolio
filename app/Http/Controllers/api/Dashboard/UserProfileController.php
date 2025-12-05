<?php

namespace App\Http\Controllers\Api\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\UserProfile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserProfileController extends Controller
{
    public function update(Request $request)
    {
        $user = Auth::user();
        
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'taglines' => 'nullable|string',
            'professional_focus_text' => 'nullable|string',
            'profile_picture_url' => 'nullable|url',
            'bio' => 'nullable|string',
        ]);
        
        $profile = $user->profile()->updateOrCreate(
            ['user_id' => $user->id],
            $validated
        );
        
        return response()->json([
            'success' => true,
            'message' => 'Profile updated successfully',
            'data' => $profile
        ]);
    }
}