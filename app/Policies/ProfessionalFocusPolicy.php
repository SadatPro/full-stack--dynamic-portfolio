<?php

namespace App\Policies;

use App\Models\ProfessionalFocus;
use App\Models\User;

class ProfessionalFocusPolicy
{
    public function view(User $user, ProfessionalFocus $professionalFocus)
    {
        return $user->id === $professionalFocus->user_id;
    }

    public function update(User $user, ProfessionalFocus $professionalFocus)
    {
        return $user->id === $professionalFocus->user_id;
    }

    public function delete(User $user, ProfessionalFocus $professionalFocus)
    {
        return $user->id === $professionalFocus->user_id;
    }
}