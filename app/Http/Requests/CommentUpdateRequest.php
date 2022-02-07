<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CommentUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "channel_id" =>['nullable', 'max:200'],
            "user_id" =>['nullable', 'max:200'],
            "comment" =>['nullable', 'max:200'],
            'photo' => ['nullable', 'max:200'],
        ];
    }
}
