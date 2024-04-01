import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/routine1",
      name: "routine1",
      component: () => import("../views/Routine1.vue"),
    },
    {
      path: "/routine2",
      name: "routine2",
      component: () => import("../views/Routine2.vue"),
    },
    {
      path: "/routine3",
      name: "routine3",
      component: () => import("../views/Routine3.vue"),
    },
  ],
});

export default router;
