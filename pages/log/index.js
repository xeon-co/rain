// index.js
var myBehavior = require('./behaviors.js')
Page({
  behaviors: [myBehavior],
  // lifecycle
  onLoad: function () {
    // 小程序启动之后 触发
    console.log("index onLoad"+ ":"+this.route + ":" + getCurrentPages())
    const appInstance = getApp()
    console.log("global data:" + appInstance.globalData) // I am global data
  },
  onShow: function() {
    // 页面出现在前台时执行
    console.log("index onShow"+ ":"+this.route)
  },
  onReady: function() {
    // 页面首次渲染完毕时执行
    console.log("index onReady"+ ":"+this.route)
  },
  onHide: function() {
    // 页面从前台变为后台时执行
    console.log("index onHide"+ ":"+this.route)
  },
  onUnload: function() {
    // 页面销毁时执行
    console.log("index onUnload"+ ":"+this.route)
  },
  onPullDownRefresh: function() {
    // 触发下拉刷新时执行
    console.log("index onPullDownRefresh"+ ":"+this.route)
  },
  onReachBottom: function() {
    // 页面触底时执行
    console.log("index onReachBottom"+ ":"+this.route)
  },
  onShareAppMessage: function () {
    // 页面被用户分享时执行
    console.log("index onShareAppMessage"+ ":"+this.route)
  },
  onPageScroll: function() {
    // 页面滚动时执行
    console.log("index onPageScroll"+ ":"+this.route)
  },
  onResize: function() {
    // 页面尺寸变化时执行
    console.log("index onResize"+ ":"+this.route)
  },
  onTabItemTap(item) {
    // tab 点击时执行
    console.log(item.index+ ":"+this.route)
    console.log(item.pagePath+ ":"+this.route)
    console.log(item.text+ ":"+this.route)
  },

  data: {
    message: 'Hello MINA!',
    array: [1, 2, 3, 4, 5],
    staffA: {firstName: 'Hulk', lastName: 'Hu'}
  },
  tapName: function(event) {
    console.log(event)
    wx.navigateTo({url: 'page', events: {
      // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
      acceptDataFromOpenedPage: function(data) {
        console.log("index acceptDataFromOpenedPage:" + data)
      },
      someEvent: function(data) {
        console.log("index acceptDataFromOpenedPage:" + data)
      }
    },
    success: function(res) {
      // 通过 eventChannel 向被打开页面传送数据
      res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
    }})
  },
  clickMe: function(event) {
    console.log("clickMe")
    console.log(event)
    this.setData({ message: "Hello World" })
  }
})
