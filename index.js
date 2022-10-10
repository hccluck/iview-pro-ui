import TablePage from './src/components/TablePage.vue';
import SearchForm from './src/components/SearchForm.vue'

import copy from './src/directives/copy';
import loading from './src/directives/loading';

const iViewProUi = {
  install(Vue) {
    Vue.directive('copy', copy);
    Vue.directive('loading', loading);

    Vue.component('TablePage', TablePage);
    Vue.component('SearchForm', SearchForm);
  },
};

export default iViewProUi;
