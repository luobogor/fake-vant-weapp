import { VantComponent } from '../common/component';
import { Weapp } from 'definitions/weapp';
import { nextTick } from '../common/utils';

type TabItemData = {
  width?: number
  active: boolean
  inited?: boolean
  animated?: boolean
};

type Position = 'top' | 'bottom' | '';

VantComponent({
  classes: ['nav-class', 'tab-class', 'tab-active-class', 'line-class'],

  props: {},

  data: {
    tabs: [],
    lineStyle: '',
    scrollLeft: 0,
    scrollable: false,
    trackStyle: '',
    wrapStyle: '',
    position: ''
  },

  methods: {
    onTouchStart(event: Weapp.TouchEvent) {
      if (!this.data.swipeable) return;

      this.touchStart(event);
    },

    onTouchMove(event: Weapp.TouchEvent) {
      if (!this.data.swipeable) return;

      this.touchMove(event);
    },

    // watch swipe touch end
    onTouchEnd() {
      if (!this.data.swipeable) return;
    }


  },
})
