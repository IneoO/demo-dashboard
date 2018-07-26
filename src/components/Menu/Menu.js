import clickOutside from '@/directives/clickOutside';

export default {
  name: 'Menu',
  data() {
    return {
      cssClass: ['icon', 'fas'],
      isDisplayed: {
        modal: true,
        'is-active': false,
      },
      menus: [
        {
          id: 'general',
          text: 'General',
          submenus: [
            {
              id: 'general-dashboard',
              text: 'Dashboard',
              icon: 'fa-tachometer-alt',
            },
            {
              id: 'general-clients',
              text: 'Clients',
              icon: 'fa-users',
            },
            {
              id: 'general-products',
              text: 'Products',
              icon: 'fa-th',
            },
            {
              id: 'general-commands',
              text: 'Commands',
              icon: 'fa-th-list',
            },
          ],
        },
        {
          id: 'marketing',
          text: 'Marketing',
          submenus: [
            {
              id: 'marketing-social-medias',
              text: 'Social medias',
              icon: 'fa-cloud',
            },
            {
              id: 'marketing-advertisers',
              text: 'Advertisers',
              icon: 'fa-cloud',
            },
            {
              id: 'marketing-shorteners',
              text: 'Shorteners',
              icon: 'fa-compress',
            },
          ],
        },
        {
          id: 'administration',
          text: 'Administration',
          submenus: [
            {
              id: 'administration-teams',
              text: 'Teams',
              icon: 'fa-user-tie',
            },
            {
              id: 'administration-users',
              text: 'Users',
              icon: 'fa-user-friends',
            },
          ],
        },
      ],
    };
  },
  methods: {
    displayMenu() {
      this.isDisplayed['is-active'] = true;
    },
    hideMenu() {
      this.isDisplayed['is-active'] = false;
    },
    external(event) {
      if (this.isDisplayed['is-active']) {
        let elem = event.target;
        if (elem && elem instanceof SVGElement) {
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
  },
  directives: {
    clickOutside,
  },
};
