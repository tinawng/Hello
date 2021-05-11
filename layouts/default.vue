<template>
  <div class="layout-container">
    <nav-bar />
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
  max-width: 80vw;
  @apply mx-auto;
}
</style>
