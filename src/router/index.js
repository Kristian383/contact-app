import { createRouter, createWebHistory } from "vue-router";
import ContactsView from "../views/ContactsView.vue";

const routes = [
  { path: "/", redirect: "/contacts" },
  {
    path: "/contacts",
    name: "home",
    component: ContactsView,
  },
  {
    path: "/add",
    name: "add",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/AddContact.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
