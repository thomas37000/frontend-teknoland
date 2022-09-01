import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Vinyles",
      component: () => import("@/views/Vinyles.vue"),
    },
    {
      path: "/artistes",
      name: "Artistes",
      component: () => import("@/views/Artistes.vue"),
    },
    {
      path: "/admin",
      name: "Admin",
      component: () => import("@/views/Admin.vue"),
    },
    {
      path: "/vinyle/:idVinyle",
      name: "VinyleById",
      props: true,
      component: () => import("@/views/VinyleById.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
