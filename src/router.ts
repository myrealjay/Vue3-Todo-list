import { createWebHistory, createRouter } from "vue-router";
import Todo from "@/components/Todo.vue";
import ViewTodo from "@/components/ViewTodo.vue";

const routes = [
  {
    path: "/",
    name: "Todo",
    component: Todo,
  },
  {
    path: "/view/:id",
    name: "view-todo",
    component: ViewTodo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;