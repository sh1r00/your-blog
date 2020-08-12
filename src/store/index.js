import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: null,
    users: [
      {
        id: '1',
        username: 'admin',
        password: 'admin',
        email: 'admin@fake.com',
        fname: 'Default',
        lname: 'admin',
        monile: '1234567890',
        role: '1'
      }
    ],
    foundUser: null,
    loading: false,
    selectedTopics: [],
    filteredCards: [],
    topics: [],
    currentCard: {},
    editCard: {},
    errorMsg: null,
    successMsg: null,
    userCards: [
      {
        meta: 'Pre-fab homes',
        title: 'Pre-fab homes',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/house.jpg',
        created: '15 min',
        topics: ['deep learning', 'machine learning', 'A.I', 'distributed systems'],
        id: 1
      },
      {
        meta: 'Favorite road trips',
        title: 'Favorite road trips',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/road.jpg',
        created: '15 min',
        topics: ['deep learning', 'machine learning', 'A.I'],
        id: 2
      }
    ],
    cards: [
      {
        meta: 'Pre-fab homes',
        title: 'Pre-fab homes',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/house.jpg',
        created: '15 min',
        topics: ['deep learning', 'machine learning', 'A.I', 'distributed systems'],
        id: 1,
        user: '1'
      },
      {
        meta: 'Favorite road trips',
        title: 'Favorite road trips',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/road.jpg',
        created: '15 min',
        topics: ['deep learning', 'machine learning', 'A.I'],
        id: 2,
        user: '1'
      },
      {
        meta: 'Best airlines',
        title: 'Best airlines',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out? Some more content for testing list layout",
        src: 'https://vuetifyjs.com/static/doc-images/cards/plane.jpg',
        created: '15 min',
        topics: ['deep learning', 'machine learning'],
        id: 3,
        user: '1'
      },
      {
        meta: 'Pre-fab homes',
        title: 'Pre-fab homes',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/house.jpg',
        created: '15 min',
        topics: ['deep learning', 'machine learning', 'A.I'],
        id: 5,
        user: '2'
      },
      {
        meta: 'Favorite road trips',
        title: 'Favorite road trips',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/road.jpg',
        created: '15 min',
        topics: ['deep learning', 'machine learning', 'A.I'],
        id: 6,
        user: '2'
      },
      {
        title: 'Best airlines',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/plane.jpg',
        created: '15 min',
        topics: ['deep learning', 'machine learning', 'A.I'],
        id: 7,
        user: '2'
      },
      {
        title: 'Pre-fab homes',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/house.jpg',
        created: '15 min',
        topics: [],
        id: 8,
        user: '2'
      },
      {
        title: 'Favorite road trips',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/road.jpg',
        created: '15 min',
        topics: [],
        id: 9,
        user: '2'
      },
      {
        title: 'Best airlines',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/plane.jpg',
        created: '15 min',
        topics: [],
        id: 10,
        user: '2'
      },
      {
        title: 'Pre-fab homes',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/house.jpg',
        created: '15 min',
        topics: [],
        id: 11,
        user: '2'
      },
      {
        title: 'Favorite road trips',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/road.jpg',
        created: '15 min',
        topics: [],
        id: 12,
        user: '2'
      },
      {
        title: 'Best airlines',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/plane.jpg',
        created: '15 min',
        topics: [],
        id: 13,
        user: '1'
      }
    ]
  },

  getters: {
    cards (state) {
      return state.cards
    },
    currentCard (state) {
      return state.currentCard
    },
    filteredCards (state) {
      return state.filteredCards
    },
    userCards (state) {
      return state.userCards
    },
    topics (state) {
      return state.topics
    },
    selectedTopics (state) {
      return state.selectedTopics
    },
    isUserAuthenticated (state) {
      return state.user !== null && state.user !== undefined
    },
    user (state) {
      return state.user
    },
    users (state) {
      return state.users
    },
    foundUser (state) {
      return state.foundUser
    },
    loading (state) {
      return state.loading
    },
    editCard (state) {
      return state.editCard
    },
    errorMsg (state) {
      return state.errorMsg
    },
    successMsg (state) {
      return state.successMsg
    }
  },

  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    ADD_USER (state, payload) {
      state.users.push(payload)
    },
    UPDATE_USER (state, payload) {
      const user = state.user
      let users = state.users
      const objIndex = users.findIndex(element => element.id === user.id)
      const newUser = {
        id: user.id,
        username: user.username,
        password: user.password,
        fname: payload.fname,
        lname: payload.lname,
        email: payload.email,
        mobile: payload.mobile,
        role: user.role
      }
      state.users[objIndex] = newUser
    },
    FOUND_USER_INFO (state, payload) {
      if (payload === 'none') {
        state.foundUser = 'none'
      } else {
        state.foundUser = payload
      }
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    FILTERED_CARDS (state, payload) {
      state.filteredCards = []
      state.filteredCards = payload
    },
    ADD_TOPIC (state, payload) {
      const topics = state.topics
      const objTopics = {
        name: payload,
        value: false
      }
      function objInArray (obj, list) {
        for (let x = 0; x < list.length; x++) {
          if (list[x].name === obj.name) {
            return true
          }
        }
      }
      if (!objInArray(objTopics, topics)) {
        state.topics.push(objTopics)
      }
    },
    TOGGLE_TOPIC (state, payload) {
      const topics = state.topics
      const index = topics.findIndex(e => e.name === payload.name)
      state.topics[index] = {
        name: payload.name,
        value: payload.value
      }
    },
    ADD_SELECTED_TOPIC (state, payload) {
      let oldTopics = state.selectedTopics
      state.selectedTopic = oldTopics.push(payload)
    },
    REMOVE_SELECTED_TOPIC (state, payload) {
      let oldTopics = state.selectedTopics
      state.selectedTopic = oldTopics.splice(payload, 1)
    },
    SET_USER_CARDS (state, payload) {
      state.userCards = payload
    },
    CREATE_CARD (state, payload) {
      state.cards.push(payload)
      state.userCards.push(payload)
    },
    EDIT_CARD (state, payload) {
      state.editCard = payload
      console.log('edit ', payload)
    },
    COMMIT_EDIT (state, payload) {
      const index = state.cards.findIndex(e => e.id === payload.id)
      const userIndex = state.userCards.findIndex(e => e.id === payload.id)
      state.cards[index] = payload
      state.userCards[userIndex] = payload
    },
    SET_CURRENT_CARD (state, payload) {
      state.currentCard = payload
    },
    DELETE_CARD (state, payload) {
      const index = state.cards.findIndex(e => e.title === payload.title)
      const userIndex = state.userCards.findIndex(e => e.title === payload.title)
      state.cards.splice(index, 1)
      state.userCards.splice(userIndex, 1)
    },
    SET_ERROR (state, payload) {
      state.errorMsg = payload
    },
    SET_SUCCESS (state, payload) {
      state.successMsg = payload
    }
  },

  actions: {
    setTopics (context) {
      const cards = context.getters.cards
      for (let i = 0; i < cards.length; i++) {
        const cardTopics = cards[i].topics
        if (cardTopics) {
          for (let x = 0; x < cardTopics.length; x++) {
            context.commit('ADD_TOPIC', cardTopics[x])
          }
        }
      }
    },
    toggleTopic (context, payload) {
      let selectedTopics = context.getters.selectedTopics
      context.commit('TOGGLE_TOPIC', payload)
      const selectedTopicIndex = selectedTopics.indexOf(payload.name)
      if (payload.value === true && selectedTopicIndex === -1) {
        context.commit('ADD_SELECTED_TOPIC', payload.name)
      } else {
        context.commit('REMOVE_SELECTED_TOPIC', selectedTopicIndex)
      }
      context.dispatch('filterCards', context.state.selectedTopics)
    },
    filterCards (context) {
      let cards = []
      cards = context.getters.cards
      let newCards = []
      let payload = context.getters.selectedTopics
      for (let i = 0; i < cards.length; i++) {
        let cardTopics = []
        cardTopics = cards[i].topics
        if (payload.length) {
          for (let x = 0; x < cardTopics.length; x++) {
            let cardIndex = newCards.indexOf(cards[i])
            if (payload.includes(cardTopics[x]) && cardIndex === -1) {
              newCards.push(cards[i])
            }
          }
        } else {
          newCards.push(cards[i])
        }
      }
      context.commit('FILTERED_CARDS', newCards)
    },

    signUpUser (context, payload) {
      const users = context.getters.users
      for (let x = 0; x < users.length; x++) {
        if (users[x].username === payload.username) {
          context.commit('SET_ERROR', 'This username already exists')
          return
        }
      }
      const newUser = {
        id: payload.id,
        fname: payload.fname,
        lname: payload.lname,
        usrname: payload.username,
        password: payload.password,
        email: payload.email,
        mobile: payload.mobile,
        role: payload.role
      }
      // window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + payload.token
      context.commit('setUser', newUser)
      context.commit('ADD_USER', newUser)
      context.commit('SET_ERROR', null)
      window.lsd.set('user', newUser)
      window.lsd.set('token', payload.token)
      router.push('/userInfo')
    },
    signInUser (context, payload) {
      const users = context.getters.users
      for (let x = 0; x < users.length; x++) {
        if (users[x].username === payload.username && users[x].password === payload.password) {
          const newUser = {
            id: payload.userId,
            fname: payload.fname,
            lname: payload.lname,
            email: payload.email,
            mobile: payload.mobile,
            role: payload.role
          }
          context.commit('SET_ERROR', null)
          context.commit('setUser', newUser)
          window.lsd.set('user', newUser)
          window.lsd.set('token', payload.token)
          return
        }
      }
      console.log('error')
      context.commit('SET_ERROR', 'Could not find your credentials')
    },
    updateUser (context, payload) {
      const updateUser = {
        id: context.getters.user.id,
        fname: payload.fname,
        lname: payload.lname,
        email: payload.email,
        mobile: payload.mobile,
        role: payload.role
      }
      context.commit('setUser', updateUser)
      context.commit('UPDATE_USER', updateUser)
      router.push('/')
      window.lsd.set('user', updateUser)
    },
    loading ({commit}, payload) {
      commit('setLoading', payload)
    },
    checkAuth ({commit}, payload) {
      if (window.lsd.get('user') && window.lsd.get('token')) {
        let u = window.lsd.get('user')
        const user = {
          id: u.id,
          fname: u.fname,
          lname: u.lname,
          email: u.email,
          mobile: u.mobile,
          role: u.role
        }
        commit('setUser', user)
      } else {
        commit('setUser', null)
        window.lsd.set('user', null)
        window.lsd.set('token', null)
        window.axios.defaults.headers.common['Authorization'] = null
      }
    },
    signOutUser ({commit}, payload) {
      commit('setUser', null)
      window.lsd.set('user', payload)
      window.lsd.set('token', payload)
      window.axios.defaults.headers.common['Authorization'] = payload
    },
    forgotInfo (context, payload) {
      let users = context.getters.users
      for (let x = 0; x < users.length; x++) {
        if (users[x].email === payload) {
          context.commit('FOUND_USER_INFO', users[x])
          context.commit('SET_ERROR', null)
          context.commit('SET_SUCCESS', 'Your login info has been emailed to ' + payload)
          return
        }
        context.commit('SET_ERROR', 'This email is not on record')
      }
    },
    setUserCards (context, payload) {
      const userId = '1'
      let cards = context.getters.cards
      let userCards = []
      for (let x = 0; x < cards.length; x++) {
        if (cards[x].user === userId) {
          userCards.push(cards[x])
        }
      }
      context.commit('SET_USER_CARDS', userCards)
    },
    createCard (context, payload) {
      const nextId = context.state.cards.length + 2
      payload.id = nextId
      context.commit('CREATE_CARD', payload)
    },
    editCard (context, payload) {
      context.commit('EDIT_CARD', payload)
    },
    commitEdit (context, payload) {
      console.log('commit ', payload)
      context.commit('COMMIT_EDIT', payload)
      context.commit('EDIT_CARD', null)
    },
    deleteCard (context, payload) {
      context.commit('DELETE_CARD', payload)
    },
    getArticle (context, payload) {
      const currentCard = context.state.cards.find(el => el.id === payload)
      context.commit('SET_CURRENT_CARD', currentCard)
    }
  }
})
