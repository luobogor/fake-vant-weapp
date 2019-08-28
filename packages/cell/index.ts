import { VantComponent } from '../common/component';
import { Weapp } from 'definitions/weapp';

VantComponent({
  classes: [
    'title-class',
  ],

  props: {
    customStyle: String,
  },

  methods: {
    onClick(event: Weapp.Event) {
      this.$emit('click', event.detail);
      this.jumpLink();
    }
  },
})
