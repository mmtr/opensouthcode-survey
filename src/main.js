import Vue from 'vue';
import Survey from './Survey.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(Survey),
}).$mount('.js-survey');
