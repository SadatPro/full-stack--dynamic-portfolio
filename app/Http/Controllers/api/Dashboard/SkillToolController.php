<?php

namespace App\Http\Controllers\Api\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\SkillTool;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SkillToolController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $skillTools = $user->skillTools()->orderBy('category')->orderBy('order')->get();
        
        // Group by category for frontend display
        $grouped = $skillTools->groupBy('category');
        
        return response()->json([
            'all' => $skillTools,
            'grouped' => $grouped
        ]);
    }
    
    public function store(Request $request)
    {
        $user = Auth::user();
        
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'icon_url' => 'required|url',
            'category' => 'required|string|max:255',
            'order' => 'nullable|integer'
        ]);
        
        $skillTool = $user->skillTools()->create($validated);
        
        return response()->json([
            'success' => true,
            'message' => 'Skill/Tool added successfully',
            'data' => $skillTool
        ]);
    }
    
    public function update(Request $request, SkillTool $skillTool)
    {
        $this->authorize('update', $skillTool);
        
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'icon_url' => 'required|url',
            'category' => 'required|string|max:255',
            'order' => 'nullable|integer'
        ]);
        
        $skillTool->update($validated);
        
        return response()->json([
            'success' => true,
            'message' => 'Skill/Tool updated successfully',
            'data' => $skillTool
        ]);
    }
    
    public function destroy(SkillTool $skillTool)
    {
        $this->authorize('delete', $skillTool);
        $skillTool->delete();
        
        return response()->json([
            'success' => true,
            'message' => 'Skill/Tool deleted successfully'
        ]);
    }
}