<template>
  <div
    class="w-full flex flex-col p-4 pb-0 bg-black absolute top-0 left-0 h-screen"
  >
    <div class="flex items-center justify-around">
      <div class="flex">
        <img
          src="../assets/logo-chb-white.png"
          alt="Logo Comunidad Hierba Buena"
          class="w-20 m-2 sm:w-24"
        />
        <div class="flex flex-col justify-center">
          <span class="text-white text-4xl font-serif">Hierba Buena</span
          ><span class="text-primary text-2xl font-sans uppercase"
            >Comunidad</span
          >
        </div>
      </div>
      <div class="w-12" @click="$emit('closeMenu')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
    <nav class="flex-grow">
      <ul class="text-white text-3xl flex flex-col justify-evenly font-bold items-center h-4/5">
        <li v-for="(item, index) of menuItems" :key="index">
          <router-link
            :to="item.url"
            @click="$emit('closeMenu')"
            class="hover:text-accent transition-colors"
            >{{ item.text }}</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MobileMenu',
  props: {
    menuItems: { type: Array, default: () => [] },
  },
  methods: {
    hideMenu: function () {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
