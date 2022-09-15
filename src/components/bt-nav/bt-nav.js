import BtMobileNav from '../bt-mobile-nav/BtMobileNav.vue';
export default {
  name: 'BtNav',
  components: {
    BtMobileNav,
  },
  data() {
    return {
      isShowMobileNav: false,
    };
  },
  methods: {
    closeMobileMenu(e) {
      if (e.target.tagName == 'A') {
        this.isShowMobileNav = false;
      }
    },
    toggleMobileNav() {
      this.isShowMobileNav = !this.isShowMobileNav;
      window.addEventListener('click', this.closeMobileMenu);
      // window.removeEventListener('click', this.closeMobileMenu);
      // console.log(evt.target);
    },
  },
};
