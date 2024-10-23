/* #version=0.0.0-0#3 rm 2024-06-26T18:42:35 CF5F2F59F8CC2ED6 */
/* #version=0.0.0-0#2 rm 2024-06-26T18:38:44 A6CD6B00E0CEB849 */
import { createRouter, createWebHistory } from "vue-router";
// import { createRouter } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
