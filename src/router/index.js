import Vue from "vue";
import Router from "vue-router";

import index from "@/components/Index";
import sample1 from "@/components/Sample1";
import tasks from "@/components/Tasks/Index";

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
      path: "/tasks",
      component: tasks
    }
  ]
});
