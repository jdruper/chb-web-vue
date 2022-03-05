<template>
  <div class="h-auto">
    <Header />
    <div class="container mx-auto">
      <router-view />
    </div>
    <footer-component />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import FooterComponent from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    FooterComponent,
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
