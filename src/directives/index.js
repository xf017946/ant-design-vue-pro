export default {
  install(Vue) {
    Vue.directive('admin', {
      // 指令的定义
      inserted: function(el, binding) {
        if (binding.value !== 'admin') {
          const parent = el.parentNode;
          parent.removeChild(el);
        }
      }
    });
  }
};
