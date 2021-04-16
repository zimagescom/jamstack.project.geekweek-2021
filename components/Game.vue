<template>
  <vue-iframe
    ref="game"
    class="w-full h-full"
    :src="src"
    frame-id="flappy-bird"
    name="flappy-bird"
    @load="onLoad"
  />
</template>

<script>
export default {
  data: () => ({
    src: 'https://zimagescom.github.io/geekweek2021-clumsy-bird/',
    iframe: null,
    showForm: false,
  }),
  methods: {
    onLoad(frame) {
      this.iframe = frame.contentWindow
    },
  },
}
</script>
