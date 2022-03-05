<template>
  <section
    class="flex flex-col justify-between pt-4 text-center items-center h-full pb-16"
  >
    <div class="flex flex-col text-4xl sm:text-5xl sm:w-5/6 pb-16 sm:pt-8">
      <div>
        <span class="text-primary">Formemos</span> redes. Aprendamos junt<span
          class="font-serif text-5xl"
          >@</span
        >s.
      </div>
      <div>
        <span class="text-accent">Co-creemos</span>
        un mundo mejor.
      </div>
    </div>
    <button
      @click="copyToClipboard"
      class="cursor-pointer bg-accent w-5/5 rounded-md px-2.5 py-3.5 text-xl sm:text-3xl tracking-wider border-accent border-4 transition-all duration-300 hover:bg-white hover:text-accent hover:border-accent shadow-md"
    >
      hola@hierbabuenacr.org
    </button>
  </section>
</template>

<script>
import { useToast } from 'vue-toastification';
export default {
  name: 'ContactoView',
  methods: {
    copyToClipboard: () => {
      const toast = useToast();
      navigator.clipboard.writeText('hola@hierbabuena.cr');
      toast.success('¡Correo copiado, pégalo y escríbenos!', {
        timeout: 3000,
        position: 'bottom-right',
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
