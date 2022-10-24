const system = require("./system.js");
// 定位服务是否可用
var locationEnabled = false;

// 经度
var longitude = 0.0;

// 纬度
var latitude = 0.0;

// 高度
var altitude = 0.0;

// 速度
var speed = 0.0;

// 精准度
var accuracy = 0.0

/// 暴露属性
module.exports.locationEnabled = locationEnabled;
module.exports.longitude = longitude;
module.exports.latitude = latitude;
module.exports.altitude = altitude;
module.exports.speed = speed;
module.exports.accuracy = accuracy;

const getLocation = function (callback) {
  
  var weakThis = this;
  system.getScope("scope.userLocation", function (locationScope) {
    if (!locationScope) {
      system.openScope("scope.userLocation", function (ret) {
        if (ret == 200) {
          // 已经打开用户权限
          
          // 设置服务可用
          weakThis.locationEnabled = true;
          
          // 更新位置
          weakThis.updateLocation(callback);
        } else {
          // 用户拒绝获取信息
          callback(201);
        }
      })
    } else {
      // 定位权限是打开的

      // 设置服务可用
      weakThis.locationEnabled = true;

      // 更新位置
      weakThis.updateLocation(callback);
    }

  });
}
const updateLocation = function (callback) {
  var weakThis = this;
  wx.getLocation({
    type: 'wgs84',
    success: function (res) {
      
      // 保存位置
      weakThis.latitude = res.latitude;
      weakThis.longitude = res.longitude;
      weakThis.altitude = res.altitude;
      weakThis.speed = res.speed;
      weakThis.accuracy = res.accuracy;

      // 获取位置成功
      callback(200);
    },
    fail: function (res) {
      // 获取位置失败
      callback(201);
    }
  })
}
module.exports.getLocation = getLocation;
module.exports.updateLocation = updateLocation;