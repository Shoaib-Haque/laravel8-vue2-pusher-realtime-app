const Login = () => import("./components/Auth/Login.vue");
const Registration = () => import("./components/Auth/Registration.vue");
const AdminDashboard = () => import("./components/Admin/Dashboard/Index.vue");
const UserDashboard = () => import("./components/User/Dashboard/Index.vue");

const PublicRoute = (to, from, next) => {
    let isAuthenticated = getAuth();
    if (!isAuthenticated) {
        next();
    } else {
        if (getRole() === "admin") next("/admin/dashboard");
        if (getRole() === "user") next("/user/dashboard");
    }
};

const AdminProtectedRoute = (to, from, next) => {
    let isAuthenticated = getAuth();
    if (isAuthenticated && getRole() === "admin") {
        next();
    } else {
        next("/login");
    }
};

const UserProtectedRoute = (to, from, next) => {
    let isAuthenticated = getAuth();
    if (isAuthenticated && getRole() === "user") {
        next();
    } else {
        next("/login");
    }
};

function getAuth() {
    let token = localStorage.getItem("authToken");
    return token;
}

function getRole() {
    let role = localStorage.getItem("role");
    return role;
}

export const routes = [
    {
        path: "/",
        redirect: "/login",
    },
    {
        name: "login",
        path: "/login",
        component: Login,
        beforeEnter: PublicRoute,
    },
    {
        name: "registration",
        path: "/registration",
        component: Registration,
        beforeEnter: PublicRoute,
    },
    {
        name: "admin-dashboard",
        path: "/admin/dashboard",
        component: AdminDashboard,
        beforeEnter: AdminProtectedRoute,
    },
    {
        name: "user-dashboard",
        path: "/user/dashboard",
        component: UserDashboard,
        beforeEnter: UserProtectedRoute,
    },
];
