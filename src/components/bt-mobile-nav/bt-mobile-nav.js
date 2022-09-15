import { mapActions } from 'vuex';
export default {
  name: 'BtMobileNav',
  methods: {
    ...mapActions(['logout']),
  },
};
