<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Notifications\Action;
use Validator;
use Exception;
use Tymon\JWTAuth\Exceptions\JWTException;

class UserAuthController extends Controller
{
    /**
     * Create a new AdminAuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:user', ['except' => ['login']]);
        config(['auth.defaults.guard' => 'user']);
    }
    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        if (!$token = auth()->attempt($request->post())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        return $this->createNewToken($token);
    }

    /**
     * Create a User.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'username' => 'required|string|unique:admins,username|between:2,100',
            'password' => 'required|string|min:6',
        ]);

        try {
            User::create([
                'email' => $request->email,
                'username' => $request->username,
                'password' => bcrypt($request->password)
            ]);

            return response()->json([
                'message' => 'User Created Successfully!!'
            ]);
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something goes wrong while creating a User!!'
            ], 500);
        }
    }

    /**
     * Log the User out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(Request $request)
    {
        $this->validate($request, ['token' => 'required']);
        try {
            Auth::invalidate($request->input('token'));
            return response()->json(['success' => true], 200);
        } catch (JWTException $e) {
            return response()->json(['success' => false, 'error' => $e->getMessage()], 500);
        }
    }
    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function createNewToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user(),
            'user_id' => auth()->user()->id,
        ]);
    }
}
