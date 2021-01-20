import Vue from "vue";
import lax from "lax.js";

lax.init();
lax.addDriver("scrollY", function () {
  return window.scrollY;
});

Vue.prototype.$lax = lax;