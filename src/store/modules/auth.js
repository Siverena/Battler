export default {
  state: {
    isAuth: false,
    user: {
      name: 'Paradox-art',
      avatar:
        'https://sun1-26.userapi.com/s/v1/if1/fKF81RvFb2H_xAOYVB4iqiVjTPklHEYXQYA4XFg4p7ZKpLnShTWLqugxpCA1KeYpKTKzHdM9.jpg?size=200x200&quality=96&crop=1361,95,1036,1036&ava=1',
      balance: 1300,
      refs: 29,
      link: 'https://buttler.ru//ref=OTVRkeScQ',
    },
  },
  getters: {
    getStatus(state) {
      return state;
    },
  },
  mutations: {
    CHANGE_AUTH(state, status) {
      state.isAuth = status;
    },
  },
  actions: {
    login(ctx) {
      let status = true;
      ctx.commit('CHANGE_AUTH', status);
    },
    logout(ctx) {
      let status = false;
      ctx.commit('CHANGE_AUTH', status);
      this.$router.push('/');
    },
  },
};
