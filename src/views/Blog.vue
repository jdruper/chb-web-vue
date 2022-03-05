<template>
  <section class="flex flex-col justify-between p-2 sm:p-4 items-center mb-8">
    <div
      class="flex flex-col items-center text-4xl sm:text-5xl w-screen text-center"
    >
      <h1 class="text-primary font-serif">
        &Uacute;ltimas Entradas
        <div class="bg-accent h-1 w-auto sm:mt-2">&nbsp;</div>
      </h1>
      <div class="mt-4 text-3xl sm:text-5xl">
        vivencias, costumbres, <br />
        herramientas y m&aacute;s.
      </div>
    </div>
    <div v-if="posts.length === 0">cargando</div>
    <div
      v-else
      class="flex flex-col items-center sm:justify-evenly sm:flex-row mt-8 sm:mt-12 justify-evenly sm:flex-wrap gap-8"
    >
      <div
        class="flex flex-col sm:justify-between w-5/6 sm:w-[30%]"
        v-for="(post, index) of posts"
        :key="index"
      >
        <div
          class="h-56 bg-no-repeat bg-cover rounded-md border-primary border-2"
          :style="{ backgroundImage: `url(${post.medium_url})` }"
        ></div>
        <div class="my-4 text-lg font-bold">
          <router-link
            :to="post.medium_url"
            class="hover:text-primary transition-colors underline"
            >{{ post.title }}</router-link
          >
        </div>

        <div class="text-grey mb-4 text-justify" v-html="post.excerpt"></div>
        <div>
          {{ post.author }} - <span class="text-grey">{{ post.date }}</span>
        </div>
        <div class="text-sm text-primary font-bold">
          {{ post.category }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BlogDataService from '../shared/services/blog-data-service';

export default {
  name: 'BlogView',
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    getPosts() {
      BlogDataService.getAllPosts().subscribe((response) => {
        console.log(response);
        this.posts = response;
      });
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>

<style lang="scss" scoped></style>
