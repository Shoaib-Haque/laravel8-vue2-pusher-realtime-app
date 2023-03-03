const Welcome = () => import("./components/Welcome.vue");
const Login = () => import("./components/Login.vue");
export const routes = [
    {
        name: "home",
        path: "/",
        component: Welcome,
    },
    {
        name: "login",
        path: "/login",
        component: Login,
    },
];
