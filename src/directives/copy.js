import Clipboard from 'clipboard';

export default {
  bind(el, { value, arg }) {
    if (arg === 'success') {
      el._v_copy_success = value;
    } else if (arg === 'error') {
      el._v_copy_error = value;
    } else {
      const clipboard = new Clipboard(el, {
        text() {
          return value;
        },
        action() {
          return arg === 'cut' ? 'cut' : 'copy';
        },
      });

      clipboard.on('success', e => el._v_copy_success?.(e));
      clipboard.on('error', e => el._v_copy_error?.(e));

      el._v_context = clipboard;
    }
  },
  update(el, { value, arg }) {
    if (arg === 'success') {
      el._v_copy_success = value;
    } else if (arg === 'error') {
      el._v_copy_error = value;
    } else {
      el._v_context.text = function () {
        return value;
      };
      el._v_context.action = function () {
        return arg === 'cut' ? 'cut' : 'copy';
      };
    }
  },
  unbind(el, { arg }) {
    if (arg === 'success') {
      delete el._v_copy_success;
    } else if (arg === 'error') {
      delete el._v_copy_error;
    } else {
      el._v_context?.destroy();
      delete el._v_context;
    }
  },
};
