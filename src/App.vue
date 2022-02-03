<template>
  <div class="container mx-auto h-screen">
    <Header />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: theme('backgroundImage.circle-pattern');
}
</style>
