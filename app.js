// app.js
App({
  onLaunch: function () {
    console.log("App onLaunch")
  },
  onShow (options) {
    // Do something when show.
    console.log("App onShow")
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
