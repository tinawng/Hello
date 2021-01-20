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
    <section class="my-12 flex flex-wrap justify-between">
      <project-card id="c1" icon="tanabata" color="79DB75">
        <template v-slot:stack>REST API ~ Backend</template>
        <template v-slot:name>Tanabata</template>
        <template v-slot:definition>
          A Tanabata tree, a type of wish tree on which people hang wishes
          written on paper and other decorations during Tanabata, a Japanese
          festival.
        </template>
        <template v-slot:description>
          <p>Multipurpose rest api built with Fastify based on NodeJS</p>
          <p>
            Cognitis enim pilatorum caesorumque funeribus nemo deinde ad has
            stationes appulit navem, sed ut Scironis praerupta letalia
            declinantes litoribus Cypriis contigui navigabant, quae Isauriae
            scopulis sunt controversa.
          </p>
        </template>
        <template v-slot:links
          ><a href="https://github.com/tinawng/tanabata">GitHub Repo</a>
        </template>
      </project-card>
      <project-card id="c2" class="mt-48" icon="grapes" color="5C2A92">
        <template v-slot:stack>Static Website ~ Frontend</template>
        <template v-slot:name>Grapes</template>
        <template v-slot:description>
          <p>Multipurpose rest api built with Fastify based on NodeJS</p>
          <p>
            Cognitis enim pilatorum caesorumque funeribus nemo deinde ad has
            stationes appulit navem, sed ut Scironis praerupta letalia
            declinantes litoribus Cypriis contigui navigabant, quae Isauriae
            scopulis sunt controversa.
          </p>
        </template>
        <template v-slot:links
          ><a href="https://github.com/tinawng/grapes">GitHub Repo</a
          ><a class="ml-6" href="http://grapes.tina.cafe/">Live Demo</a>
        </template>
      </project-card>
      <project-card id="c3" class="-mt-24" icon="dango" color="F76184">
        <template v-slot:stack
          >Server Side Rendered Website ~ Fullstack</template
        >
        <template v-slot:name>Dango</template>
        <template v-slot:definition>
          A Japanese sweet dumpling made from rice flour and served on a skewer.
        </template>
        <template v-slot:description>
          <p>Multipurpose rest api built with Fastify based on NodeJS</p>
          <p>
            Cognitis enim pilatorum caesorumque funeribus nemo deinde ad has
            stationes appulit navem, sed ut Scironis praerupta letalia
            declinantes litoribus Cypriis contigui navigabant, quae Isauriae
            scopulis sunt controversa.
          </p>
        </template>
        <template v-slot:links
          ><a href="https://github.com/tinawng/dango">GitHub Repo</a>
          <a class="ml-6" href="http://dango.tina.cafe/">Live Demo</a>
        </template>
      </project-card>
      <project-card id="c4" class="mt-24" icon="bookmark" color="f2cc89">
        <template v-slot:stack
          >Server Side Rendered Website ~ Fullstack</template
        >
        <template v-slot:name>Bookmarks</template>
        <template v-slot:description>
          <p>Multipurpose rest api built with Fastify based on NodeJS</p>
          <p>
            Cognitis enim pilatorum caesorumque funeribus nemo deinde ad has
            stationes appulit navem, sed ut Scironis praerupta letalia
            declinantes litoribus Cypriis contigui navigabant, quae Isauriae
            scopulis sunt controversa.
          </p>
        </template>
        <template v-slot:links
          ><a href="https://github.com/tinawng/bookmarks">GitHub Repo</a>
          <a class="ml-6" href="http://bookmarks.tina.cafe/">Live Demo</a>
        </template>
      </project-card>
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
