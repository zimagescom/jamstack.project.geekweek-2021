<template>
  <Game />
</template>

<script>
export default {
  head: () => ({
    meta: [
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'GEEK WEEK 2021 x PASSAGE CORDELIERS',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          "Cette année à vous de jouer ! Participez à notre jeu concours et tentez de gagner des bons d'achats 🎮🕹️👾",
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: require(`~/assets/opengraph.jpg`),
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'GEEK WEEK 2021 x PASSAGE CORDELIERS',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'GEEK WEEK 2021 x PASSAGE CORDELIERS',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          "Cette année à vous de jouer ! Participez à notre jeu concours et tentez de gagner des bons d'achats 🎮🕹️👾",
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: require(`~/assets/opengraph.jpg`),
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: require(`~/assets/opengraph.jpg`),
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'GEEK WEEK 2021 x PASSAGE CORDELIERS',
      },
    ],
  }),
}
</script>
