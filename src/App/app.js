import BtHeader from '@/components/bt-header/BtHeader.vue';
import BtLastGames from '@/components/bt-last-games/BtLastGames.vue';
import BtChats from '@/components/bt-chats/BtChats.vue';
export default {
  name: 'App',
  components: {
    BtHeader,
    BtChats,
    BtLastGames,

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
