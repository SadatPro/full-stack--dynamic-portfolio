<?php

namespace App\Http\Controllers\Api\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\GalleryImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GalleryController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $images = $user->galleryImages()->orderBy('order')->get();
        
        return response()->json($images);
    }
    
    public function store(Request $request)
    {
        $user = Auth::user();
        
        $validated = $request->validate([
            'image_url' => 'required|url',
            'caption' => 'nullable|string|max:500',
            'order' => 'nullable|integer'
        ]);
        
        $image = $user->galleryImages()->create($validated);
        
        return response()->json([
            'success' => true,
            'message' => 'Gallery image added successfully',
            'data' => $image
        ]);
    }
    
    public function update(Request $request, GalleryImage $galleryImage)
    {
        $this->authorize('update', $galleryImage);
        
        $validated = $request->validate([
            'image_url' => 'required|url',
            'caption' => 'nullable|string|max:500',
            'order' => 'nullable|integer'
        ]);
        
        $galleryImage->update($validated);
        
        return response()->json([
            'success' => true,
            'message' => 'Gallery image updated successfully',
            'data' => $galleryImage
        ]);
    }
    
    public function destroy(GalleryImage $galleryImage)
    {
        $this->authorize('delete', $galleryImage);
        $galleryImage->delete();
        
        return response()->json([
            'success' => true,
            'message' => 'Gallery image deleted successfully'
        ]);
    }
}