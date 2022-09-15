export default {
  state: {
    windowWidth: 0,
    version: 'desktop',
  },
  getters: {
    getVersion(state) {
      return state.version;
    },
    isMobileVersion(state) {
      return state.windowWidth < 430;
    },
    isTabVersion(state) {
      return state.windowWidth >= 430 && state.windowWidth < 651;
    },
    isDesktopVersion(state) {
      return state.windowWidth >= 651;
    },
  },
  mutations: {
    CHANGE_WIDTH(state, width) {
      state.windowWidth = width;
    },
    CHANGE_VERSION(state) {
      if (state.windowWidth < 430) {
        state.version = 'mobile';
      }
      if (state.windowWidth >= 430 && state.windowWidth < 651) {
        state.version = 'tablet';
      }
      if (state.windowWidth >= 651) {
        state.version = 'desktop';
      }
    },
  },
  actions: {
    updateWidth(ctx) {
      ctx.commit('CHANGE_WIDTH', document.documentElement.clientWidth);
      ctx.commit('CHANGE_VERSION');
    },
  },
};
