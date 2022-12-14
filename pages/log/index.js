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
    console.log("global data:" + appInstance.globalData.text) // I am global data

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

    
    // 页面创建时执行
    console.log("-----onLoad-------")
    const query2 = wx.createSelectorQuery()
  query2.select('#myCanvas')
    .fields({ node: true, size: true })
    .exec((res) => {
      console.log("-----createSelectorQuery-------")
      console.log(res)
      const canvas = res[0].node
      const ctx = canvas.getContext('2d')
      // 图片对象
      const image = canvas.createImage()
      // 图片加载完成回调
      image.onload = () => {
          // 将图片绘制到 canvas 上
          ctx.drawImage(image, 0, 0)
      }
      // 设置图片src
      image.src = 'https://open.weixin.qq.com/zh_CN/htmledition/res/assets/res-design-download/icon64_wx_logo.png'
      const dpr = wx.getSystemInfoSync().pixelRatio
      canvas.width = res[0].width * dpr
      canvas.height = res[0].height * dpr
      ctx.scale(dpr, dpr)
        // 清空画布
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillRect(0, 0, 100, 100)

        // 绘制红色正方形
        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);

        // 绘制蓝色半透明正方形
        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(130, 130, 150, 150);

        // 生成图片
        wx.canvasToTempFilePath({
            canvas,
            success: res => {
                // 生成的图片临时文件路径
                const tempFilePath = res.tempFilePath
                console.log("-----canvasToTempFilePath-------:"+tempFilePath)
            },
        })
    })
   
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

  tapName6: function(event) {
      // Worker 最大并发数量限制为 1 个，创建下一个前请用 Worker.terminate() 结束当前 Worker
      // Worker 内代码只能 require 指定 Worker 路径内的文件，无法引用其它路径
      // Worker 的入口文件由 wx.createWorker() 时指定，开发者可动态指定 Worker 入口文件
      // Worker 内不支持 wx 系列的 API
      // Workers 之间不支持发送消息
      // Worker 目录内只支持放置 JS 文件，其他类型的静态文件需要放在 Worker 目录外
    const worker = wx.createWorker('workers/request/index.js') // 文件名指定 worker 的入口文件路径，绝对路径
    worker.postMessage({
        msg: 'hello worker'
      })
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
  tapName5: function(event) {
    try {
      /* 同一个微信用户，同一个小程序 storage 上限为 10MB。storage 以用户维度隔离，同一台设备上，A 用户无法读取到 B 用户的数据；不同小程序之间也无法互相读写数据。

      插件隔离策略

      同一小程序使用不同插件：不同插件之间，插件与小程序之间 storage 不互通。
      不同小程序使用同一插件：同一插件 storage 不互通。 */
      wx.setStorageSync('jacklam', '38')
      // 在本地用户文件目录下创建一个文件 hello.txt，写入内容 "hello, world"
      const fs = wx.getFileSystemManager()
      fs.saveFile({
        tempFilePath: 'test.txt', // 传入一个本地临时文件路径
        success(res) {
          console.log(res.savedFilePath) // res.savedFilePath 为一个本地缓存文件路径
        }
      })
      console.log('local path:  ${wx.env.USER_DATA_PATH}/hello.txt')
      fs.writeFileSync('${wx.env.USER_DATA_PATH}/hello.txt',  "hello, world", "utf8")

      

    } catch (e) {
      console.error(e)
    }
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
