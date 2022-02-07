<?php

namespace App\Http\Controllers;

use App\Http\Requests\MessageUpdateRequest;
use App\Http\Resources\MessageResource;
use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;


class MessageController extends Controller
{
    public function index(): \Inertia\Response
    {
        $message = Message::all();
        return Inertia::render('Message/Index', compact('message'));
    }

    public function create(): \Inertia\Response
    {
        return Inertia::render('Message/Create');

    }

    public function store(Request $request)
    {

        $updateData = $request->validate([
            'channel_name' => 'required|max:255',
        ]);


        Message::create($updateData);

        return Redirect::back()->with('success', 'message created.');

    }

    public function edit(Message $message)
    {

        return Inertia::render('Message/Edit',
            ['message' => new MessageResource($message)]);
    }

    public function update(Message $message ,MessageUpdateRequest $request)
    {
//        $updatedData = $request->all();
//        dd($request);
        $message->update(
            $request->validated()
        );

        return Redirect::back()->with('success', 'Message updated.');

    }
    public function destroy(Message $message): \Illuminate\Http\RedirectResponse
    {

        $message->delete();
        return Redirect::back()->with('success', 'Message deleted.');

    }

    public function restore(Message $message): \Illuminate\Http\RedirectResponse
    {
        $message->restore();

        return Redirect::route('/dashboard')->with('success', 'Message restored.');

    }

}
