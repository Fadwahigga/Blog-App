// store/index.ts

import { createStore, Commit } from 'vuex'

interface Blog {
  id: any
  title: string
  description: string
  category: string
  content: string
  photo: File | null
}

interface State {
  blogs: Blog[]
}

export const state = (): State => ({
  blogs: [],
})

export const mutations = {
  setBlogs(state: State, blogs: Blog[]) {
    state.blogs = blogs
  },
}

export const actions = {
  async fetchBlogs({ commit }: { commit: Commit }) {
    try {
      const response = await fetch(
        'https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=9'
      )
      const data = await response.json()
      commit('setBlogs', data.data.blogs)
    } catch (error) {
      console.error('Error fetching blog data:', error)
    }
  },
}

export const getters = {
  // You can add getters if needed
}

export const store = createStore({
  state,
  mutations,
  actions,
  getters,
})

export default store
