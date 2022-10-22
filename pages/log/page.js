// index.js
Page({

  // lifecycle
  onLoad: function () {
    // 小程序启动之后 触发
    console.log("Page onLoad" + ":"+this.route)
  },
  onShow: function() {
    // 页面出现在前台时执行
    console.log("Page onShow"+ ":"+this.route)
  },
  onReady: function() {
    // 页面首次渲染完毕时执行
    console.log("Page onReady"+ ":"+this.route)
  },
  onHide: function() {
    // 页面从前台变为后台时执行
    console.log("Page onHide"+ ":"+this.route)
  },
  onUnload: function() {
    // 页面销毁时执行
    console.log("Page onUnload"+ ":"+this.route)
  },
  onPullDownRefresh: function() {
    // 触发下拉刷新时执行
    console.log("Page onPullDownRefresh"+ ":"+this.route)
  },
  onReachBottom: function() {
    // 页面触底时执行
    console.log("Page onReachBottom"+ ":"+this.route)
  },
  onShareAppMessage: function () {
    // 页面被用户分享时执行
    console.log("Page onShareAppMessage"+ ":"+this.route)
  },
  onPageScroll: function() {
    // 页面滚动时执行
    console.log("Page onPageScroll"+ ":"+this.route)
  },
  onResize: function() {
    // 页面尺寸变化时执行
    console.log("Page onResize"+ ":"+this.route)
  },
  onTabItemTap(item) {
    // tab 点击时执行
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },

  data: {
    message: 'Hello MINA!',
    array: [1, 2, 3, 4, 5],
    staffA: {firstName: 'Hulk', lastName: 'Hu'}
  },
  tapName: function(event) {
    console.log(event)
  },
  clickMe: function(event) {
    console.log("clickMe")
    console.log(event)
    this.setData({ message: "Hello World" })
  }
})
