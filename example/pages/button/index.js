import Page from '../../common/page';

Page({
  data: {
    myArr:[{
      value:1,
    },{
      value:2,
    }]
  },
  add() {
    this.setData({
      myArr: this.data.myArr.concat({ value:3 }),
    })
  },
  print(e) {
    console.log(e)
  }
});
