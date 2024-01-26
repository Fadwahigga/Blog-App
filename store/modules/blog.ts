
export default {
  state: () => ({
    blogs: [],
  }),
  mutations: {
    addBlog(state: { blogs: any[] }, newBlog: any) {
      state.blogs.push(newBlog)
    },
  },
  actions: {
    async addBlog({ commit }: any, newBlog: any) {
      commit('addBlog', newBlog)
    },
  },
}
