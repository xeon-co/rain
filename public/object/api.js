const config = require("./config.js");
// 服务器接口地址
var apiHost = null;
if (config.isTestMode) {
  // 测试地址
  apiHost = "https://sit-api.X.cn";
} else {
  // 正式地址
  apiHost = "https://sit-api.X.cn";
}
module.exports.apiHost = apiHost;
// 计时器
var timer;

// 公用header参数
const commonHeaders = function () {

  var headers = new Object();

  // 系统信息
  // headers["x-http-channel"] = config.channelName;
  headers["x-http-version"] = config.version;
  headers["Content-Type"] = "application/json"; // application/x-www-form-urlencoded
  headers['x-http-devicetype'] = 'miniapp';
  // 用户信息
  const user = require("./user.js");
  if (user.sessionId) {
    headers["x-http-session"] = user.sessionId;
    headers["x-http-token"] = user.accessToken;
  }

  return headers;
}


module.exports.commonHeaders = commonHeaders;

// 发送get请求
const get = data => {
  wx.request({
    url: apiHost + data.path,
    method: "get",
    header: commonHeaders(),
    data: data.param,
    success: (res) => {
      if (res.data.code == 40006) {
        // 会话过期，清空用户信息
        if (timer == null) {
          timer = setTimeout(function(){
            
            // 清空用户信息
            const user = require("./user.js");
            user.cleanUserInfo();

            // 回到首页
            wx.navigateBack({
              delta: 10000
            })

            // 清除计时器
            clearTimeout(timer);
            timer = null;
          }, 3000);
        }
      } else if (res.header.token != null && res.header.token.length > 0) {
        // 服务端返回最新的token，更新token
        const user = require("./user.js");
        user.accessToken = res.header.token;
        user.saveUserInfo();
      }

      if (data.success != null) {
        data.success(res);
      }

      if (res.data.code == 40006) {
        // 会话过期，清空用户信息

        wx.showToast({
          title: res.data.message,
          icon: "none",
          mask: true,
          duration: 3000
        });
      }
    },
    fail: (res) => {
      if (data.fail != null) {
        data.fail(res);
      }
    }
  });
}
module.exports.get = get;


// 发送post请求
const post = data => {
  wx.request({
    url: apiHost + data.path,
    method: "post",
    header: commonHeaders(),
    data: data.param,
    success: (res) => {
      console.log('api post')
      console.log(res)
      if (res.data.code == 40006) {
        // 会话过期，清空用户信息

        if (timer == null) {
          timer = setTimeout(function () {
            // 清空用户信息
            const user = require("./user.js");
            user.cleanUserInfo();

            // 回到首页
            wx.navigateBack({
              delta: 10000
            })

            // 清除计时器
            clearTimeout(timer);
            timer = null;
          }, 3000);
        }
      } else if (res.header.token != null && res.header.token.length > 0) {
        // 服务端返回最新的token，更新token
        const user = require("./user.js");
        user.accessToken = res.header.token;
        user.saveUserInfo();
      }


      // 回调
      if (data.success != null) {
        data.success(res);
      }

      if (res.data.code == 40006) {
        // 会话过期，清空用户信息

        wx.showToast({
          title: res.data.message,
          icon: "none",
          mask: true,
          duration: 3000
        });
      }
    },
    fail: (res) => {
      if (data.fail != null) {
        data.fail(res);
      }
    }
  });
}
module.exports.post = post;