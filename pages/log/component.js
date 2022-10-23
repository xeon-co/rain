var myBehavior = require('./behaviors.js')
Component({
  behaviors: [myBehavior],
  observers: {
    'numberA, numberB': function(numberA, numberB) {
      // 在 numberA 或者 numberB 被设置时，执行这个函数
      this.setData({
        sum: numberA + numberB
      })
    }
  },
  properties: {
    // 这里定义了 innerText 属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
    }
  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多 slot 支持
  },
  data: {
    text: "page data.",
    numberA: 1,
    numberB: 2,
    sum:0
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在 methods 段中定义的方法名
    attached: function () { 
      console.log("Component attached")
    },
    moved: function () { 
      console.log("Component moved")
    },
    detached: function () { 
      console.log("Component detached")
    },
  },
  // 生命周期函数，可以为函数，或一个在 methods 段中定义的方法名
  attached: function () { 
    console.log("Component attached1")
  }, // 此处 attached 的声明会被 lifetimes 字段中的声明覆盖
  ready: function() { 
    console.log("Component ready")
  },
  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () { 
      console.log("Component show")
    },
    hide: function () { 
      console.log("Component hide")
    },
    resize(res) {
      res.size.windowWidth // 新的显示区域宽度
      res.size.windowHeight // 新的显示区域高度
    }
  },
  methods: {
    onLoad: function(options) {
      // 页面创建时执行
    },
    onPullDownRefresh: function() {
      // 下拉刷新时执行
    },
    // 事件响应函数
    viewTap: function() {
      // ...
      this.setData({
        numberA:0,
        numberB:4
      })
    }
  }
})