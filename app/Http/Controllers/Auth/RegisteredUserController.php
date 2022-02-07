<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserUpdateRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class RegisteredUserController extends Controller
{
    public function index()
    {
        $user = User::all();

        return Inertia::render('User/Index', compact('user'));
    }
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);
        if ($file = $request->file('photo')) {

            $name = time() . $file->getClientOriginalName();

            $file->move('images', $name);

            $photo = User::create(['file' => $name]);
            $updateData['photo'] = $photo->id;

        }
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        foreach (["photo"] as $photo_column) {
            $file = $request->file($photo_column);
            if ($file) {
                $name = time() . $file->getClientOriginalName();
                $file->move('images', $name);
                $updateData[$photo_column] = $name;
            }
        }

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
    public function edit(User $user)
    {
        return Inertia::render('User/Edit',
            ['user' => new UserResource($user)]
        );
    }

    public function update(User $user, UserUpdateRequest $request)
    {
        $updatedData = $request->all();
        $file = $request->file('photo');
        if ($file) {
            $name = time() . $file->getClientOriginalName();
            $file->move('images', $name);
            $updatedData['photo'] = $name;
        }

        $user->update(
            $updatedData
        );
        return Redirect::back()->with('success', 'User updated.');

    }

    public function destroy(User $user): \Illuminate\Http\RedirectResponse
    {

        $user->delete();
        return Redirect::back()->with('success', 'User deleted.');


    }

    public function restore(User $user): \Illuminate\Http\RedirectResponse
    {
        $user->restore();

        return Redirect::route('user')->with('success', 'User restored.');

    }

}
