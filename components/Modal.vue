<template>
  <div ref="modal" class="absolute inset-0 flex justify-center items-center">
    <div
      class="fixed z-10 inset-0 bg-black bg-opacity-50"
      @click="$emit('close')"
    ></div>
    <div
      class="w-full h-full sm:w-auto sm:h-auto relative z-20 container shadow-xl bg-white rounded-xl p-4"
    >
      <svg
        class="w-8 h-8 mt-4 mr-4 absolute top-0 right-0 text-primary-200 bg-primary-500 rounded-full shadow-xl cursor-pointer transform transition duration-100 hover:scale-110 hover:bg-primary-600"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        @click="$emit('close')"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clip-rule="evenodd"
        />
      </svg>
      <div v-if="content == 'form'">
        <Form />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: '',
    },
  },
}
</script>
