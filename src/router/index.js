import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CssBinding from "../views/CssBinding.vue";
import formInput from "../views/formInput.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/css_binding",
    name: "CssBinding",
    component: CssBinding,
  },
  {
    path: "/form_input",
    name: "formInput",
    component: formInput,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
