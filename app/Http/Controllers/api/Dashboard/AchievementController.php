<?php

namespace App\Http\Controllers\Api\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Achievement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AchievementController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $achievements = $user->achievements()->orderBy('date', 'desc')->get();
        
        return response()->json($achievements);
    }
    
    public function store(Request $request)
    {
        $user = Auth::user();
        
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'date' => 'required|string',
            'description' => 'required|string',
            'type' => 'required|in:Award,Certificate,Trophy,Other'
        ]);
        
        $achievement = $user->achievements()->create($validated);
        
        return response()->json([
            'success' => true,
            'message' => 'Achievement added successfully',
            'data' => $achievement
        ]);
    }
    
    public function update(Request $request, Achievement $achievement)
    {
        $this->authorize('update', $achievement);
        
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'date' => 'required|string',
            'description' => 'required|string',
            'type' => 'required|in:Award,Certificate,Trophy,Other'
        ]);
        
        $achievement->update($validated);
        
        return response()->json([
            'success' => true,
            'message' => 'Achievement updated successfully',
            'data' => $achievement
        ]);
    }
    
    public function destroy(Achievement $achievement)
    {
        $this->authorize('delete', $achievement);
        $achievement->delete();
        
        return response()->json([
            'success' => true,
            'message' => 'Achievement deleted successfully'
        ]);
    }
}