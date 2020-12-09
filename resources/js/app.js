require('./bootstrap');
import VueRouter from 'vue-router';
import moment from "moment";
import router from "./routes";
import index from "./index";
import StarRating from "./shared/components/StarRating";
window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component("example-2", require("./components/Example2.vue").default);
Vue.use(VueRouter);
Vue.filter("fromNow", value => moment(value).fromNow());
Vue.component("star-rating", StarRating);

const app = new Vue({
    el: '#app',
    router,
    components: {
        "index": index
    }
});
