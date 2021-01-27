<template>
  <div class="layout-container">
    <nav-bar />
    <!-- <img
        class="absolute top-0 w-12"
        style="opacity: 0.05; transform: rotate(20deg);"
        src="~/assets/img/cherry_blossom_y.png"
        alt="tanabata-icon"
      /> -->
    <Nuxt />
  </div>
</template>

<style lang="postcss">
.layout-container {
  min-height: 100vh;
}
section > *,
nav-container {
  width: 1200px;
  max-width: 90vw;
  @apply mx-auto;
}
</style>
