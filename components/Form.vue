<template>
  <div
    class="max-w-screen-xl m-auto text-black bg-gray-200 p-6 rounded-xl shadow"
  >
    <div v-show="merci">
      <div class="text-center text-4xl text-primary-600 font-medium">
        Whaaaooouuu, <strong>{{ the_record }}</strong> mais quel score !!
      </div>
      <div class="text-center text-2xl text-gray-600" v-text="text">
        Merci de votre participation !
      </div>
      <div class="mt-10 text-center text-sm text-gray-600">
        La Team ZIMAGES 💙
      </div>
    </div>
    <div v-show="merci == false">
      <div class="text-xl text-center leading-8 mb-10">
        <span class="text-4xl">👋 Hello !</span> <br />
        Merci pour ta participation au jeu qui te permettra de gagner la
        <span class="bg-primary-100 text-primary-400 rounded-full px-3 py-1"
          >1ère borne arcade ZIMAGES</span
        >
        ! <br />
        Merci de remplir ce formulaire ci-dessous nous permettant de récolter
        ton score de ouf !
      </div>
      <form
        name="voeux-zimages-2021"
        method="post"
        action="/"
        data-netlify="true"
        enctype="multipart/form-data"
        data-netlify-honeypot="bot-field"
        class="max-w-3xl m-auto flex flex-col space-y-6"
      >
        <input type="hidden" name="form-name" value="voeux-zimages-2021" />
        <div>
          <label class="text-sm ml-2" for="name">Prénom et Nom *</label>
          <input
            id="name"
            type="text"
            name="name"
            class="shadow border-none form-input block rounded-full focus:shadow-outline-primary focus:border-primary"
          />
        </div>
        <div>
          <label class="text-sm ml-2" for="email" required
            >Adresse e-mail *</label
          >
          <input
            id="email"
            type="email"
            name="email"
            class="shadow border-none form-input block rounded-full focus:shadow-outline-primary focus:border-primary"
          />
        </div>
        <div>
          <label class="text-sm ml-2" for="record" required
            >Mon super giga méga score *</label
          >
          <input
            id="record"
            v-model="the_record"
            type="number"
            min="0"
            name="record"
            class="shadow border-none form-input block rounded-full focus:shadow-outline-primary focus:border-primary"
          />
        </div>
        <div>
          <label class="text-sm ml-2" for="score"
            >Capture d'écran de mon super giga méga score</label
          >
          <input
            id="score"
            ref="file"
            type="file"
            name="score"
            class="shadow border-none form-input block rounded-full focus:shadow-outline-primary focus:border-primary"
            @change="addFile()"
          />
          />
        </div>
        <div>
          <input
            id="accept_terms"
            type="checkbox"
            name="accept_terms"
            required
            class="shadow border-none form-checkbox text-xl mr-2 bg-white focus:shadow-outline-primary focus:border-primary"
          />
          <label class="text-sm" for="accept_terms"
            >En cochant cette case, j'accepte que ZIMAGES utilise mes données
            pour me contacter *</label
          >
        </div>
        <div>
          <button
            type="submit"
            class="rounded-full mt-4 px-10 py-3 uppercase bg-primary font-bold text-xl text-white shadow-md transition duration-100 hover:bg-primary-600 hover:shadow-lg focus:outline-none focus:shadow-outline-primary"
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
            'form-name': 'jeu-concours',
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
