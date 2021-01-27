<template>
  <div>
    <section class="-mt-10 text-center">
      <h1>👋 Hello there, I'm <b>Tina Wang</b></h1>
      <h3 class="mt-4">Jamstack Developer & UI/UX Designer Wannabe</h3>
    </section>
    <section class="mb-10">
      <div class="grid grid-flow-row-2 lg:grid-cols-2 gap-8 items-center">
        <div>
          <img
            class="w-full mx-auto rounded-2xl shadow-lg"
            :srcSet="img_tina_sizes.srcSet"
            :src="img_tina_sizes.src"
            alt="tina"
          />
        </div>
        <div>
          <h2>I'm a full-stack developer, entrepreneur and Coffe Lover</h2>
          <h4 class="mt-2">
            I've been in love with web development for more than 15 years. I'm
            very passionate and enthusiastic about using technology to solve my
            life's problems and ambitions, and not to mention, I really like a
            good cup of coffee ☕️.
          </h4>
        </div>
      </div>
    </section>
    <section class="bg-orange-250">
      <div>
        <h2>🔖 My Projects</h2>
        <!-- <h4>Lorem lorem lorem ipsum</h4> -->
        <div class="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <project-card
            v-for="project in projects"
            :key="project.name"
            :color="project.color"
            :stack="project.stack"
            :links="project.links"
          >
            <template v-slot:name>{{ project.name }}</template>
            <template v-slot:emoji>{{ project.emoji }}</template>
            <template v-slot:definition>{{ project.definition }}</template>
            <template v-slot:description
              ><span v-html="project.description"></span
            ></template>
          </project-card>
        </div>
      </div>
    </section>
    <section>
      <div>
        <h2>⚗️ My Backend</h2>
        <div class="h-96 mt-20 grid grid-cols md:grid-cols-2 gap-16 md:gap-0 justify-center">
          <div class="flex-vertical-center-x text-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="22" y1="12" x2="2" y2="12"></line>
              <path
                d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
              ></path>
              <line x1="6" y1="16" x2="6.01" y2="16"></line>
              <line x1="10" y1="16" x2="10.01" y2="16"></line>
            </svg>
            <h2 class="mt-8">Siyu</h2>
            <h3 class="mt-6">Specs:</h3>
            <h4 class="mt-0.5">
              Raspberry Pi 4 <br />4 OC Cores ~ 4GB RAM <br />
              16GB SD Card
            </h4>
            <h3 class="mt-4">Stack:</h3>
            <h4 class="mt-0.5">
              💨 Yeetify instance for 👋 Hello static website <br />
              💨 Yeetify instance for 🍇 Grapes static website <br />
              🍡 Dango SSR Nuxt Server <br />
              🤖 Siyu's Disord Bot <br />
            </h4>
          </div>
          <div class="flex-vertical-center-x text-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
            </svg>
            <h2 class="mt-8">Latte</h2>
            <h3 class="mt-6">Specs:</h3>
            <h4 class="mt-0.5">
              Raspberry Pi 4 <br />
              4 Cores ~ 4GB RAM <br />
              4x1To SSD
            </h4>
            <h3 class="mt-4">Stack:</h3>
            <h4 class="mt-0.5">
              🗃️ MongoDB Database <br />
              🍱 Samba Server <br />
              🎋 Tanabata REST API
            </h4>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import projects from "~/assets/data/projects.json";
const img_tina_sizes = require("~/assets/img/tina.jpg?resize&sizes[]=600&sizes[]=900&sizes[]=1200");

export default {
  data() {
    return { projects, img_tina_sizes };
  },
};
</script>

<style lang="postcss" scoped>
section {
  @apply py-20;
}
svg {
  @apply h-20;
}
</style>
