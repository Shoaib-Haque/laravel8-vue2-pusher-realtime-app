const Login = () => import("./components/Auth/Login.vue");
const Dashboard = () => import("./components/Dashboard/Index.vue");
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
        name: "dashboard",
        path: "/dashboard",
        component: Dashboard,
    },
];
