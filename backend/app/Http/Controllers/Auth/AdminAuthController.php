<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Admin;
use Illuminate\Notifications\Action;
use Validator;
use Exception;
use Tymon\JWTAuth\Exceptions\JWTException;

class AdminAuthController extends Controller
{
    /**
     * Create a new AdminAuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:admin', ['except' => ['login', 'create']]);
        config(['auth.defaults.guard' => 'admin']);
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
     * Create an Admin.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(Request $request)
    {
        $request->validate([
            'username' => 'required|string|unique:admins,username|between:2,100',
            'password' => 'required|string|min:6',
        ]);

        try {
            Admins::create([
                'username' => $request->username,
                'password' => bcrypt($request->password)
            ]);

            return response()->json([
                'message' => 'Admin Created Successfully!!'
            ]);
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something goes wrong while creating an Admin!!'
            ], 500);
        }
    }

    /**
     * Log the Account out (Invalidate the token).
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
            'admin' => auth()->user(),
        ]);
    }
}
