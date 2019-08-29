import { VantComponentOptions } from 'definitions/index';
import { basic } from '../mixins/basic';
import { observe } from '../mixins/observer/index';

function mapKeys(source: object, target: object, map: object) {
  Object.keys(map).forEach(key => {
    if (source[key]) {
      target[map[key]] = source[key];
    }
  });
}

function VantComponent<Data, Props, Methods, Computed>(
  vantOptions: VantComponentOptions<
    Data,
    Props,
    Methods,
    Computed
    > = {}
):void {
  const options: any = {};

  mapKeys(vantOptions, options, {
    data: 'data',
    props: 'properties',
    mixins: 'behaviors',
    methods: 'methods',
    beforeCreate: 'created',
    created: 'attached',
    mounted: 'ready',
    relations: 'relations',
    destroyed: 'detached',
    classes: 'externalClasses'
  });

  // const { relation } = vantOptions;
  // if (relation) { }

  // add default externalClasses
  options.externalClasses = options.externalClasses || [];
  options.externalClasses.push('custom-class');

  // add default behaviors
  options.behaviors = options.behaviors || [];
  options.behaviors.push(basic);

  // add default options
  options.options = {
    multipleSlots: true,
    addGlobalClass: true
  };

  observe(vantOptions, options);
  // 调用小程序原生方法 Component
  Component(options);
}

export { VantComponent };
