import { mapActions } from 'vuex';
export default {
  name: 'BtAuthBefore',
  methods: {
    ...mapActions(['login']),
  },
};
