import BtAuthBefore from './bt-auth-before/BtAuthBefore.vue';
import BtAuthAfter from './bt-auth-after/BtAuthAfter.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'BtAuth',
  components: {
    BtAuthBefore,
    BtAuthAfter,
  },
  computed: { ...mapGetters(['getStatus']) },
  mounted() {},
};
