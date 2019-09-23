export namespace Weapp {
  interface Target {
    id: string
    tagName: string
    dataset: {
      [key: string]: any
    }
  }
  export interface Event {
    /**
     * 代表事件的类型。
     */
    type: string
    /**
     * 页面打开到触发事件所经过的毫秒数。
     */
    timeStamp: number
    /**
     * 触发事件的源组件。
     */
    target: Target
    /**
     * 事件绑定的当前组件。
     */
    currentTarget: Target
    /**
     * 额外的信息
     */
    detail: any
  }

  /**
   * obverser定义，miniprogram-api-typings缺少this定义
   */
  type Observer<Instance, T> = (
    this: Instance,
    newVal: T,
    oldVal: T,
    changedPath: Array<string | number>,
  ) => void;

  type PropertyType =
    | StringConstructor
    | NumberConstructor
    | BooleanConstructor
    | ArrayConstructor
    | ObjectConstructor
    | FunctionConstructor
    | null;

  export interface TouchEvent extends Event {
    touches: Array<Touch>
    changedTouches: Array<Touch>
  }
  
  export interface PropertyOption {
    [name: string]: PropertyType | PropertyType[] | {
      /** 属性类型 */
      type: PropertyType | PropertyType[];
      /** 属性初始值 */
      value?: any;
      /** 属性值被更改时的响应函数 */
      observer?: string | Observer<WechatMiniprogram.Component.TrivialInstance, any>;
      /** 属性的类型（可以指定多个） */
      optionalTypes?: PropertyType[];
    }
  }
}
