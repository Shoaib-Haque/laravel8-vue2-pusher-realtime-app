# laravel8-vue2-pusher-realtime-app

<ol>
    <li><strong>clone git repo</strong>
        <br>git clone https://github.com/Shoaib-Haque/laravel8-vue2-pusher-realtime-app.git
    </li>
</ol>

# scratch
# backend
<ol>
    <li><strong>install backend</strong><br>composer create-project laravel/laravel backend</li>
    <li><strong>set database credentials on .env</strong></li>
    <li><strong>editing the config/database.php for migration</strong><br>
        'charset' => 'utf8mb4',<br>
        'collation' => 'utf8mb4_unicode_ci',<br>
        to<br>
        'charset' => 'utf8',<br>
        'collation' => 'utf8_unicode_ci',<br>
    </li>
    <li><strong>create migration files</strong></li>
    <li><strong>migrate tables</strong><br>php artisan migrate</li>
    <li><strong>create models</strong></li>
    <li><strong>authentication</strong></li>
    <ol>
        <li><strong>authentication using jwt</strong><br>
            <a href="https://www.positronx.io/laravel-jwt-authentication-tutorial-user-login-signup-api/">laravel-jwt-authentication-tutorial</a>
        </li>
        <li><strong>install jwt</strong><br>composer require tymon/jwt-auth:dev-develop --prefer-source</li>
        <li><strong>go to config/app.php</strong><br>
            <ul>
                <li>include the laravel service provider inside the providers array.<br>
                    'providers' => [<br>
                        ....<br>
                        ....<br>
                        Tymon\JWTAuth\Providers\LaravelServiceProvider::class,<br>
                    ],<br>
                </li>
                <li>include the JWTAuth and JWTFactory facades inside the aliases array.<br>
                    'aliases' => [<br>
                        ....<br>
                        'JWTAuth' => Tymon\JWTAuth\Facades\JWTAuth::class,<br>
                        'JWTFactory' => Tymon\JWTAuth\Facades\JWTFactory::class,<br>
                        ....<br>
                    ],
                </li>
            </ul>
        </li>
        <li><strong>publish LaravelServiceProvider</strong><br>php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"</li>
        <li><strong>generate jwt secret key</strong><br>php artisan jwt:secret</li>
        <li><strong>create middleware for API</strong></li>
        <ul>
            <li>php artisan make:middleware Api</li>
            <li>copy class content from vendor\laravel\framework\src\Illuminate\Routing\Middleware\SubstituteBindings.php and paste inside Middleware/Api.php</li>
        </ul>
        <li><strong>configure auth guard: goto config/auth.php</strong><br></li>
        <ul>
            <li>
            'guards' => [<br>
                'admin' => [<br>
                    'driver' => 'jwt',<br>
                    'provider' => 'admins',<br>
                    'hash' => false,<br>
                ],<br>
                'user' => [<br>
                    'driver' => 'jwt',<br>
                    'provider' => 'users',<br>
                    'hash' => false,<br>
                ]<br>
            ],<br><br>
            'providers' => [<br>
                'users' => [<br>
                    'driver' => 'eloquent',<br>
                    'model' => App\Models\Users::class,<br>
                ],<br>
                'admins' => [<br>
                    'driver' => 'eloquent',<br>
                    'model' => App\Models\Admins::class,<br>
                ],<br>
            ],
            </li>
        </ul>
        <li><strong>configure middleware: goto http/Kernel.php</strong><br></li>
        <ul>
            <li>
                protected $middlewareGroups = [<br>
                    -------------------------------<br>
                    'admin' => [<br>
                        \App\Http\Middleware\Api::class,<br>
                    ],<br>
                    'user' => [<br>
                        \App\Http\Middleware\Api::class,<br>
                    ],<br>
                ];
            </li>
        </ul>
    </ol>
</ol>

# frontend
<ol>
    <li><strong>install frontend</strong><br>npm install --save-dev vue@2</li>
    <li><strong>install required packages</strong><br>npm install vue-template-compiler vue-loader@^15.9.5 --save-dev --legacy-peer-deps</li>
    <li><strong>update packages</strong><br>npm update</li>
    <li><strong>install vue router</strong><br>npm install vue-router@3 vue-axios --save --legacy-peer-deps</li>
    <li><strong>install axios, vue axios</strong><br>npm install axios vue-axios</li>
    <li><strong>install ant design</strong><br>npm install ant-design-vue@1.x --save</li>
    <li><a href="https://butlerraines.com/code-stuff/adding-vue-2-laravel-8">Adding Vue 2 to Laravel 8</a></li>
    <li><strong>look into these files below :</strong></li>
    <ul>
        <li>resources\js\app.js</li>
        <li>resources\js\routes.js</li>
        <li>resources\views\app.blade.php</li>
        <li>webpack.mix.js</li>
    </ul>
</ol>
