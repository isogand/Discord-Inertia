<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Comment extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'channel_id',
        'comment',
        'photo',
        'user_id'
    ];
    public function user(){
        return $this->hasOne(User::class,"id", "user_id");
    }

    public static function getByChannelId($channel_id){
        $comment = Comment::where('channel_id',$channel_id)->select([
            "channel_id","comment", "photo","user_id"
        ])->with("user", function($query){
            return $query->select(["photo","name","id"]);
        })->get();

//             dd($comment->toArray());
        return $comment->map(function ($item){
//            dd($item);
            $item['photo'] = $item['user']['photo'];
            $item['name'] = $item['user']['name'];

            return $item;
        });
    }
}
