/* #version=0.0.0-0#10 rm 2024-12-06T15:36:55 E20DDF1762695984 */
/* #version=0.0.0-0#9 rm 2024-12-06T15:35:55 DAB7CDD4F5B18797 */
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
// import { createRouter } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LoginRegistrationView from "@/views/LoginRegistrationView.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/",
    name: "LoginRegistration",
    component: LoginRegistrationView
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
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL), //https://stackoverflow.com/questions/60238731/vue-router-showing-blank-page-when-built
  routes,
});

export default router;
