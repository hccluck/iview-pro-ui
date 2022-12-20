import pkg from '../package.json';

import TablePage from './components/TablePage/index.js';
import SearchForm from './components/SearchForm/index.js';
import PageTitle from './components/PageTitle/index.js';

import copy from './directives/copy.js';
import loading from './directives/loading.js';

const components = {
  TablePage,
  SearchForm,
  Title: PageTitle,
  Tips: PageTitle,
};

const install = function (Vue) {
  Vue.directive('copy', copy);
  Vue.use(loading);

  for (const name in components) {
    Vue.component(name, components[name]);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  version: pkg.version,
  ...components,
};
