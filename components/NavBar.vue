<template>
  <div class="z-50 nav-container flex-center-y justify-end">
    <transition name="slide-fade">
      <div v-if="show_nav" class="w-1/3 flex justify-between mr-16">
        <h4></h4>
        <h4>resume</h4>
        <h4>github</h4>
        <h4>instagram</h4>
      </div>
    </transition>
    <div
      class="burger-container flex-vertical-center-y items-end"
      @click="show_nav = !show_nav"
    >
      <span class="w-5" :class="[show_nav ? 'mb-0' : 'mb-1.5']"></span>
      <span
        class="w-3 parent-hover:w-5"
        :class="{ 'opacity-0': show_nav }"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    show_nav: false,
  }),
};
</script>

<style lang="postcss" scoped>
.nav-container {
  @apply fixed top-0;
  @apply h-32;
  width: inherit;
}

.burger-container {
  @apply h-full;
  /* @apply group; */
  @apply cursor-pointer;
}
.burger-container span {
  @apply h-px;
  @apply bg-steel-800;
  transition: all 0.4s;
  transition-property: margin, width, opacity;
}
.burger-container:hover .parent-hover\:w-5 {
  @apply w-5
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s;
  transition-property: transform, opacity;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(5px);
  opacity: 0;
}
</style>