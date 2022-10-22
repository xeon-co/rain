// index.js
Page({

  // lifecycle
  onLoad: function (option) {
    // 小程序启动之后 触发
    console.log("Page onLoad" + ":"+this.route)
    console.log(option.query)
    const eventChannel = this.getOpenerEventChannel()
    // 发送数据给来打开这个页面的
    eventChannel.emit('acceptDataFromOpenedPage', {data: 'test'});
    eventChannel.emit('someEvent', {data: 'test'});
    // 监听传送过来的数据
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      console.log("page acceptDataFromOpenerPage:" + data)
    })
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
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        console.log(res)
        var latitude = res.latitude // 纬度
        var longitude = res.longitude // 经度
      }
    })
  },
  clickMe2: function(event) {
    console.log("clickMe2")
    console.log(event)
    this.setData({ message: "Hello World" })
    wx.navigateBack()
  },

  clickMe: function(event) {
    console.log("clickMe")
    console.log(event)
    this.setData({ message: "Hello World" })
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  }
})
