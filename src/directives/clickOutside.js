export default {
  bind(el, binding) {
    const bubble = binding.modifiers.bubble;
    const ua = navigator.userAgent;
    const event = (ua.match(/iPad|iPhone/i)) ? 'touchstart' : 'click';
    const handler = (e) => {
      if (bubble || (!el.contains(e.target) && el !== e.target)) {
        binding.value(e);
      }
    };
    el.vueClickOutside = handler;
    document.addEventListener(event, handler);
  },
  unbind(el) {
    document.removeEventListener(event, el.vueClickOutside);
    el.vueClickOutside = null;
  },
};
