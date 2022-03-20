<template>
  <div>
    <section class="text-center">
      <h1>👋 Hello there, I'm <b>Tina Wang</b></h1>
      <h3 class="mt-4">Jamstack Developer & UI/UX Designer Wannabe</h3>
    </section>

    <section ref="hero" class="hero">
      <div
        class="grid grid-flow-row-2 lg:grid-cols-2 gap-4 lg:gap-8 xl:gap-y-16 items-center"
      >
        <ResponsiveImage :images="img_tina_sizes.images" alt="tina"/>
        <h4>
          <h2 class="mb-2 text-left">
            I'm a Jamstack developer, UI designer and Music Lover
          </h2>
          I've been in love with web development since my very first experiments
          with it. I'm very passionate and enthusiastic about using technology
          to solve my life's problems and ambitions, and not to mention, I
          really like a good cup of cafe ☕️ while listening to some of my
          favorite albums 🎵.
        </h4>

        <h4 class="row-start-4 lg:row-start-auto lg:text-right">
          This passion for music comes with my joy of playing piano (for almost
          20years now 💪), which ultimatly led me to my first job 🎉.
        </h4>
        <ResponsiveImage :images="img_piano_sizes.images" alt="piano"/>
        <ResponsiveImage :images="img_grapes_thumnail_sizes.images" alt="grapes-thumnail"/>
        <h4>
          I approach every project with passion and dedication, applying
          meticulous detail 🎨, skills and craftsmanship to every stage of my
          creating process ✨.
        </h4>
      </div>
    </section>

    <section class="projects">
      <div>
        <h2><b>🔖 My Projects</b></h2>
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
          <div class="mt-10 xl:mt-0 flex-vertical-center">
            <h3 class="text-lg xl:text-2xl">And many more...</h3>
            <button
              class="mt-4 px-4 py-3 bg-steel-700 hover:bg-steel-500 active:bg-steel-700"
            >
              <a href="https://github.com/tinawng/"
                ><h4>visit my GitHub 🚀</h4></a
              >
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="backend">
      <div>
        <h2><b>⚗️ My Backend</b></h2>
        <div
          class="mt-10 grid grid-cols md:grid-cols-2 gap-16 md:gap-0 justify-center"
        >
          <div class="flex-vertical-center-x text-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
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
            <h2 class="mt-4">Siyu</h2>
            <h3 class="mt-6">Specs:</h3>
            <h4 class="mt-0.5">
              Raspberry Pi 4B <br />
              4 Cores ~ 4GB RAM <br />
              Ubuntu 20.04 LTS aarch64 <br />
              16GB SD Card
            </h4>
            <h3 class="mt-4">Stack:</h3>
            <h4 class="mt-0.5">
              💨 x10 Yeetify Instances <br />
              🔀 HAProxy reverse proxy <br />
              🤖 Siyu's Disord Bot <br />
            </h4>
          </div>
          <div class="flex-vertical-center-x text-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
            </svg>
            <h2 class="mt-6">Latte</h2>
            <h3 class="mt-6">Specs:</h3>
            <h4 class="mt-0.5">
              Raspberry Pi 4B <br />
              4 Cores ~ 4GB RAM <br />
              Ubuntu 20.04 LTS aarch64 <br />
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

    <section class="footer">
      <div class="grid grid-cols-3 gap-8 md:gap-0">
        <a
          href="https://www.instagram.com/tina_likes_cafe/"
          class="flex-vertical-center"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          <h3>instagram</h3>
        </a>
        <a
          href="https://github.com/tinawng"
          class="flex-vertical-center"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            ></path>
          </svg>
          <h3>github</h3>
        </a>
        <a href="mailto:hello@tina.cafe" class="flex-vertical-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
          </svg>
          <h3>contact</h3>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import projects from "~/assets/data/projects.json";
const img_tina_sizes = require("~/assets/img/tina.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=900&format=webp");
const img_grapes_thumnail_sizes = require("~/assets/img/grapes-thumbnail.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=900&format=webp");
const img_piano_sizes = require("~/assets/img/piano.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=900&format=webp");

export default {
  data() {
    return {
      projects,
      img_tina_sizes,
      img_grapes_thumnail_sizes,
      img_piano_sizes,
    };
  },
};
</script>

<style lang="postcss" scoped>
section {
  @apply py-20;
}

section.projects {
  @apply bg-orange-250;
}

section.hero {
  @apply md:mb-10;
}
section.hero h2 {
  @apply text-md md:text-xl xl:text-3xl leading-tight;
}
section.hero h4 {
  @apply mb-16 lg:mb-0;
  @apply text-justify;
}
section.hero img {
  @apply w-full mx-auto;
  @apply rounded-2xl shadow-lg;
}
section.hero .responsive-image {
  @apply w-full mx-auto;
  @apply rounded-2xl shadow-lg;
}

section.backend {
  @apply opacity-75;
}
section.backend svg {
  @apply h-16;
}

section.footer {
  @apply bg-steel-900 text-steel-200;
}
section.footer svg {
  @apply h-6 md:h-10;
}
section.footer h3 {
  @apply mt-2 text-steel-200;
}
</style>
