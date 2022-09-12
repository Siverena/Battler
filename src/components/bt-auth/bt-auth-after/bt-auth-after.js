import { mapActions } from 'vuex';
export default {
  name: 'BtAuthAfter',
  props: ['user'],
  methods: {
    ...mapActions(['logout']),
  },
};
