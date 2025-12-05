<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\UserProfile;
use App\Models\ProfessionalFocus;
use App\Models\CoreCompetency;
use App\Models\Experience;
use App\Models\SkillTool;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        // Create admin user
        $user = User::create([
            'name' => 'Sadat Mahmud',
            'email' => 'admin@portfolio.com',
            'password' => bcrypt('password123'),
        ]);

        // Create user profile
        $profile = UserProfile::create([
            'user_id' => $user->id,
            'name' => 'Sadat Mahmud',
            'taglines' => 'Software Engineer., Robotics & Embedded Systems., UI/UX Designer.',
            'professional_focus_text' => 'Web Development (React/Next.js & Laravel) Crafting modern, scalable, and high-performance web applications...',
            'profile_picture_url' => 'https://avatars.githubusercontent.com/u/66432898?v=4',
            'bio' => 'I am a 4th-year student at Daffodil International University...',
        ]);

        // Add professional focuses
        $focuses = [
            [
                'title' => 'Web Development (React/Next.js & Laravel)',
                'description' => 'Crafting modern, scalable, and high-performance web applications using the latest technologies. Specializing in full-stack solutions with a focus on seamless user experiences.',
                'order' => 1
            ],
            [
                'title' => 'Mobile Development (Flutter/Dart)',
                'description' => 'Building robust, beautiful, and performant cross-platform applications for Android and iOS, focusing on clean architecture and state management (Riverpod).',
                'order' => 2
            ],
            [
                'title' => 'IoT & Embedded Systems',
                'description' => 'Designing and prototyping smart devices, integrating mobile interfaces with hardware using microcontrollers (ESP32, Arduino) for practical solutions.',
                'order' => 3
            ]
        ];

        foreach ($focuses as $focus) {
            ProfessionalFocus::create(array_merge($focus, ['user_id' => $user->id]));
        }

        // Add core competencies
        $competencies = [
            ['name' => 'Robotics & Embedded Systems (Arduino, ESP32, STM32)', 'level' => 95, 'order' => 1],
            ['name' => 'Flutter & Dart', 'level' => 90, 'order' => 2],
            ['name' => 'Python (Django, Django REST API)', 'level' => 85, 'order' => 3],
            ['name' => 'React', 'level' => 85, 'order' => 4],
            ['name' => 'Next.js', 'level' => 80, 'order' => 5],
            ['name' => 'TypeScript', 'level' => 85, 'order' => 6],
            ['name' => 'Laravel', 'level' => 80, 'order' => 7],
            ['name' => 'UI/UX Design (Figma)', 'level' => 88, 'order' => 8],
            ['name' => '3D Modeling (SolidWorks, Fusion 360, Blender)', 'level' => 80, 'order' => 9],
            ['name' => 'C & C++', 'level' => 90, 'order' => 10],
            ['name' => 'Database (PostgreSQL, MySQL, MongoDB)', 'level' => 80, 'order' => 11],
        ];

        foreach ($competencies as $competency) {
            CoreCompetency::create(array_merge($competency, ['user_id' => $user->id]));
        }

        // Add skill tools
        $skillTools = [
            ['name' => 'Python', 'icon_url' => 'https://skillicons.dev/icons?i=python', 'category' => 'Languages', 'order' => 1],
            ['name' => 'Java', 'icon_url' => 'https://skillicons.dev/icons?i=java', 'category' => 'Languages', 'order' => 2],
            ['name' => 'C++', 'icon_url' => 'https://skillicons.dev/icons?i=cpp', 'category' => 'Languages', 'order' => 3],
            ['name' => 'Flutter', 'icon_url' => 'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg', 'category' => 'Frameworks & Libraries', 'order' => 1],
            ['name' => 'React', 'icon_url' => 'https://skillicons.dev/icons?i=react', 'category' => 'Frameworks & Libraries', 'order' => 2],
            ['name' => 'Figma', 'icon_url' => 'https://skillicons.dev/icons?i=figma', 'category' => 'Design & Tools', 'order' => 1],
            // Add more skills as needed
        ];

        foreach ($skillTools as $skill) {
            SkillTool::create(array_merge($skill, ['user_id' => $user->id]));
        }
    }
}