// parking/pages/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carInfo:[{carCode:"123456", storeName:"君尚", 
    parkRule:[{msg:"123"}, {msg:"1234"},{msg:"12345"}]},
    {carCode:"123456", storeName:"宝体", 
    parkRule:[{msg:"123"}, {msg:"1234"},{msg:"12345"}]}],
    hour:["2","0"],
    min:["56","00"],
    // 控制优惠弹窗弹出参数
    actionSheetHidden:true,
    // 控制客服电话弹窗弹出参数
    phoneHidden:true,
    // 优惠列表数组
    preferentialArr:[],
    // 当前处于第几辆车
    priceIndex:0,
    // 
    noParking:true

  },

  // 每次滑动结束
  swiperFinish:function(e){
    // console.log(e)
    switch (e.detail.current){
      case 0:
        console.log('000')
        // 设置当前车辆应缴费
        this.setData({
          priceIndex:0
        })
      break;
      case 1:
        console.log('111')
        // 设置当前车辆应缴费
        this.setData({
          priceIndex: 1,
        })
      break;
      case 2:
        console.log('222')      
        // 设置当前车辆应缴费
        this.setData({
          priceIndex: 2
        })
      break;
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})