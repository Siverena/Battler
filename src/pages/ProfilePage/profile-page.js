import BtSectionHeader from '@/elements/bt-section-header/BtSectionHeader.vue';
import BtHistoryMyGame from '@/components/bt-history-my-game/BtHistoryMyGame.vue';
import BtProfileInfo from '@/components/bt-profile-info/BtProfileInfo.vue';
import BtMyStat from '@/components/bt-my-stat/BtMyStat.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'ProfilePage',
  components: {
    BtSectionHeader,
    BtHistoryMyGame,
    BtProfileInfo,
    BtMyStat,
  },
  computed: { ...mapGetters(['getStatus']) },
};
