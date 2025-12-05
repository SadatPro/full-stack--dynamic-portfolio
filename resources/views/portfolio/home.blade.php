@extends('layouts.app')

@section('title', 'Home')

@section('content')
<div class="container py-5">
    <div class="row align-items-center">
        <div class="col-md-4">
            <img src="{{ $profile->profile_picture_url ?? 'https://placehold.co/400x400' }}" 
                 alt="{{ $profile->name ?? 'Profile' }}" 
                 class="img-fluid rounded-circle shadow-lg">
        </div>
        <div class="col-md-8">
            <h1 class="display-4 fw-bold">{{ $profile->name ?? 'Your Name' }}</h1>
            
            @if($profile->taglines ?? false)
            <div class="mb-4">
                @foreach(explode(',', $profile->taglines) as $tagline)
                <span class="badge bg-primary me-2 mb-2">{{ trim($tagline) }}</span>
                @endforeach
            </div>
            @endif
            
            <p class="lead">{{ $profile->professional_focus_text ?? '' }}</p>
            
            @if($user->professionalFocuses->count() > 0)
            <div class="row mt-5">
                @foreach($user->professionalFocuses as $focus)
                <div class="col-md-4 mb-3">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title">{{ $focus->title }}</h5>
                            <p class="card-text">{{ Str::limit($focus->description, 100) }}</p>
                        </div>
                    </div>
                </div>
                @endforeach
            </div>
            @endif
        </div>
    </div>
</div>
@endsection