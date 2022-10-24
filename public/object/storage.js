const api = require("./api.js");
const location = require("./location.js");

/// 门店编码
var storeId = null;
module.exports.storeId = storeId;

/// 门店名称
var storeName = null;
module.exports.storeName = storeName;

/// 门店地址
var storeAddress = null;
module.exports.storeAddress = storeAddress;

/// 城市编码
var cityCode = null;
module.exports.cityCode = cityCode;

/// 城市名称
var cityName = null;
module.exports.cityName = cityName;

/// 附近门店列表
var nearbyStoreList = null;
module.exports.nearbyStoreList = nearbyStoreList;
// 获取附近的门店
const fetchNearestStores = function(callback) {

  var weakThis = this;
  api.post({
    path: "/store/nearby/stores",
    param: {
      longitude: location.longitude,
      latitude: location.latitude,
      limit: 20
    },
    success: (res) => {
      console.log("fetchNearestStores")
      console.log(res)
      // 请求网络成功
      if (res.data.code == 200) {
        // 获取附近门店成功
        var storeList = res.data.data;
        if (storeList.length > 0) {
          weakThis.nearbyStoreList = storeList;

          if (weakThis.storeId == null) {
            weakThis.storeId = storeList[0].storeId;
            weakThis.storeName = storeList[0].storeName;
            weakThis.storeAddress = storeList[0].address;
            weakThis.cityCode = storeList[0].cityCode;
            weakThis.cityName = storeList[0].cityName;
          }
        }

        if (callback) {
          callback(res.data.code);
        }
      } else {
        // 获取附近门店失败
        if (callback) {
          callback(res.data.code);
        }
      }
    },
    fail: (res) => {
      // 请求网络失败
      if (callback) {
        callback(res.statusCode);
      }
    }
  });
}
module.exports.fetchNearestStores = fetchNearestStores;