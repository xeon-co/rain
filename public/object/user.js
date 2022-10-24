const system = require("./system.js");

// 会话编号
var sessionId = null;
module.exports.sessionId = sessionId;

// 登录钥匙串
var accessToken = null;
module.exports.accessToken = accessToken;

// 登录成功之后的code
var loginCode = null;
module.exports.loginCode = loginCode;

// 获取手机号码要使用的iv和encryptedData
var mobileIv = null;
var mobileEncryptedData = null;

module.exports.mobileIv = mobileIv;
module.exports.mobileEncryptedData = mobileEncryptedData;

// 检测是否授权
const checkUserInfo = function () {
  // 获取用户信息
  var weakThis = this;
  system.getScope("scope.userInfo", function (userScope) {
    if (!userScope) {
      system.openScope("scope.userInfo", function (ret) {
        if (ret == 200) {
          // 已经打开用户权限
          weakThis.getUserInfo();
        } else {
          // 用户拒绝获取信息
          console.log("用户拒绝授权");
        }
      })
    }
  });
}
module.exports.checkUserInfo = checkUserInfo;

// 获取用户信息
const getUserInfo = function () {
  wx.getUserInfo({
    success: res => {
      console.log(res);
    }
  })
}
module.exports.getUserInfo = getUserInfo;

// 获取accessToken
const getAccessToken = function (callback) {

  if (this.loginCode == null ||
    this.mobileIv == null ||
    this.mobileEncryptedData == null) {
    // 获取失败，资料不全
    callback({ code: 201, message: "登录资料不完整！" });
  } else {
    // 资料齐全，请求接口获取用户信息

    var weakThis = this;

    var api = require("./api.js");
    api.post({
      path: "auth/wx/login",
      param: {
        wxCode: weakThis.loginCode,
        phoneNumberIv: weakThis.mobileIv,
        phoneNumberEncryptedData: weakThis.mobileEncryptedData
      },
      success: (res) => {

        if (res.data.code == 200) {
          // 保存用户信息
          weakThis.sessionId = res.data.data["sessionid"];
          weakThis.accessToken = res.data.data["token"];

          // 本地保存
          weakThis.saveUserInfo();
        }

        // 回调
        callback(res);
      },
      fail: (res) => {
        // 回调
        callback(res);
      }
    });
  }


}
module.exports.getAccessToken = getAccessToken;

// 保存信息
const saveUserInfo = function () {
  var weakThis = this;
  if (weakThis.sessionId != null && weakThis.accessToken != null) {
    wx.setStorageSync("sys-sessionid", weakThis.sessionId);
    wx.setStorageSync("sys-accesstoken", weakThis.accessToken);
  } else {
    wx.removeStorageSync("sys-sessionid");
    wx.removeStorageSync("sys-accesstoken");
  }
}
module.exports.saveUserInfo = saveUserInfo;

// 读取信息
const readUserInfo = function () {

  var sessionId = wx.getStorageSync("sys-sessionid");
  var accessToken = wx.getStorageSync("sys-accesstoken");

  if (sessionId.length > 0 && accessToken.length > 0) {
    this.sessionId = sessionId;
    this.accessToken = accessToken;
  }
}
module.exports.readUserInfo = readUserInfo;

// 清理用户信息
const cleanUserInfo = function () {
  this.sessionId = null;
  this.accessToken = null;

  this.mobileIv = null;
  this.mobileEncryptedData = null;

  wx.removeStorageSync("sys-sessionid");
  wx.removeStorageSync("sys-accesstoken");
}
module.exports.cleanUserInfo = cleanUserInfo;

