import { Weapp } from './weapp';

export interface VantComponentOptions<Data, Props, Methods, Computed> {
  data?: Data;
  field?: boolean;
  classes?: string[];
  mixins?: string[];
  props?: Props & Weapp.PropertyOption;
  methods?: Methods;
}
