<?php

namespace App\Http\Controllers\Api\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Experience;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ExperienceController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $experiences = $user->experiences()->orderBy('start_date', 'desc')->get();
        
        return response()->json($experiences);
    }
    
    public function store(Request $request)
    {
        $user = Auth::user();
        
        $validated = $request->validate([
            'position' => 'required|string|max:255',
            'company' => 'required|string|max:255',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date',
            'is_current' => 'boolean',
            'description' => 'required|string',
            'type' => 'required|in:work,collaboration,education'
        ]);
        
        $experience = $user->experiences()->create($validated);
        
        return response()->json([
            'success' => true,
            'message' => 'Experience added successfully',
            'data' => $experience
        ]);
    }
    
    public function update(Request $request, Experience $experience)
    {
        $this->authorize('update', $experience);
        
        $validated = $request->validate([
            'position' => 'required|string|max:255',
            'company' => 'required|string|max:255',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date',
            'is_current' => 'boolean',
            'description' => 'required|string',
            'type' => 'required|in:work,collaboration,education'
        ]);
        
        $experience->update($validated);
        
        return response()->json([
            'success' => true,
            'message' => 'Experience updated successfully',
            'data' => $experience
        ]);
    }
    
    public function destroy(Experience $experience)
    {
        $this->authorize('delete', $experience);
        $experience->delete();
        
        return response()->json([
            'success' => true,
            'message' => 'Experience deleted successfully'
        ]);
    }
}