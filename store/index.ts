import { createStore, Commit } from 'vuex'
import axios from 'axios'

interface Blog {
  id: any
  title: string
  description: string
  photo_url: string
  content_text: string
  content_html: string
  created_at: string
  updated_at: string
  user_id: any
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
  addBlog(state: State, blog: Blog) {
    state.blogs.push(blog)
  },
}

export const actions = {
  async fetchBlogs({ commit }: { commit: Commit }) {
    try {
      const response = await axios.get(
        'https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=9'
      )
      commit('setBlogs', response.data.blogs)
    } catch (error) {
      console.error('Error fetching blog data:', error)
    }
  },
  async addBlog({ commit }: { commit: Commit }, blog: Blog) {
    try {
      // Add logic to send a request to the server to add a new blog
      // For now, just push the new blog to the state
      commit('addBlog', blog)
    } catch (error) {
      console.error('Error adding blog:', error)
    }
  },
}

export const getters = {
  getBlogs: (state: State) => {
    return state.blogs
  },
}

export const store = createStore({
  state,
  mutations,
  actions,
  getters,
})

export default store
