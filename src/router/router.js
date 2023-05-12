import Index from "@/pages/Index.vue";
import IndexFolder from "@/pages/IndexFolder.vue"
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";


const routes = [
  {
    path: "/",
    component: Index,
  },
  {
    path: "/:folder",
    component: IndexFolder,
  },
  
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
