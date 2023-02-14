export const state = () => ({
  user: 'u-iddayo',
})

export const mutations = {
  // ログインユーザー管理用
  login(state, user) {
    state.user = user
  },
  logout(state) {
    state.user = null
  }
}
export const actions = {
  loginAction({ commit }, user) {
    commit('login', user);
  }
}

