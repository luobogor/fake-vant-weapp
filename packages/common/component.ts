import { VantComponentOptions } from 'definitions/index';


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

}

export { VantComponent };
