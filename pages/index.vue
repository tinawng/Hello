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
          fill="currentColor"
          d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
        />
      </svg>
    </section>
    <section class="mt-24 flex justify-between">
      <project-card />
      <project-card class="mt-48" />
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
</style>
