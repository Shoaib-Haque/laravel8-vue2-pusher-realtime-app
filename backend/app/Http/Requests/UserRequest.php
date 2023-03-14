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
            'username' => ['required', 'min:2', 'max:30', new UserNameFirstLetterRule, 'regex:/^[a-zA-Z0-9\s.]*$/'],
            'email' => 'required|max:255|email:rfc,dns|unique:users,email',
            'password' => 'required|min:6|max:20',
            'confirm_password' => 'required_with:password|same:password',
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
            'username.required' => 'Username is required',
            'username.min' => 'Username must be at least 2 characters',
            'username.max' => 'Username cannot be longer than 30 characters',
            'username.regex' => 'Username can contain letters, digits, space or dot',

            'email.required' => 'Email is required',
            'email.email' => 'Email format is not correct',
            'email.unique' => 'Email is already registered',
            'email.max' => 'Email cannot be longer than 255 characters',

            'password.required' => 'Password is required',
            'password.min' => 'Password must be at least 6 characters',
            'password.max' => 'Password cannot be longer than 20 characters',

            'confirm_password.required_with' => 'Confirm Password is required',
            'confirm_password.same' => 'Confirm password must match password',
        ];
    }
}
