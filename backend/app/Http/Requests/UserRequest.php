<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\UserNameFirstLetterRule;
use Illuminate\Http\Request;

class UserRequest extends FormRequest
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
            'email' => 'required|email:rfc,dns|max:30|unique:users,email',
            'username' => ['required', 'string', 'min:2', 'max:30', 'regex:/^[a-zA-Z0-9\s.]*$/', new UserNameFirstLetterRule],
            'password' => 'required|string|min:6|max:20',
            'confirm_password' => 'required_with:password|string|min:6|max:20|same:password',
        ];
    }

    /**
     * Custom message for validation
     *
     * @return array
     */
    public function messages()
    {
        return [
            'username.required' => 'Username is required123',
            'username.min' => 'Username must be at least 2 characters123',
            'username.max' => 'Username cannot be longer than 30 characters123',
            'username.regex' => 'Username can contain letters, digits, space or dot123',

            'email.required' => 'Email is required123',
            'email.email' => 'Email format is not correct123',
            'email.unique' => 'Email is already registered123',
            'email.max' => 'Email cannot be longer than 30 characters123',

            'password.required' => 'Password is required123',
            'password.min' => 'Password must be at least 6 characters123',
            'password.max' => 'Password cannot be longer than 20 characters123',

            'confirm_password.required_with' => 'Confirm Password is required123',
            'confirm_password.same' => 'Confirm password must match password123',
        ];
    }
}
