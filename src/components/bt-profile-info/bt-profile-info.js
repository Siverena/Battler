import { mapGetters } from 'vuex';
export default {
  name: 'BtProfileInfo',
  computed: { ...mapGetters(['getStatus']) },
};
