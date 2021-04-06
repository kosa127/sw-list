import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../layouts/CenteredLayout"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("../views/Home"),
      },
      {
        path: "person/:name/edit",
        name: "Edit",
        component: () => import("../views/Edit"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
