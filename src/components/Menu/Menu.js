import { mapActions, mapGetters } from 'vuex';
import clickOutside from '@/directives/clickOutside';

export default {
  name: 'Menu',
  data() {
    return {
      cssClass: ['icon', 'fas'],
      isDisplayed: false,
    };
  },
  computed: {
    ...mapGetters({
      menus: 'Menu/menus',
    }),
  },
  methods: {
    ...mapActions({
      getMenus: 'Menu/getMenus',
    }),
    displayMenu() {
      this.isDisplayed = true;
    },
    hideMenu() {
      this.isDisplayed = false;
    },
    external(event) {
      if (this.isDisplayed) {
        let elem = event.target;
        if (elem && elem instanceof SVGElement) {
          elem = elem.parentNode;
          elem = elem.parentNode;
        }
        if (elem && !~elem.className.indexOf('burger-menu')) {
          this.hideMenu();
        }
      }
    },
  },
  created() {
    this.$parent.$on('showMenu', this.displayMenu);
    this.getMenus();
  },
  directives: {
    clickOutside,
  },
};
