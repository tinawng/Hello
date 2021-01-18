<template>
  <div class="card-container">
    <div class="thumbnail flex-center">
      <img
        class="w-1/3"
        src="~/assets/images/tanabata.png"
        alt="tanabata-icon"
      />
    </div>
    <div class="mt-2 flex flex-col">
      <h3 class="mt-1">REST API ~ Backend</h3>
      <h2 class="mt-4">Tanabata</h2>
      <h6>
        A Tanabata tree, a type of wish tree on which people hang wishes written
        on paper and other decorations during Tanabata, a Japanese festival.
      </h6>
      <h5 class="mt-4">
        <p>Multipurpose rest api built with Fastify based on NodeJS</p>
        <p>
          Cognitis enim pilatorum caesorumque funeribus nemo deinde ad has
          stationes appulit navem, sed ut Scironis praerupta letalia declinantes
          litoribus Cypriis contigui navigabant, quae Isauriae scopulis sunt
          controversa.
        </p>
      </h5>
      <a class="mt-4" href="https://github.com/tinawng/tanabata">GitHub Repo</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.card-container {
  width: calc(50% - 5vw);
  /* @apply bg-beaver-200; */
}
.thumbnail {
  @apply h-64 w-full;
  /* @apply bg-steel-800; */
  background: #f2cc89aa;
}
</style>