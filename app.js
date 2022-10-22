// app.js
App({
  onLaunch: function () {
    console.log("App onLaunch")
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
  globalData: 'I am global data'
})
