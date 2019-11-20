// pages/home/home.js
import {
  getMultiData
} from '../../service/home.js'
Page({

  data: { 
    banners:[],
    recommend:[]
  },
  onLoad: function (options) {
    getMultiData().then(res =>{
      //1.取出轮播图和推荐数据
      console.log(res)
      const banner = res.data.data.banner.list
      console.log(banner)
      const rec = res.data.data.recommend.list
      console.log(rec)
      //上面只是取出来了数据，最终我们是要到home.wxml里面进行数据展示，所以我们还需要设置数据
      this.setData({
        banners:banner,
        recommend: rec
      })
    })
  }
})
