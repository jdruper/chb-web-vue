<template>
  <footer class="w-full left-0 bottom-0 bg-black">
    <div
      class="container mx-auto flex flex-col items-center p-8 justify-around sm:justify-between"
    >
      <div class="flex flex-col sm:flex-row items-center justify-center sm:justify-between w-full">
        <div class="flex flex-col items-center justify-between self-start sm:self-end  mb-8">
          <div class="flex items-center">
            <img
              src="../assets/logo-chb-white.png"
              alt="Logo Comunidad Hierba Buena"
              class="w-20 m-2 sm:w-24"
            />
            <div class="flex flex-col justify-center">
              <span class="text-white text-4xl font-serif">Hierba Buena</span
              ><span class="text-accent text-2xl font-sans uppercase"
                >Comunidad</span
              >
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div class="flex mb-4">
            <a
              href="https://www.facebook.com/hierbabuenacomunidad/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12 fill-current text-white mr-2.5 hover:text-accent transition-colors"
                viewBox="0 0 500 500"
              >
                <path
                  d="M377.6,0H126C56.8,0,0,56.8,0,126.4V378c0,69.2,56.8,126,126,126h251.6c69.6,0,126.4-56.8,126.4-126.4V126.4
			C504,56.8,447.2,0,377.6,0z M319.6,252H272v156h-60V252h-32v-64h28v-27.2c0-25.6,12.8-66,66.8-66H324V148h-34.8
			c-5.6,0-13.2,3.6-13.2,16v24h49.2L319.6,252z"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/comunidad_hierba_buena/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 504.4 504.4"
                class="h-12 w-12 fill-current text-white hover:text-accent transition-colors"
              >
                <path
                  d="M296.8,219.8c-10-14-26.4-23.2-44.8-23.2c-18.4,0-34.8,9.2-44.8,23.2c-6.4,9.2-10.4,20.4-10.4,32.4
			c0,30.4,24.8,55.2,55.2,55.2c30.4,0,55.2-24.8,55.2-55.2C307.2,240.2,303.2,229,296.8,219.8z"
                />
                <path
                  d="M331.6,220.2c4,8,6.4,20.8,6.4,32c0,47.2-38.4,86-86,86c-47.6,0-86-38.4-86-86c0-11.6,2.4-24,6.4-32H124v128.4
			c0,16.8,14.8,31.6,31.6,31.6h192.8c16.8,0,31.6-14.8,31.6-31.6V220.2H331.6z"
                />
                <polygon
                  points="365.6,131.4 319.2,131.4 319.2,184.6 372,184.6 372,138.2 372,131 		"
                />

                <path
                  d="M377.6,0.2H126.4C56.8,0.2,0,57,0,126.6v251.6c0,69.2,56.8,126,126.4,126H378c69.6,0,126.4-56.8,126.4-126.4V126.6
			C504,57,447.2,0.2,377.6,0.2z M408,219.8L408,219.8l0,128.8c0,33.6-26,59.6-59.6,59.6H155.6c-33.6,0-59.6-26-59.6-59.6V219.8v-64
			c0-33.6,26-59.6,59.6-59.6h192.8c33.6,0,59.6,26,59.6,59.6V219.8z"
                />
              </svg>
            </a>
          </div>
          <div class="text-white uppercase tracking-wider self-end">
            hola@hierbabuenacr.org
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full">
        <div class="bg-white h-px w-full my-8">&nbsp;</div>
        <nav class="hidden sm:block">
          <ul class="text-white text-sm flex justify-evenly mb-8">
            <li class="pt-4" v-for="(item, index) of menuItems" :key="index">
              <router-link
                :to="item.url"
                class="hover:text-primary transition-colors"
                >{{ item.text }}</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="text-white uppercase tracking-wider self-center">
          Comunidad Hierba Buena 2022
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import menuItems from '../shared/menu-items.js';

export default {
  name: 'FooterComponent',
  data: function () {
    return {
      menuItems,
      showMobileMenu: false,
    };
  },
  methods: {
    toggleMenu: function () {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
