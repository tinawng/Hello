<template>
  <div class="card-container">
    <div class="thumbnail flex-center">
      <img
        class="w-1/3"
        src="~/assets/images/tanabata.png"
        alt="tanabata-icon"
      />
    </div>
    <div>texttexttext</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.card-container {
  width: calc(50% - 5vw);
  /* @apply bg-beaver-100; */
}
.thumbnail {
  @apply h-64 w-full;
  @apply bg-steel-800;
}
</style>