import clickOutside from '@/directives/clickOutside';

export default {
  name: 'UserDropDown',
  data() {
    return {
      panelElem: null,
      isVisible: false,
    };
  },
  methods: {
    internal(event) {
      this.panelElem = event.target;
      this.isVisible = !this.isVisible;
    },
    external(event) {
      if (this.isVisible) {
        const elem = event.target;
        if (elem && elem.isSameNode(this.panelElem)) {
          return;
        }
        this.isVisible = false;
      }
      this.isVisible = false;
    },
  },
  directives: {
    clickOutside,
  },
};
