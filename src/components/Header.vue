<template>
  <header
    class="w-full flex items-center p-4 justify-around sm:justify-between container mx-auto"
  >
    <div class="flex items-center sm:flex-grow">
      <img
        src="../assets/logo-chb.png"
        alt="Logo Comunidad Hierba Buena"
        class="w-20 m-2 sm:w-24"
      />
      <div class="flex flex-col justify-center">
        <span class="text-primary text-4xl font-serif">Hierba Buena</span
        ><span class="text-accent text-2xl font-sans uppercase">Comunidad</span>
      </div>
    </div>
    <div class="block sm:hidden w-12" @click="toggleMenu">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="{2}"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>
    <nav class="flex-grow hidden sm:block">
      <ul class="text-grey text-xl flex justify-evenly font-bold">
        <li v-for="(item, index) of menuItems" :key="index">
          <router-link
            :to="item.url"
            class="hover:text-accent transition-colors"
            >{{ item.text }}</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
  <mobile-menu
    :menu-items="this.menuItems"
    @close-menu="toggleMenu"
    :class="{
      'opacity-0 -left-full': !showMobileMenu,
      'opacity-100 left-0': showMobileMenu,
    }"
    class="transition-all ease-in duration-300 sm:hidden"
  />
</template>

<script>
import MobileMenu from './MobileMenu.vue';
import menuItems from '../shared/menu-items.js';

export default {
  name: 'HeaderComponent',
  data: function () {
    return {
      menuItems: menuItems,
      showMobileMenu: false,
    };
  },
  methods: {
    toggleMenu: function () {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
  components: { MobileMenu },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
