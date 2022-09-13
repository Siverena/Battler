export default {
  name: 'BtBets',
  data() {
    return {
      bets: [
        {
          mode: 1,
          imgSrc:
            'https://sun1-26.userapi.com/s/v1/if1/fKF81RvFb2H_xAOYVB4iqiVjTPklHEYXQYA4XFg4p7ZKpLnShTWLqugxpCA1KeYpKTKzHdM9.jpg?size=200x200&quality=96&crop=1361,95,1036,1036&ava=1',
          userName: 'paradox-art',
          bet: '25545.00',
          win: 5,
        },
        {
          mode: 1,
          imgSrc:
            'https://sun1-83.userapi.com/s/v1/ig2/E_7iSakVVzE7IFSlajoQvqJ0dhQM5wY_6hLgat_V3LZyZ7OH8LRJ-2rWZRuxLKxzWVNtRLpnbSHY-ad1tdL1G6JL.jpg?size=200x200&quality=95&crop=65,1,604,604&ava=1',
          userName: 'IVAN BARYSHNIKOV',
          bet: '500.00',
          win: 0,
        },
        {
          mode: 0,
          imgSrc:
            'https://avatars.akamai.steamstatic.com/50767cea96889a121066ed45c098873cb258f8f3_full.jpg',
          userName: 'PIGKL_HACKER',
          bet: '56415.00',
          win: 0,
        },
      ],
    };
  },
  computed: {
    betsModeBlue() {
      return this.bets.filter((el) => el.mode === 1);
    },
    betsModePink() {
      return this.bets.filter((el) => el.mode === 0);
    },
  },
};
