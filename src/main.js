import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './stores';
import api from './api';

Vue.config.productionTip = false;

api.initialize();

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
