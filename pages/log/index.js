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

    var prevExitState = this.exitState // 尝试获得上一次退出前 onSaveExitState 保存的数据
    if (prevExitState !== undefined) { // 如果是根据 restartStrategy 配置进行的冷启动，就可以获取到
      prevExitState.myDataField === 'myData' 
    }
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
  onSaveExitState: function() {
    var exitState = { myDataField: 'myData' } // 需要保存的数据
    return {
      data: exitState,
      expireTimeStamp: Date.now() + 24 * 60 * 60 * 1000 // 超时时刻
    }
  },
  onTabItemTap(item) {
    // tab 点击时执行
    common.sayHello('MINA')
    console.log(item.index+ ":"+this.route)
    console.log(item.pagePath+ ":"+this.route)
    console.log(item.text+ ":"+this.route)
    try {
      /* 同一个微信用户，同一个小程序 storage 上限为 10MB。storage 以用户维度隔离，同一台设备上，A 用户无法读取到 B 用户的数据；不同小程序之间也无法互相读写数据。

      插件隔离策略

      同一小程序使用不同插件：不同插件之间，插件与小程序之间 storage 不互通。
      不同小程序使用同一插件：同一插件 storage 不互通。 */
      wx.setStorageSync('jacklam', '37')
    } catch (e) {
      console.error(e)
    }
  },

  data: {
    message: 'Hello MINA!',
    array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    loading: true,
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
  tapName4: function(event) {
    const updateManager = wx.getUpdateManager()

    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      console.log(res)
      console.log(res.hasUpdate)
    })

    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success(res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })
    })

    updateManager.onUpdateFailed(function () {
      // 新版本下载失败
      console.log("onUpdateFailed")
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
