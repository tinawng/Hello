<template>
  <div class="card-container">
    <div
      v-lazy-container="{ selector: 'img' }"
      class="thumbnail flex-center"
      :style="'background: #' + color + '99'"
    >
      <img
        class="w-1/3"
        :data-src="require(`~/assets/images/${icon}.png`)"
        :data-loading="require(`~/assets/images/${icon}.png?lqip`)"
        alt="card-icon"
      />
    </div>
    <div class="mt-4 flex flex-col">
      <h3 class="mt-4"><slot name="stack"></slot></h3>
      <h2 class="mt-6"><slot name="name"></slot></h2>
      <h6 class="mt-0.5 ml-1"><slot name="definition"></slot></h6>
      <h5 class="mt-6"><slot name="description"></slot></h5>
      <div class="mt-6 flex" :style="cssVars">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["icon", "color"],
  computed: {
    cssVars() {
      return {
        "--bg-color": "#" + this.color + "AA",
      };
    },
  },
};
</script>

<style lang="postcss" scoped>
.card-container {
  width: calc(50% - 5vw);
}
.thumbnail {
  @apply h-64 w-full;
}
a:hover {
  background: var(--bg-color);
}
</style>