<?php

namespace App\Http\Controllers;

use App\Http\Requests\CommentUpdateRequest;
use App\Http\Resources\CommentResource;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;


class CommentController extends Controller
{
//    public function index(): \Inertia\Response
//    {
//        $comment = auth()->user()->getComment();
////        dd($comment->toArray());
//        return Inertia::render('Comment/Index', compact('comment'));
//    }

//    public function index(): \Inertia\Response
//    {
//        $comment = Comment::all();
//        dd($comment->toArray());
//        return Inertia::render('Comment/Index', compact('comment'));
//    }

    public function create(): \Inertia\Response
    {
        $comment = auth()->id();
        return Inertia::render('Comment/Create' , compact('comment'));
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'comment' => 'required|max:255',
//            'photo' => 'required|max:255',
            'channel_id' => 'required|numeric'
        ]);

        $data["user_id"] = auth()->id();

        foreach (["photo"] as $photo_column) {
            $file = $request->file($photo_column);
            if($file){
                $name = time() . $file->getClientOriginalName();
                $file->move('images', $name);
                $data[$photo_column] = $name;
            }
        }

       // dd($data);
        Comment::create($data);

        return Redirect::route('dashboard')->with('success', 'Comment created.');

    }

    public function edit(Comment $comment)
    {

        return Inertia::render('Comment/Edit',
            ['comment' => new CommentResource($comment)]);
    }

    public function update(Comment $comment ,CommentUpdateRequest $request)
    {
//        dd("$request");
        $comment->update(
            $request->validated()
        );

        $file = $request->file('photo');
        if ($file) {
            $name = time() . $file->getClientOriginalName();
            $file->move('images', $name);
            $updatedData['photo'] = $name;
        }

       return Redirect::back()->with('success', 'Comment updated.');

    }
    public function destroy(Comment $comment): \Illuminate\Http\RedirectResponse
    {

        $comment->delete();
        return Redirect::back()->with('success', 'Comment deleted.');

    }

    public function restore(Comment $comment): \Illuminate\Http\RedirectResponse
    {
        $comment->restore();

        return Redirect::route('comment')->with('success', 'Comment restored.');

    }

}
