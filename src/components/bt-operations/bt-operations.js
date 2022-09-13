export default {
  name: 'BtOperations',
  data() {
    return {
      selectedUp: false,
      selectedGet: false,
      active: false,
      paySystems: ['Qiwi', 'Банк. карта', 'Мегафон'],
    };
  },
  methods: {
    toggleMenu(key) {
      this.active = this.active === key ? null : key;
    },
    selectOptionUp(key) {
      this.selectedUp = key;
      this.toggleMenu(false);
    },
    selectOptionGet(key) {
      this.selectedGet = key;
      this.toggleMenu(false);
    },
  },
};
