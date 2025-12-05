<?php

namespace App\Http\Controllers\Api\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\CoreCompetency;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CoreCompetencyController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $competencies = $user->coreCompetencies()->orderBy('order')->get();
        
        return response()->json($competencies);
    }
    
    public function store(Request $request)
    {
        $user = Auth::user();
        
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'level' => 'required|integer|min:0|max:100',
            'order' => 'nullable|integer'
        ]);
        
        $competency = $user->coreCompetencies()->create($validated);
        
        return response()->json([
            'success' => true,
            'message' => 'Core competency added successfully',
            'data' => $competency
        ]);
    }
    
    public function update(Request $request, CoreCompetency $coreCompetency)
    {
        $this->authorize('update', $coreCompetency);
        
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'level' => 'required|integer|min:0|max:100',
            'order' => 'nullable|integer'
        ]);
        
        $coreCompetency->update($validated);
        
        return response()->json([
            'success' => true,
            'message' => 'Core competency updated successfully',
            'data' => $coreCompetency
        ]);
    }
    
    public function destroy(CoreCompetency $coreCompetency)
    {
        $this->authorize('delete', $coreCompetency);
        $coreCompetency->delete();
        
        return response()->json([
            'success' => true,
            'message' => 'Core competency deleted successfully'
        ]);
    }
}