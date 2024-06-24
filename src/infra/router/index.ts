import { createWebHistory, createRouter } from "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    isAdmin?: boolean;
    requiresAuth: boolean;
  }
}

// const routes = [];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [],
});

export default router;
