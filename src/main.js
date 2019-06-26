import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './stores';
import api from './api';
import { ServiceInjector } from './services/service-injector';
import { serviceSpecs } from './services/service-specs';

Vue.config.productionTip = false;

api.initialize();

const serviceInjector = new ServiceInjector(serviceSpecs);
Vue.prototype.$service = serviceInjector;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
