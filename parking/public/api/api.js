const appInstance = getApp();
const publicApi = 'https://sit-api.x.cn'
// header
const header = {
  Post:{
    'X-HTTP-VERSION':"1.0.3",
    'x-http-devicetype':'miniapp',
    'x-http-token':wx.getStorageSync('token') || '',
    "content-Type":"application/json; charset=utf-8"
  },
  Get:{
    'X-HTTP-VERSION': "1.0.3",
    'X-HTTP-TOKEN': wx.getStorageSync('token'),
    // 'X-HTTP-TOKEN': '022ebf07b85bf49b3ba3d8de02ae7924',            
    "content-Type": "application/json; charset=utf-8"
  }
}

const api = {
  login:publicApi+'/parking-ms/auth/wxLogin',
  getArea:publicApi+'/parking-ms/carConfig/carCodePrefix',
  // 增加车牌
  addCar: publicApi + "/parking-ms/car/add",
  // 停车记录
  carHistory: publicApi + '/parking-ms/order/list',
  // 缴费详情
  detail: publicApi + '/parking-ms/parkOrderDetail'
}

const post = function(url, data){
  header.Post['x-http-token'] = wx.getStorageSync('token');
  header.Get['x-http-token'] = wx.getStorageSync('token');
  console.log("request url:"+ url + " start")
  console.log("header start")
  console.log(header)
  console.log("header end")
  // 主要包装了处理，然后可以用then方式链式调用
  console.log("promise start")
  var promise = new Promise((resolve,reject)=>{
    var that = this;
    var postData = data;
    console.log("wx request" + " url:"+ url)
    wx.request({
      url: url,
      data:postData,
      method:'POST',
      header:header.Post,
      success:function(res){
        console.log("response"+ " url:"+ url)  
        console.log(res)
        console.log(res.data.code)  
        // token失效
        if(res.data.code == '200'){
          resolve(res);
          console.log(res)
          wx.setStorage({
            key: 'token',
            data: res.header['x-http-token']
          })
        }else if (res.data.code == 10003 || res.data.code == 10004){
          wx.showModal({
            title: '',
            content: '登录过期啦',
            showCancel:false,
            confirmText:'重新登录',
            success:function(e){
              // 清空缓存，让用户重新登录
              wx.clearStorage()
              wx.reLaunch({
                url: '../home/home'
              })
            }
          })
        }
        else{
          reject(res);
        }

        console.log("request url:"+ url + " end")
      },
      error:function(e){
        reject('网络出错');
        console.log("request url:"+ url + " end")
      },
      complete:function(e){

      }
    })
  });

  console.log("promise end");
  return promise;
}

module.exports = {
  api: api,
  header: header,
  post:post
}