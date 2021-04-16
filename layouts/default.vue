<template>
  <div
    class="w-screen h-screen bg-gradient-to-b from-primary-500 to-primary-600"
  >
    <div
      class="container relative z-10 flex flex-col h-full mx-auto px-2 xl:max-w-screen-xl"
    >
      <Header />
      <Nuxt class="border-4 bg-primary-600 shadow-xl border-white flex-1" />
      <Footer />
    </div>
    <SvgBackgroundPattern
      class="absolute inset-0 w-screen h-screen opacity-10"
    />
  </div>
</template>

<style>
.container {
  animation: appear 1s;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
