import BtHeader from '@/components/bt-header/BtHeader.vue';
import BtLeftSidebar from '@/components/bt-left-sidebar/BtLeftSidebar.vue';
import BtChats from '@/components/bt-chats/BtChats.vue';
export default {
  name: 'App',
  components: {
    BtHeader,
    BtChats,
    BtLeftSidebar,

    //   DlFooter,
    //   DlLenta,
  },
  // methods: {
  //   ...mapGetters(['isMobileVersion', 'isTabVersion']),
  //   ...mapActions(['updateWidth']),
  // },
  // created() {
  //   this.updateWidth();
  //   window.addEventListener('resize', this.updateWidth);
  // },
};
