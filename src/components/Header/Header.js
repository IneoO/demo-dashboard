import UserDropDown from '@/components/HeaderUserDropDown/HeaderUserDropDown.vue';

export default {
  name: 'Header',
  components: {
    UserDropDown,
  },
  methods: {
    burgerClick() {
      this.$emit('showMenu');
    },
  },
};
