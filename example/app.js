/**
 * Import Vue and VuePusher.
 */
import Vue from 'vue';
import VuePusher from 'vue-pusher2';


/**
 * Import components.
 */
import App from './components/App.vue';

/**
 * Set Vue to use VuePusher and configure it.
 */
Vue.use(VuePusher, {
  api_key: 'xxxxxxxxxxxxxx',
  options: {
    cluster: 'us2',
    forceTLS: true
  }
});

/**
 * Create a vue instance
 */
new Vue({ components: { App }}).$mount('#app');