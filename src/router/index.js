import Vue from "vue";
import VueRouter from "vue-router";
import Category from "@/views/Category.vue";
import Purchase from "@/views/Purchase.vue";
import NFC from "@/views/Category.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/category",
    name: "category",
    component: Category
  },
  {
    path: "/purchase",
    name: "purchase",
    component: Purchase
  },
  {
    path: "/nfc",
    name: "nfc",
    component: NFC
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
