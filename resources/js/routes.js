import VueRouter from "vue-router";
import Bookables from "./components/bookables/Bookables.vue";
import Bookable from "./components/bookable/Bookable.vue";
const routes = [
    {
        path: "/",
        component: Bookables,
        name: "home"
    },
    {
        path: "/bookables/:id",
        component: Bookable,
        name: "bookable"
    }
];

const router = new VueRouter({
    routes,
    mode: "history"
});

export default router;
