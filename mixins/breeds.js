import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      allBreeds: state => state.allBreeds
    }),
    breeds () {
      const breedsList = []
      for (const item in this.allBreeds) {
        if (this.allBreeds[item].length === 0) {
          breedsList.push(item)
        } else if (this.allBreeds[item].length === 1) {
          breedsList.push(item + ' ' + this.allBreeds[item])
        } else {
          for (let i = 0; i < this.allBreeds[item].length; i++) {
            breedsList.push(item + ' ' + this.allBreeds[item][i])
          }
        }
      }
      this.breedsList = this.getSections(breedsList)
      return this.breedsList
    }
  },
  methods: {
    getSections (breedsList) {
      return Object.values(
        breedsList.reduce((acc, word) => {
          const firstLetter = word[0].toLocaleUpperCase()
          if (!acc[firstLetter]) {
            acc[firstLetter] = { letter: firstLetter, list: [word] }
          } else {
            acc[firstLetter].list.push(word.replace(' ', '-'))
          }
          return acc
        }, {})
      )
    }
  }
}
