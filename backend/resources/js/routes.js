const Login = () => import("./components/Auth/Login.vue");
const Registration = () => import("./components/Auth/Registration.vue");
const AdminDashboard = () => import("./components/Admin/Dashboard/Index.vue");
const UserDashboard = () => import("./components/User/Dashboard/Index.vue");
export const routes = [
    {
        name: "home",
        path: "/",
        component: Login,
    },
    {
        name: "login",
        path: "/login",
        component: Login,
    },
    {
        name: "registration",
        path: "/registration",
        component: Registration,
    },
    {
        name: "admin-dashboard",
        path: "/admin/dashboard",
        component: AdminDashboard,
    },
    {
        name: "user-dashboard",
        path: "/user/dashboard",
        component: UserDashboard,
    },
];
