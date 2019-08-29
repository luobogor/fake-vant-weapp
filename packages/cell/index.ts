import { link } from '../mixins/link';
import { VantComponent } from '../common/component';
import { Weapp } from 'definitions/weapp';

VantComponent({
  classes: [
    'title-class',
    'value-class',
  ],

  mixins: [link],

  props: {
    title: null,
    value: null,
    titleWidth: String,
    customStyle: String,
  },

  methods: {
    onClick(event: Weapp.Event) {
      this.$emit('click', event.detail);
      this.jumpLink();
    }
  },
})
