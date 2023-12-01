import Vue from "vue";
import VueRouter from "vue-router";
import MainComponent from "../views/MainComponent.vue";
import NotFoundComponent from "../views/NotFoundComponent.vue";
import BlogComponent from "../views/BlogComponent.vue";
import BlogDetailsComponent from "../views/BlogDetailsComponent.vue";
import ProjectComponent from "../views/ProjectComponent.vue";
import ProjectDetailsComponent from "../views/ProjectDetailsComponent.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "main",
        component: MainComponent,
    },
    {
        path: "/interno/",
        name: "main",
        component: MainComponent,
    },
    {
        path: "*",
        name: "notfound",
        component: NotFoundComponent,
    },
    {
        path: "/blog",
        name: "blog",
        component: BlogComponent,
    },
    {
        path: "/blog/details",
        name: "blogdetails",
        component: BlogDetailsComponent,
    },
    {
        path: "/project",
        name: "project",
        component: ProjectComponent,
    },
    {
        path: "/project/details",
        name: "projectdetails",
        component: ProjectDetailsComponent,
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
