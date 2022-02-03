<template>
  <header class="w-full flex items-center p-4 justify-between pb-0">
    <div class="flex items-center flex-grow">
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
    <div class="block sm:hidden w-12">
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
        <li>
          <router-link
            to="/"
            class="hover:text-accent transition-colors"
            >Inicio</router-link
          >
        </li>
        <li>
          <router-link to="/quienes-somos" class="hover:text-accent transition-colors"
            >Qui&eacute;nes Somos</router-link
          >
        </li>
        <li>
          <a href="/blog" class="hover:text-accent transition-colors">Blog</a>
        </li>
        <li>
          <a href="/contacto.html" class="hover:text-accent transition-colors"
            >Contacto</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    
</style>
