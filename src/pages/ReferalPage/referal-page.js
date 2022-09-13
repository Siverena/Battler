import BtSectionHeader from '@/elements/bt-section-header/BtSectionHeader.vue';
import BtInvite from '@/components/bt-invite/BtInvite.vue';
import BtProgress from '@/components/bt-progress/BtProgress.vue';

import { mapGetters } from 'vuex';
export default {
  name: 'ReferalPage',
  components: {
    BtSectionHeader,
    BtInvite,
    BtProgress,
  },
  computed: { ...mapGetters(['getStatus']) },
};
