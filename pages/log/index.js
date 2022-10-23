// index.js
var myBehavior = require('./behaviors.js')
var common = require('common.js')
Page({
  behaviors: [myBehavior],
  // lifecycle
  onLoad: function () {
    // 小程序启动之后 触发
    console.log("index onLoad"+ ":"+this.route + ":" + getCurrentPages())
    const appInstance = getApp()
    console.log("global data:" + appInstance.globalData) // I am global data

    const query = wx.createSelectorQuery()
    query.select('#tapTest').boundingClientRect(function(res){
      res.top // #the-id 节点的上边界坐标（相对于显示区域）
      console.log("boundingClientRect top:"+ res.top+  ":"+this.route + ":" + getCurrentPages())
    })
    query.selectViewport().scrollOffset(function(res){
      res.scrollTop // 显示区域的竖直滚动位置
      console.log("scrollOffset scrollTop:"+ res.scrollTop+  ":"+this.route + ":" + getCurrentPages())
    })
    query.exec()
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
    common.sayHello('MINA')
    console.log(item.index+ ":"+this.route)
    console.log(item.pagePath+ ":"+this.route)
    console.log(item.text+ ":"+this.route)
    try {
      wx.setStorageSync('jacklam', '37')
    } catch (e) {
      console.error(e)
    }
  },

  data: {
    message: 'Hello MINA!',
    array: [1, 2, 3, 4, 5],
    staffA: {firstName: 'Hulk', lastName: 'Hu'}
  },
  tapName2: function(event) {
    this.animate('#tapTest', [
      { opacity: 1.0, rotate: 0, backgroundColor: '#FF0000' },
      { opacity: 0.5, rotate: 45, backgroundColor: '#00FF00'},
      { opacity: 0.0, rotate: 90, backgroundColor: '#FF0000' },
      ], 5000, function () {
        this.clearAnimation('#tapTest', { opacity: true, rotate: true }, function () {
          console.log("清除了#tapTest opacity 和rotate属性")
          
        })
    }.bind(this))
  },
  tapName3: function(event) {
    this.clearAnimation('#tapTest', { opacity: true, rotate: true, backgroundColor:'#FF0000'}, function () {
      console.log("清除了#tapTest opacity 和rotate属性")
     
    })
  },
  tapName1: function(event) {
    // callback 形式调用
    // wx.chooseImage({
    //   success(res) {
    //     console.log('res:', res)
    //   }
    // })

    // promise 形式调用
    wx.chooseMedia().then(res => console.log('res: ', res)).catch(e=> console.log('e:', e))
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
