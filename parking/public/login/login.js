const api = require("../api/api.js").api;
const header = require("../api/api.js").header;
//const refreshStorage = require("../api/api.js").refreshStorage;
const post = require("../api/api.js").post;
Component({
  properties: {
    modalHidden: {
      type: Boolean,
      value: true
    }, //这里定义了modalHidden属性，属性值可以在组件使用时指定.写法为modal-hidden  
    modalMsg: {
      type: Object,
      value: ' ',
    }    
  },
  data: {
    // 这里是一些组件内部数据  
    modalHidden: false,
    modalMsg: {
      
    },
    hiddenLoading:true
  },
  attached:function(){
    // 两种情况
    // 用户第一次进来，没有用户手机信息，打开授权弹窗
    if (typeof wx.getStorageSync('phoneNumberEncryptedData') == "undefined" || wx.getStorageSync('phoneNumberEncryptedData') == "") {
      this.setData({
        modalHidden: false
      })
    // 用户已经允许授权过，弹窗不再显示，但token仍然会过期
    }else{
      this.setData({
        modalHidden: true
      })
    }
  },
  methods: {
    // 这里放置自定义方法  
    modal_click_Hidden: function () {
      this.setData({
        modalHidden: true,
      })
    },
     // 获取用户手机信息
     getPhoneNumber: function (e) {
      const _this = this;
      const loginFn = {
        // 微信登录
        wxLogin: function () {
          wx.login({
            success: function (res) {
              console.log(res)
              if (res.errMsg == "login:ok"){
                wx.setStorage({
                  key: 'code',
                  data: res.code
                });
                // refreshStorage()
                setTimeout(() => {
                  // 调用虹领巾登录
                  loginFn.login()
                }, 100)
              }else{
                // 关闭loading方法
                _this.setData({
                  hiddenLoading: true
                })
              }
            },
            fail: function (failres) {
              console.log(failres)
              // 关闭loading方法
              _this.setData({
                hiddenLoading: true
              })
            },
            complete: function () {
              
            }
          })
        },
        // xxx登录
        login: function () {
          var data = {
            'wxCode': wx.getStorageSync('code'),
            'phoneNumberEncryptedData': wx.getStorageSync('phoneNumberEncryptedData'),
            'phoneNumberIv': wx.getStorageSync('phoneNumberIv')
          };
          console.log("request data:")
          console.log(data)
          post(api.login, data).then((res) => {
            console.log(res);//正确返回结果
            // 登录成功，隐藏登录框
            _this.setData({
              modalHidden: true
            });
            // 保留token
            wx.setStorage({
              key: 'token',
              data: res.data.data.token
            });
            // 非200情况
          }).catch((res) => {
            wx.showModal({
              title: '登录失败',
              content: String(res.data.message)
            })
          });
        }
      }
      console.log(e.detail)
      if (e.detail.errMsg == "getPhoneNumber:ok"){
        // 调用loading方法
        this.setData({
          hiddenLoading:false
        })
        // 保存encryptedData
        wx.setStorage({
          key: 'phoneNumberEncryptedData',
          data: e.detail.encryptedData
        });
        // 保存iv
        wx.setStorage({
          key: 'phoneNumberIv',
          data: e.detail.iv
        });
      } else if (e.detail.errMsg == "getPhoneNumber:fail user deny") {

      }
      // 调用微信登录
      loginFn.wxLogin();
    }
  }
})