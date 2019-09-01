import Vue from "vue";
import Router from "vue-router";

import index from "@/components/Index";
import sample1 from "@/components/Sample1";
import sample2 from "@/components/Sample2/Index";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: index
    },
    {
      path: "/sample1",
      component: sample1
    },
    {
      path: "/sample2",
      component: sample2
    }
  ]
});
