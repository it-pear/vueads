/* eslint-disable */
export default {
  state: {
    ads: [
      {
        title: 'First ad',
        description: 'Hello i am description',
        promo: true,
        imageSrc: 'https://img5.goodfon.ru/wallpaper/nbig/4/89/devushka-vzgliad-mikhail-mikhailov-aleksandra-girl.jpg',
        id: '123'
      },
      {
        title: 'Second ad',
        description: 'Hello i am description',
        promo: true,
        imageSrc: 'https://img5.goodfon.ru/wallpaper/nbig/4/12/devushka-portret-chiorno-beloe-foto-1.jpg',
        id: '1234'
      },
      {
        title: 'Third ad',
        description: 'Hello i am description',
        promo: false,
        imageSrc: 'https://i.artfile.ru/1920x1080_1372713_[www.ArtFile.ru].jpg',
        id: '12345'
      }
    ]
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    createAd ({commit}, payload) {
      payload.id = '123'

      commit('createAd', payload)
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}