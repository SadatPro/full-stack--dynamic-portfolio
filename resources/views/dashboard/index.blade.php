@extends('dashboard.layout')

@section('title', 'Dashboard')
@section('content')

<div class="container-fluid">
    <!-- Dashboard Header -->
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h1 class="h3">Dashboard</h1>
        <div>
            <a href="{{ route('home') }}" target="_blank" class="btn btn-outline-primary">
                <i class="bi bi-eye"></i> View Portfolio
            </a>
        </div>
    </div>

    <!-- Quick Stats -->
    <div class="row mb-4">
        <div class="col-md-3">
            <div class="card border-primary">
                <div class="card-body">
                    <h6 class="card-subtitle mb-2 text-muted">Projects</h6>
                    <h2 class="card-title">{{ $projects->count() }}</h2>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card border-success">
                <div class="card-body">
                    <h6 class="card-subtitle mb-2 text-muted">Skills</h6>
                    <h2 class="card-title">{{ $skillTools->count() }}</h2>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card border-warning">
                <div class="card-body">
                    <h6 class="card-subtitle mb-2 text-muted">Achievements</h6>
                    <h2 class="card-title">{{ $achievements->count() }}</h2>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card border-info">
                <div class="card-body">
                    <h6 class="card-subtitle mb-2 text-muted">Gallery</h6>
                    <h2 class="card-title">{{ $galleryImages->count() }}</h2>
                </div>
            </div>
        </div>
    </div>

    <!-- Content Sections -->
    <div class="accordion" id="dashboardAccordion">
        <!-- Home Page Section -->
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#homeSection">
                    <i class="bi bi-house me-2"></i> Home Page
                </button>
            </h2>
            <div id="homeSection" class="accordion-collapse collapse show" data-bs-parent="#dashboardAccordion">
                <div class="accordion-body">
                    <form id="homeForm">
                        @csrf
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="name" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="name" name="name" 
                                           value="{{ $profile->name ?? '' }}">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="profile_picture_url" class="form-label">Profile Picture URL</label>
                                    <input type="url" class="form-control" id="profile_picture_url" 
                                           name="profile_picture_url" 
                                           value="{{ $profile->profile_picture_url ?? '' }}">
                                    @if($profile->profile_picture_url ?? false)
                                    <div class="mt-2">
                                        <img src="{{ $profile->profile_picture_url }}" alt="Profile" 
                                             style="max-width: 100px; height: auto;">
                                    </div>
                                    @endif
                                </div>
                            </div>
                        </div>
                        
                        <div class="mb-3">
                            <label for="taglines" class="form-label">Taglines (comma separated)</label>
                            <textarea class="form-control" id="taglines" name="taglines" rows="2">{{ $profile->taglines ?? '' }}</textarea>
                        </div>
                        
                        <div class="mb-3">
                            <label for="professional_focus_text" class="form-label">Professional Focus</label>
                            <textarea class="form-control" id="professional_focus_text" name="professional_focus_text" 
                                      rows="3">{{ $profile->professional_focus_text ?? '' }}</textarea>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Update Home Page</button>
                    </form>
                </div>
            </div>
        </div>

        <!-- Professional Focus Areas -->
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#focusAreasSection">
                    <i class="bi bi-bullseye me-2"></i> Professional Focus Areas
                </button>
            </h2>
            <div id="focusAreasSection" class="accordion-collapse collapse" data-bs-parent="#dashboardAccordion">
                <div class="accordion-body">
                    <div id="focusAreasList">
                        @foreach($professionalFocuses as $focus)
                        <div class="card mb-3" id="focus-{{ $focus->id }}">
                            <div class="card-body">
                                <form class="focus-form" data-id="{{ $focus->id }}">
                                    @csrf
                                    <div class="row">
                                        <div class="col-md-8">
                                            <input type="text" class="form-control mb-2" name="title" 
                                                   value="{{ $focus->title }}" placeholder="Title">
                                        </div>
                                        <div class="col-md-2">
                                            <input type="number" class="form-control mb-2" name="order" 
                                                   value="{{ $focus->order }}" placeholder="Order">
                                        </div>
                                        <div class="col-md-2">
                                            <button type="button" class="btn btn-danger btn-sm w-100 delete-focus" 
                                                    data-id="{{ $focus->id }}">
                                                <i class="bi bi-trash"></i> Remove
                                            </button>
                                        </div>
                                    </div>
                                    <textarea class="form-control" name="description" rows="2" 
                                              placeholder="Description">{{ $focus->description }}</textarea>
                                    <button type="submit" class="btn btn-sm btn-primary mt-2">Update</button>
                                </form>
                            </div>
                        </div>
                        @endforeach
                    </div>
                    
                    <button class="btn btn-success mt-3" data-bs-toggle="modal" data-bs-target="#addFocusModal">
                        <i class="bi bi-plus"></i> Add Focus Area
                    </button>
                </div>
            </div>
        </div>

        <!-- Core Competencies -->
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#skillsSection">
                    <i class="bi bi-tools me-2"></i> Core Competencies (Skills)
                </button>
            </h2>
            <div id="skillsSection" class="accordion-collapse collapse" data-bs-parent="#dashboardAccordion">
                <div class="accordion-body">
                    <div id="skillsList">
                        @foreach($coreCompetencies as $skill)
                        <div class="card mb-3" id="skill-{{ $skill->id }}">
                            <div class="card-body">
                                <form class="skill-form" data-id="{{ $skill->id }}">
                                    @csrf
                                    <div class="row">
                                        <div class="col-md-5">
                                            <input type="text" class="form-control mb-2" name="name" 
                                                   value="{{ $skill->name }}" placeholder="Skill Name">
                                        </div>
                                        <div class="col-md-3">
                                            <div class="input-group mb-2">
                                                <input type="number" class="form-control" name="level" 
                                                       value="{{ $skill->level }}" min="0" max="100">
                                                <span class="input-group-text">%</span>
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <input type="number" class="form-control mb-2" name="order" 
                                                   value="{{ $skill->order }}" placeholder="Order">
                                        </div>
                                        <div class="col-md-2">
                                            <button type="button" class="btn btn-danger btn-sm w-100 delete-skill" 
                                                    data-id="{{ $skill->id }}">
                                                <i class="bi bi-trash"></i> Remove
                                            </button>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-sm btn-primary">Update</button>
                                </form>
                            </div>
                        </div>
                        @endforeach
                    </div>
                    
                    <button class="btn btn-success mt-3" data-bs-toggle="modal" data-bs-target="#addSkillModal">
                        <i class="bi bi-plus"></i> Add Skill
                    </button>
                </div>
            </div>
        </div>

        <!-- Experience -->
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#experienceSection">
                    <i class="bi bi-briefcase me-2"></i> Experience
                </button>
            </h2>
            <div id="experienceSection" class="accordion-collapse collapse" data-bs-parent="#dashboardAccordion">
                <div class="accordion-body">
                    <div id="experienceList">
                        @foreach($experiences->where('type', 'work') as $exp)
                        <div class="card mb-3" id="exp-{{ $exp->id }}">
                            <div class="card-body">
                                <form class="experience-form" data-id="{{ $exp->id }}">
                                    @csrf
                                    <input type="hidden" name="type" value="work">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <input type="text" class="form-control mb-2" name="position" 
                                                   value="{{ $exp->position }}" placeholder="Position">
                                        </div>
                                        <div class="col-md-4">
                                            <input type="text" class="form-control mb-2" name="company" 
                                                   value="{{ $exp->company }}" placeholder="Company">
                                        </div>
                                        <div class="col-md-2">
                                            <input type="date" class="form-control mb-2" name="start_date" 
                                                   value="{{ $exp->start_date->format('Y-m-d') }}">
                                        </div>
                                        <div class="col-md-2">
                                            <input type="date" class="form-control mb-2" name="end_date" 
                                                   value="{{ $exp->end_date ? $exp->end_date->format('Y-m-d') : '' }}" 
                                                   {{ $exp->is_current ? 'disabled' : '' }}>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" name="is_current" 
                                                       value="1" {{ $exp->is_current ? 'checked' : '' }}>
                                                <label class="form-check-label">Current</label>
                                            </div>
                                        </div>
                                    </div>
                                    <textarea class="form-control" name="description" rows="2" 
                                              placeholder="Description">{{ $exp->description }}</textarea>
                                    <div class="mt-2">
                                        <button type="submit" class="btn btn-sm btn-primary">Update</button>
                                        <button type="button" class="btn btn-sm btn-danger delete-experience" 
                                                data-id="{{ $exp->id }}">
                                            Remove
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        @endforeach
                    </div>
                    
                    <button class="btn btn-success mt-3" data-bs-toggle="modal" data-bs-target="#addExperienceModal">
                        <i class="bi bi-plus"></i> Add Experience
                    </button>
                </div>
            </div>
        </div>

        <!-- Projects -->
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#projectsSection">
                    <i class="bi bi-folder me-2"></i> Projects
                </button>
            </h2>
            <div id="projectsSection" class="accordion-collapse collapse" data-bs-parent="#dashboardAccordion">
                <div class="accordion-body">
                    <div id="projectsList">
                        @foreach($projects as $project)
                        <div class="card mb-3" id="project-{{ $project->id }}">
                            <div class="card-body">
                                <form class="project-form" data-id="{{ $project->id }}">
                                    @csrf
                                    <div class="row">
                                        <div class="col-md-6">
                                            <input type="text" class="form-control mb-2" name="title" 
                                                   value="{{ $project->title }}" placeholder="Title">
                                        </div>
                                        <div class="col-md-3">
                                            <input type="text" class="form-control mb-2" name="tech_stack" 
                                                   value="{{ $project->tech_stack }}" placeholder="Tech Stack (comma separated)">
                                        </div>
                                        <div class="col-md-2">
                                            <input type="number" class="form-control mb-2" name="order" 
                                                   value="{{ $project->order }}" placeholder="Order">
                                        </div>
                                        <div class="col-md-1">
                                            <button type="button" class="btn btn-danger btn-sm w-100 delete-project" 
                                                    data-id="{{ $project->id }}">
                                                <i class="bi bi-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <input type="url" class="form-control mb-2" name="image_url" 
                                                   value="{{ $project->image_url }}" placeholder="Image URL">
                                        </div>
                                        <div class="col-md-3">
                                            <input type="url" class="form-control mb-2" name="live_link" 
                                                   value="{{ $project->live_link }}" placeholder="Live Link">
                                        </div>
                                        <div class="col-md-3">
                                            <input type="url" class="form-control mb-2" name="github_link" 
                                                   value="{{ $project->github_link }}" placeholder="GitHub Link">
                                        </div>
                                    </div>
                                    <textarea class="form-control" name="description" rows="3" 
                                              placeholder="Description">{{ $project->description }}</textarea>
                                    <button type="submit" class="btn btn-sm btn-primary mt-2">Update</button>
                                </form>
                            </div>
                        </div>
                        @endforeach
                    </div>
                    
                    <button class="btn btn-success mt-3" data-bs-toggle="modal" data-bs-target="#addProjectModal">
                        <i class="bi bi-plus"></i> Add Project
                    </button>
                </div>
            </div>
        </div>

        <!-- Add more accordion items for other sections following the same pattern -->
    </div>
