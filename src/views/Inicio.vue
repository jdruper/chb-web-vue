<template>
  <section
    class="flex flex-col sm:flex-row justify-between p-4 sm:flex-wrap h-5/6 pb-16 sm:pb-28"
  >
    <div class="flex flex-col flex-1 w-auto justify-center">
      <div>
        <div class="text-5xl mb-4 w-8/12">
          Bienvenid<span class="font-serif text-6xl">@</span> a nuestro
          <span class="text-primary">experimento social.</span>
        </div>
        <div class="uppercase text-grey tracking-wider w-9/12">
          Inspirate con nosotr@s y contectate con el mundo de las ecoaldeas en
          Costa Rica.
        </div>
      </div>
      <button
        class="cursor-pointer mt-12 uppercase bg-accent w-2/5 rounded-md px-2.5 py-3.5 font-bold text-lg tracking-wider border-accent border-4 transition-all duration-300 hover:bg-white hover:text-accent hover:border-accent shadow-md"
      >
        Ver m&aacute;s
      </button>
    </div>
    <div class="w-8/12 bg-center bg-cover rounded-md bg-foto-comunidad"></div>
  </section>
</template>

<script>
export default {
  name: 'InicioView',
  components: {},
};
</script>

<style lang="scss" scoped></style>
