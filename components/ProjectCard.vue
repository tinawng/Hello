<template>
  <div class="card-container flex flex-col">
    <div class="h-44 flex-center rounded-t-lg" :class="'bg-' + color + '-100'">
      <span class="text-7xl"><slot name="emoji"></slot></span>
    </div>
    <div class="p-4 flex-grow flex flex-col">
      <h2><slot name="name"></slot></h2>
      <h6 class="mt-0.5 ml-4"><slot name="definition"></slot></h6>
      <h4 class="mt-2"><slot name="description"></slot></h4>
      <!-- <div class="mt-2 ml-4 flex">
        <h5 class="pill" :class="'border-' + color + '-300 text-' + color + '-600'" v-for="tech in stack" :key="tech">{{tech}}</h5>
      </div> -->
      <div class="mt-auto pt-10 pb-1 text-right">
        <button
          v-for="link in links"
          :key="link"
          class="ml-4"
          :class="
            'bg-' +
            color +
            '-400 hover:bg-' +
            color +
            '-300 active:bg-' +
            color +
            '-400'
          "
        >
          <a :href="link.url">{{ link.name }}</a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["color", "stack", "links"],
  mounted() {
    this.$el.getElementsByTagName("b").forEach((el) => {
      el.classList.add("bg-" + this.color + "-200");
    });
  },
};
</script>

<style lang="postcss" scoped>
.card-container {
  @apply bg-orange-50 rounded-lg shadow-lg;
}

/* .pill {
  @apply mr-2 px-2;
  @apply border-2 rounded-full;
} */
</style>