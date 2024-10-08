import Cart from "@/components/Cart.vue"; // 假設這是購物車頁面
import Checkout from "@/components/Checkout.vue";
import Commodity from "@/components/Commodity.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: Commodity,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
