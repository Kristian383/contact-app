import { createRouter, createWebHistory } from "vue-router";
import ContactsView from "../views/ContactsView.vue";
// import AddContact from "../components/AddContact.vue";

const routes = [
  { path: "/", redirect: "/contacts" },
  {
    path: "/contacts",
    name: "home",
    component: ContactsView,
  },
  {
    path: "/add",
    name: "Add Contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/AddContact.vue"),
  },
  {
    path: "/add/:email",
    name: "Edit Contact",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/AddContact.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
