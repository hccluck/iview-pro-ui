import TablePage from './src/components/TablePage.vue';
import SearchForm from './src/components/SearchForm.vue';
import PageTitle from './src/components/PageTitle.vue';

import copy from './src/directives/copy';
import loading from './src/directives/loading';

const iViewProUi = {
  install(Vue) {
    Vue.directive('copy', copy);
    Vue.directive('loading', loading);

    Vue.component('TablePage', TablePage);
    Vue.component('SearchForm', SearchForm);
    Vue.component('Title', PageTitle);
    Vue.component('Tips', PageTitle);
  },
};

export default iViewProUi;
