import BtHeader from '@/components/bt-header/BtHeader.vue';
import BtLeftSidebar from '@/components/bt-left-sidebar/BtLeftSidebar.vue';
import BtRightSidebar from '@/components/bt-right-sidebar/BtRightSidebar.vue';
import BtMobileMenu from '@/components/bt-mobile-menu/BtMobileMenu.vue';
import { mapActions } from 'vuex';
export default {
  name: 'App',
  components: {
    BtHeader,
    BtRightSidebar,
    BtLeftSidebar,
    BtMobileMenu,
  },
  methods: {
    ...mapActions(['updateWidth']),
  },

  created() {
    this.updateWidth();
    window.addEventListener('resize', this.updateWidth);
  },
};
