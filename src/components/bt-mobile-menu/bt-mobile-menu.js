import BtChats from '@/components/bt-chats/BtChats.vue';
import BtLastGames from '../bt-last-games/BtLastGames.vue';
export default {
  name: 'BtMobileMenu',
  components: {
    BtChats,
    BtLastGames,
  },
  data() {
    return {
      isChatOpen: false,
      isHistoryOpen: false,
    };
  },
  methods: {
    openChat() {
      this.isChatOpen = true;
    },
    closeChat() {
      this.isChatOpen = false;
    },
    openHistory() {
      this.isHistoryOpen = true;
    },
    closeHistory() {
      this.isHistoryOpen = false;
    },
  },
};
