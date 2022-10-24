// app.js  https://mp.weixin.qq.com/
App({
  // require : function($uri){return require($uri)},
  onLaunch: function () {
    console.log("App onLaunch")
     // 登录
     wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res)
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log(res)
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow (options) {
    // Do something when show.
    console.log("App onShow")
    var obj =  wx.getLaunchOptionsSync()
    if (options.referrerInfo && options.referrerInfo.appId) {
      console.log('启动小程序的路径:', obj.path)
      console.log('启动小程序的场景值:', obj.scene)
      console.log('启动小程序的 query 参数:', obj.query)
      console.log('来源信息:', obj.shareTicket)
      console.log('来源信息参数appId:', obj.referrerInfo.appId)
      console.log('来源信息传过来的数据:', obj.referrerInfo.extraData)
    }
    // 不做判断
    console.log('——启动小程序的路径:', obj.path)
    console.log('——启动小程序的场景值:', obj.scene)
    console.log('——启动小程序的 query 参数:', obj.query)
    console.log('——来源信息:', obj.shareTicket)
    console.log('——来源信息参数appId:', obj.referrerInfo.appId)
    console.log('——来源信息传过来的数据:', obj.referrerInfo.extraData)
  },
  onHide () {
    // Do something when hide.
    console.log("App onHide")
  },
  onError (msg) {
    console.log("App onError")
    console.log(msg)
  },
  globalData: {
    text:'I am global data',
    userInfo: null
  }
})
