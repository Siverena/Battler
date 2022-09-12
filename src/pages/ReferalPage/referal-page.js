import BtSectionHeader from '@/elements/bt-section-header/BtSectionHeader.vue';
import BtInvite from '@/components/bt-invite/BtInvite.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'ReferalPage',
  components: {
    BtSectionHeader,
    BtInvite,
  },
  computed: { ...mapGetters(['getStatus']) },
};
