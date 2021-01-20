<template>
  <div>
    <section id="title" class="h-screen pb-12 flex items-end">
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
    <section class="mt-12 flex flex-wrap justify-between">
      <project-card id="c1" />
      <project-card id="c2" class="mt-48" />
      <project-card id="c3" class="-mt-24" />
      <project-card id="c4" class="mt-24" />
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    if (process.client) {
      this.$lax.addElements("#title", {
        scrollY: {
          opacity: [
            ["screenHeight * 0.75", "screenHeight * 0.9"],
            [1, 0],
          ],
        },
      });

      var addFadeOut = (selector) => {
        var self = this;

        // ⚡️ Add listener only when element is visible on screen
        this.$intersectionHelper.addTrigger(
          selector,
          () => {
            self.$lax.addElements(selector, {
              scrollY: {
                opacity: [
                  [
                    window.scrollY + "+ screenHeight",
                    window.scrollY + "+ screenHeight * 1.2",
                  ],
                  [1, 0],
                ],
              },
            });
          },
          0
        );
      };

      addFadeOut("#c1");
      addFadeOut("#c2");
      addFadeOut("#c3");
    }
  },
};
</script>

<style lang="postcss" scoped>
</style>
