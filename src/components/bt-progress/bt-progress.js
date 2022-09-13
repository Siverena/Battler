import { mapGetters } from 'vuex';
export default {
  name: 'BtProgress',
  data() {
    return {
      progres: [
        {
          percent: 0.1,
          people: 0,
        },
        {
          percent: 0.3,
          people: 10,
        },
        {
          percent: 0.5,
          people: 50,
        },
        {
          percent: 1.0,
          people: 200,
        },
        {
          percent: 3.0,
          people: 500,
        },
        {
          percent: 5.0,
          people: 1200,
        },
      ],
    };
  },
  computed: { ...mapGetters(['getStatus']) },
};
