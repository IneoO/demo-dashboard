const state = {
  nenus: [],
  menusLoading: false,
};

const defaultMenu = [
  {
    id: 'general',
    text: 'General',
    submenus: [
      {
        id: 'general-dashboard',
        text: 'Dashboard',
        icon: 'fa-tachometer-alt',
        href: '/',
      },
      {
        id: 'general-clients',
        text: 'Clients',
        icon: 'fa-users',
        href: '/clients',
      },
      {
        id: 'general-products',
        text: 'Products',
        icon: 'fa-th',
        href: '/products',
      },
      {
        id: 'general-commands',
        text: 'Commands',
        icon: 'fa-th-list',
        href: '/commands',
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
        icon: 'fa-share-square',
        href: '/social-medias',
      },
      {
        id: 'marketing-advertisers',
        text: 'Advertisers',
        icon: 'fa-cloud',
        href: '/advertisers',
      },
      {
        id: 'marketing-shorteners',
        text: 'Shorteners',
        icon: 'fa-compress',
        href: '/shorteners',
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
        href: '/teams',
      },
      {
        id: 'administration-users',
        text: 'Users',
        icon: 'fa-user-friends',
        href: '/users',
      },
    ],
  },
];

const actions = {
  getMenus({ commit }) {
    commit('SET_MENUS_LOADING');
    commit('SET_MENUS', defaultMenu);
    commit('UNSET_MENUS_LOADING');
  },
};

const getters = {
  menus: state => state.menus,
  menusLoading: state => state.menusLoading,
};

const mutations = {
  SET_MENUS_LOADING(state) {
    state.menusLoading = true;
  },
  UNSET_MENUS_LOADING(state) {
    state.menusLoading = false;
  },
  SET_MENUS(state, menus) {
    state.menus = menus;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
