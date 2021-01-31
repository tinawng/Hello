<template>
  <div class="card-container flex flex-col">
    <div class="h-44 flex-center rounded-t-lg" :class="'bg-' + color + '-100'">
      <span class="text-7xl emoji"><slot name="emoji"></slot></span>
    </div>
    <div class="p-4 flex-grow flex flex-col">
      <h2><slot name="name"></slot></h2>
      <h6 class="mt-0.5 ml-4"><slot name="definition"></slot></h6>
      <h4 class="mt-2"><slot name="description"></slot></h4>

      <h4 class="mt-auto pt-4 mb-0.5">Stack:</h4>
      <h4 v-for="tech in stack" :key="tech.name" class="flex justify-between">
        <span class="font-bold">{{tech.name}}</span>
        <h6 class="text-right">{{tech.description}}</h6>
      </h4>
      
      <div class="pt-4 pb-1 text-right">
        <button
          v-for="link in links"
          :key="link.name"
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
          <a :href="link.url"><h5>{{ link.name }}</h5></a>
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
      el.classList.add("bg-" + this.color + "-300");
      el.classList.add("bg-opacity-50");
    });
  },
};
</script>

<style lang="postcss" scoped>
.card-container {
  @apply bg-orange-50 rounded-lg shadow-lg;
}

.card-container:hover .emoji {
  animation-name: bounce;
  animation-duration: .5s;
}
</style>