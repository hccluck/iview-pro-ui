import Clipboardjs from 'clipboard';

const copy = {
  bind: function (el, { value }) {
    if (!Clipboardjs.isSupported()) {
      return;
    }

    el.style.cursor = 'pointer';

    let text = typeof value === 'string' ? value : typeof value === 'object' && value !== null && value.data ? value.data : el.getAttribute('copy-data');
    let target = typeof value === 'object' && value !== null && value.target ? value.target : null;

    let container = typeof value === 'object' && value !== null && value.container ? value.container : null;

    let options = {};

    if (target) {
      let element = document.querySelector(target);
      element && (options.target = () => element);
    } else {
      options.text = () => text;
    }

    if (container) {
      let element = document.querySelector(container);
      element && (options.container = element);
    }

    const clipboard = new Clipboardjs(el, options);

    clipboard.on('success', function (e) {
      value && value.success && value.success(e);
    });
    clipboard.on('error', function (e) {
      value && value.error && value.error(e);
    });

    el.$clipboard = clipboard;
  },
  unbind: function (el) {
    if (!Clipboardjs.isSupported()) {
      return;
    }
    el.$clipboard.destroy();
    delete el.$clipboard;
  },
};

export default copy;
