// index.js
var api = require('../../public/object/api.js')
var storage = require('../../public/object/storage.js')
Page({

  // 进入自助买单
  selfcashiersButtonTapped:function(event) {
    wx.navigateTo({
      url: "/selfcashiers/pages/index/index",
    })
  },

  // 进入智慧停车
  parkingButtonTapped: function (event) {
    storage.fetchNearestStores(function(res){
      console.log('fetchNearestStores')
      console.log(res)
    })
    wx.navigateTo({
      url: "/parking/pages/home/home",
    })
  },
})
