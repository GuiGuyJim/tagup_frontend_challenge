import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueTypeaheadBootstrap from "vue-typeahead-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

// Install BootstrapVue
Vue.use(BootstrapVue);
// Install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
// Reference the auto-complete control
Vue.component("vue-typeahead-bootstrap", VueTypeaheadBootstrap);

new Vue({
	render: h => h(App)
}).$mount("#app");
