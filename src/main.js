import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import store from "./stores";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(Vuex);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
