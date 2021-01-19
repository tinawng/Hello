<template>
  <div class="layout-container">
    <nav-bar/>
    <!-- <img
        class="absolute top-0 w-12"
        style="opacity: 0.05; transform: rotate(20deg);"
        src="~/assets/images/cherry_blossom_y.png"
        alt="tanabata-icon"
      /> -->
    <Nuxt />
  </div>
</template>

<style lang="postcss" scoped>
.layout-container {
  min-height: 100vh;
  width: 1280px;
  max-width: 90vw;
  @apply mx-auto;
}
</style>
