class intersectionHelperInstance {
  options = {
    threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
  };

  addTrigger = (selector, callback = () => { }, callback_threshold = 1, once = true) => {
    const domElement = document.querySelector(selector);

    var observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        const threshold = entry.intersectionRatio;

        if (threshold > callback_threshold || threshold == 1) {
          callback();
          if (once) observer.unobserve(domElement);
        }
      });
    }, this.options);

    observer.observe(domElement);
  }
}

import Vue from "vue";
Vue.prototype.$intersectionHelper = new intersectionHelperInstance();