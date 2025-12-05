<?php

namespace App\Http\Controllers\Api\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProjectController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $projects = $user->projects()->orderBy('order')->get();
        
        return response()->json($projects);
    }
    
    public function store(Request $request)
    {
        $user = Auth::user();
        
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'tech_stack' => 'required|string',
            'image_url' => 'nullable|url',
            'live_link' => 'nullable|url',
            'github_link' => 'nullable|url',
            'order' => 'nullable|integer'
        ]);
        
        $project = $user->projects()->create($validated);
        
        return response()->json([
            'success' => true,
            'message' => 'Project added successfully',
            'data' => $project
        ]);
    }
    
    public function update(Request $request, Project $project)
    {
        $this->authorize('update', $project);
        
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'tech_stack' => 'required|string',
            'image_url' => 'nullable|url',
            'live_link' => 'nullable|url',
            'github_link' => 'nullable|url',
            'order' => 'nullable|integer'
        ]);
        
        $project->update($validated);
        
        return response()->json([
            'success' => true,
            'message' => 'Project updated successfully',
            'data' => $project
        ]);
    }
    
    public function destroy(Project $project)
    {
        $this->authorize('delete', $project);
        $project->delete();
        
        return response()->json([
            'success' => true,
            'message' => 'Project deleted successfully'
        ]);
    }
}