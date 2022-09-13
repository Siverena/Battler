import { mapGetters } from 'vuex';
export default {
  name: 'BtInvite',

  computed: {
    ...mapGetters(['getStatus']),
  },
};
