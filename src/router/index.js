import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CssBinding from "../views/CssBinding.vue";
import formInput from "../views/formInput.vue";
import slotLearn from "../views/Slot_lern.vue";
import Condition from "../views/Condition.vue";
import Loop from "../views/Loop.vue";
import DynamicAddRemove from "../views/DynamicAddRemove.vue";

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
  {
    path: "/slot",
    name: "Slot",
    component: slotLearn,
  },
  {
    path: "/condition",
    name: "Condition",
    component: Condition,
  },
  {
    path: "/loop",
    name: "Loop",
    component: Loop,
  },
  {
    path: "/dynamic_add_and_remove",
    name: "Loop",
    component: DynamicAddRemove,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
