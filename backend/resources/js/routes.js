const Welcome = () => import("./components/Welcome.vue");
export const routes = [
    {
        name: "home",
        path: "/",
        component: Welcome,
    },
];
