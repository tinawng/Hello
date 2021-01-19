<template>
  <div>
    <section class="h-screen pb-8 flex items-end">
      <img
        class="h-16 mr-6"
        src="~/assets/images/bookmark_y.png"
        alt="bookmark-icon"
      />
      <div class="text-left text-steel-900">
        <h1>Tina Wang</h1>
        <h4>projects bookmarks</h4>
      </div>
      <svg class="h-6 ml-auto" viewBox="0 0 24 24">
        <path
          fill="#282e3fAA"
          d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
        />
      </svg>
    </section>
    <section class="mt-24 flex justify-between">
      <project-card />
      <project-card class="mt-48" />
      <project-card />
      <project-card />
      <project-card />
      <project-card />
    </section>
  </div>
</template>

<script>
export default {
  created() {},
  mounted() {
    // window.requestAnimationFrame(this.UpdateLax);

    if (process.client) {
      this.$lax.init();
      // Add a driver that we use to control our animations
      this.$lax.addDriver("scrollY", function () {
        return window.scrollY;
      });

      // Add animation bindings to elements
      this.$lax.addElements(".card-container", {
        scrollY: {
          opacity: [
            ['screenHeight*0.3', 0],
            [0, 1],
          ],
        },
      });
    }
  },
  methods: {
    UpdateLax() {
      // this.$lax.update(window.scrollY);
      // window.requestAnimationFrame(this.UpdateLax);
    },
  },
};
</script>

<style lang="postcss" scoped>
</style>
