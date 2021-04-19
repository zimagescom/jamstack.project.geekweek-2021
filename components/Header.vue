<template>
  <header class="flex flex-col space-y-10 py-6 lg:flex-row lg:justify-between">
    <SvgLogo class="w-8/12 mx-auto sm:w-1/2 lg:mx-0 lg:w-1/3 text-white" />
    <div class="w-full text-center lg:text-left lg:w-1/3">
      <h2 class="text-white uppercase font-bold text-2xl mb-2">Jeu Concours</h2>
      <p class="text-white text-xs uppercase mb-6">
        Participez au nouveau jeu concours Passage Cordeliers en postant vos
        scores sur les réseaux ! Les meilleurs d’entres vous seront récompensés
        par des bons d’achats !
      </p>
      <button
        class="bg-white text-primary-500 font-bold rounded-md px-4 py-2 uppercase ring-4 ring-primary-300 ring-opacity-0 transform transition duration-200 hover:scale-105 hover:ring-opacity-100 focus:scale-105 focus:ring-opacity-100 focus:outline-none"
        @click="showForm = true"
      >
        Envoyer mon score
      </button>
    </div>
    <Modal v-show="showForm" :content="'form'" @close="showForm = false" />
  </header>
</template>

<script>
export default {
  data: () => ({
    showForm: false,
  }),
}
</script>