</div>

<!-- Modals for adding new items -->
@include('dashboard.modals.focus-modal')
@include('dashboard.modals.skill-modal')
@include('dashboard.modals.experience-modal')
@include('dashboard.modals.project-modal')

@push('scripts')
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script>
    // CSRF Token setup
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
    
    // Home Form Submission
    document.getElementById('homeForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        
        axios.post('/api/dashboard/profile', formData)
            .then(response => {
                alert('Home page updated successfully!');
            })
            .catch(error => {
                alert('Error updating home page');
                console.error(error);
            });
    });
    
    // Professional Focus CRUD
    document.querySelectorAll('.focus-form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const id = this.dataset.id;
            const formData = new FormData(this);
            
            axios.put(`/api/dashboard/professional-focuses/${id}`, formData)
                .then(response => {
                    alert('Focus area updated!');
                })
                .catch(error => {
                    alert('Error updating focus area');
                    console.error(error);
                });
        });
    });
    
    document.querySelectorAll('.delete-focus').forEach(button => {
        button.addEventListener('click', function() {
            const id = this.dataset.id;
            if (confirm('Are you sure you want to delete this focus area?')) {
                axios.delete(`/api/dashboard/professional-focuses/${id}`)
                    .then(response => {
                        document.getElementById(`focus-${id}`).remove();
                        alert('Focus area deleted!');
                    })
                    .catch(error => {
                        alert('Error deleting focus area');
                        console.error(error);
                    });
            }
        });
    });
    
    // Add similar JavaScript for other sections...
</script>
@endpush

@endsection