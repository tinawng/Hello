<template>
  <img ref="responsive-image" :src="images[0].path" :srcset="set" :alt="alt" />
</template>

<script>
export default {
  props: ["images", "alt"],
  data: () => ({
    set: "",
  }),
  created() {
    this.set += this.images[0].path + " 3x, ";
    this.set += this.images[1].path + " 2.5x, ";
    this.set += this.images[2].path + " 1x";
  },
};
</script>