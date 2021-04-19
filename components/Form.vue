<template>
  <div
    class="max-w-screen-xl m-auto text-black bg-gray-200 p-6 rounded-xl shadow"
  >
    <div v-show="merci">
      <div class="text-center text-4xl text-primary-600 font-medium">
        Whaaaooouuu, <strong>{{ the_record }}</strong
        ><br />mais quel score !!
      </div>
      <div class="text-center text-2xl text-gray-600" v-text="text">
        Merci de votre participation !
      </div>
      <div class="mt-10 text-center text-sm text-gray-600">
        La Team Passage Cordeliers 💙
      </div>
    </div>
    <div v-show="merci == false">
      <div class="text-center leading-8 mb-10">
        <h2 class="text-4xl">👋 Hello !</h2>
        <p class="text-xl font-bold text-primary-500">
          Jeu concours du 19 avril au 25 avril 2021.
        </p>
        <p>
          Tous les participants souhaitant participer devront nous faire
          parvenir leurs résultats soit via le formulaire et en les postants que
          la
          <a
            class="bg-primary-100 rounded px-2 py-1 text-primary-500 hover:bg-primary-300 hover:text-white"
            href="https://fr-fr.facebook.com/CordeliersPoitiers/"
            target="_blank"
          >
            page Facebook</a
          >!
          <span class="text-sm">
            Merci de remplir ce formulaire ci-dessous nous permettant de
            récolter ton score de ouf !
          </span>
        </p>
      </div>
      <form
        name="geek-week-2021"
        method="post"
        action="/"
        netlify
        netlify-honeypot="bot-field"
        enctype="multipart/form-data"
        class="max-w-3xl m-auto flex flex-col space-y-6"
      >
        <input type="hidden" name="form-name" value="geek-week-2021" />
        <div>
          <label class="text-sm ml-2" for="name">Prénom et Nom *</label>
          <input
            id="name"
            type="text"
            name="name"
            required
            class="shadow border border-transparent form-input block rounded ring-primary-500 focus:ring-2 focus:outline-none focus:border-primary-500"
          />
        </div>
        <div>
          <label class="text-sm ml-2" for="email">Adresse e-mail *</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            class="shadow border border-transparent form-input block rounded ring-primary-500 focus:ring-2 focus:outline-none focus:border-primary-500"
          />
        </div>
        <div>
          <label class="text-sm ml-2" for="record"
            >Mon super giga méga score *</label
          >
          <input
            id="record"
            v-model="the_record"
            type="number"
            min="0"
            name="record"
            required
            class="shadow border border-transparent form-input block rounded ring-primary-500 focus:ring-2 focus:outline-none focus:border-primary-500"
          />
        </div>
        <div>
          <label class="text-sm ml-2" for="score"
            >Capture d'écran de mon super giga méga score
          </label>
          <input
            id="score"
            ref="file"
            type="file"
            name="score"
            class="border border-transparent form-input block rounded ring-primary-500 focus:ring-2 focus:outline-none focus:border-primary-500"
            @change="addFile()"
          />
        </div>
        <div>
          <input
            id="accept_terms"
            type="checkbox"
            name="accept_terms"
            required
            class="shadow border border-transparent form-checkbox text-xl mr-2 bg-white ring-primary-500 focus:ring-2 focus:outline-none focus:border-primary-500"
          />
          <label class="text-sm" for="accept_terms"
            >En cochant cette case, j'accepte que PASSAGE CORDELIERS utilise mes
            coordonnées pour me contacter *</label
          >
        </div>
        <div>
          <button
            type="submit"
            class="rounded mt-4 px-10 py-3 uppercase bg-primary-500 font-bold text-xl text-white shadow-md transition duration-100 hover:bg-primary-600 hover:shadow-lg focus:bg-primary-600 ring-primary-500 focus:ring-2 focus:outline-none"
            @click="merci = true"
          >
            Envoyer
          </button>
        </div>
        <div class="text-xs text-primary-400">*Champs obligatoires</div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      merci: false,
      the_record: 0,
      file: null,
      text: '',
    }
  },
  computed: {
    form() {
      return {
        name: this.name,
        attach: this.file,
      }
    },
  },
  mounted() {
    // this.score = this.$route.params.score;
    if (this.the_record > 90) {
      this.text = 'Dis donc tu mentirais sur ton score !'
    }
    if (this.the_record > 50 && this.score <= 90) {
      this.text = "Pas mal comme score, c'est bien joué !"
    } else {
      this.the_record = 'Tu peux faire un effort et mieux faire !'
    }
  },
  methods: {
    addFile() {
      this.file = this.$refs.file.files[0]
    },
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    handleSubmit() {
      const self = this
      const axiosConfig = {
        header: {
          'Content-Type': 'multipart/form-data',
        },
      }
      axios
        .post(
          '/',
          self.encode({
            'form-name': 'geek-week-2021',
            ...self.form,
          }),
          axiosConfig
        )
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
  },
}
</script>
