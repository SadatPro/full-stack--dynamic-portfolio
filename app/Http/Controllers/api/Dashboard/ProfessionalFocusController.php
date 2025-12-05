<?php

namespace App\Http\Controllers\Api\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\ProfessionalFocus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProfessionalFocusController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $focuses = $user->professionalFocuses()->orderBy('order')->get();
        
        return response()->json($focuses);
    }
    
    public function store(Request $request)
    {
        $user = Auth::user();
        
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'order' => 'nullable|integer'
        ]);
        
        $focus = $user->professionalFocuses()->create($validated);
        
        return response()->json([
            'success' => true,
            'message' => 'Professional focus added successfully',
            'data' => $focus
        ]);
    }
    
    public function update(Request $request, ProfessionalFocus $professionalFocus)
    {
        $this->authorize('update', $professionalFocus);
        
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'order' => 'nullable|integer'
        ]);
        
        $professionalFocus->update($validated);
        
        return response()->json([
            'success' => true,
            'message' => 'Professional focus updated successfully',
            'data' => $professionalFocus
        ]);
    }
    
    public function destroy(ProfessionalFocus $professionalFocus)
    {
        $this->authorize('delete', $professionalFocus);
        $professionalFocus->delete();
        
        return response()->json([
            'success' => true,
            'message' => 'Professional focus deleted successfully'
        ]);
    }
}