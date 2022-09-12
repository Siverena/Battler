import BtSectionHeader from '@/elements/bt-section-header/BtSectionHeader.vue';
import BtHistory from '@/components/bt-history/BtHistory.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'MoneyPage',
  components: {
    BtSectionHeader,
    BtHistory,
  },
  computed: { ...mapGetters(['getStatus']) },
};
