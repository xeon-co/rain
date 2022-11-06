// page/home.js
// 获取全局变量
var appInstance = getApp();
// 接口
const api = require("../../public/api/api.js").api;
const header = require("../../public/api/api.js").header;
const post = require("../../public/api/api.js").post;
Page({
  data:{
    InputArea: {
      'border':"",
      'borRight':'none'
    },
    InputWord: {
      'border': "",
      'borLeft': 'none'
    },
    InputNum:[
      {
        'val':'',
        'border': '',
      },
      {
        'val': '',
        'border': '',
      },
      {
        'val': '',
        'border': '',
      },
      {
        'val': '',
        'border': '',
      },
      {
        'val': '',
        'border': '',
      }
    ],
    InputNew:{
      'border': ""
    },
    pickerArr:[],
    areaArr:[
      { key: "HLJ82", name: "澳" },
      { key: "HLJ81", name: "港" },
      { key: "HLJ71", name: "台" },
      { key: "HLJ65", name: "新" },
      { key: "HLJ64", name: "宁" },
      { key: "HLJ63", name: "青" },
      { key: "HLJ62", name: "甘" },
      { key: "HLJ61", name: "陕" },
      { key: "HLJ54", name: "藏" },
      { key: "HLJ53", name: "云" },
      { key: "HLJ52", name: "贵" },
      { key: "HLJ51", name: "川" },
      { key: "HLJ50", name: "渝" },
      { key: "HLJ46", name: "琼" },
      { key: "HLJ45", name: "桂" },
      { key: "HLJ44", name: "粤" },
      { key: "HLJ43", name: "湘" },
      { key: "HLJ42", name: "鄂" },
      { key: "HLJ41", name: "豫" },
      { key: "HLJ37", name: "鲁" },
      { key: "HLJ36", name: "赣" },
      { key: "HLJ35", name: "闽" },
      { key: "HLJ34", name: "皖" },
      { key: "HLJ33", name: "浙" },
      { key: "HLJ32", name: "苏" },
      { key: "HLJ31", name: "沪" },
      { key: "HLJ23", name: "黑" },
      { key: "HLJ22", name: "吉" },
      { key: "HLJ21", name: "辽" },
      { key: "HLJ15", name: "蒙" },
      { key: "HLJ14", name: "晋" },
      { key: "HLJ13", name: "冀" },
      { key: "HLJ12", name: "津" },
      { key: "HLJ11", name: "京" },
    ],
    wordArr:[
      {
        key: 'A',
        name: 'A'
      },
      {
        key: 'B',
        name: 'B'
      },
      {
        key: 'C',
        name: 'C'
      },
      {
        key: 'D',
        name: 'D'
      },
      {
        key: 'E',
        name: 'E'
      },
      {
        key: 'F',
        name: 'F'
      },
      {
        key: 'G',
        name: 'G'
      },
      {
        key: 'H',
        name: 'H'
      },
      {
        key: 'I',
        name: 'I'
      },
      {
        key: 'J',
        name: 'J'
      },
      {
        key: 'K',
        name: 'K'
      },
      {
        key: 'L',
        name: 'L'
      },
      {
        key: 'M',
        name: 'M'
      },
      {
        key: 'N',
        name: 'N'
      },
      {
        key: 'O',
        name: 'O'
      },
      {
        key: 'P',
        name: 'P'
      },
      {
        key: 'Q',
        name: 'Q'
      },
      {
        key: 'R',
        name: 'R'
      },
      {
        key: 'S',
        name: 'S'
      },
      {
        key: 'T',
        name: 'T'
      },
      {
        key: 'U',
        name: 'U'
      },
      {
        key: 'V',
        name: 'V'
      },
      {
        key: 'W',
        name: 'W'
      },
      {
        key: 'X',
        name: 'X'
      },
      {
        key: 'Y',
        name: 'Y'
      },
      {
        key: 'Z',
        name: 'Z'
      }
    ],
    numArr:[
      {
        key: '0',
        name: '0'
      },
      {
        key: '1',
        name: '1'
      },
      {
        key: '2',
        name: '2'
      },
      {
        key: '3',
        name: '3'
      },
      {
        key: '4',
        name: '4'
      },
      {
        key: '5',
        name: '5'
      },
      {
        key: '6',
        name: '6'
      },
      {
        key: '7',
        name: '7'
      },
      {
        key: '8',
        name: '8'
      },
      {
        key: '9',
        name: '9'
      },
      {
        key: 'A',
        name: 'A'
      },
      {
        key: 'B',
        name: 'B'
      },
      {
        key: 'C',
        name: 'C'
      },
      {
        key: 'D',
        name: 'D'
      },
      {
        key: 'E',
        name: 'E'
      },
      {
        key: 'F',
        name: 'F'
      },
      {
        key: 'G',
        name: 'G'
      },
      {
        key: 'H',
        name: 'H'
      },
      {
        key: 'I',
        name: 'I'
      },
      {
        key: 'J',
        name: 'J'
      },
      {
        key: 'K',
        name: 'K'
      },
      {
        key: 'L',
        name: 'L'
      },
      {
        key: 'M',
        name: 'M'
      },
      {
        key: 'N',
        name: 'N'
      },
      {
        key: 'O',
        name: 'O'
      },
      {
        key: 'P',
        name: 'P'
      },
      {
        key: 'Q',
        name: 'Q'
      },
      {
        key: 'R',
        name: 'R'
      },
      {
        key: 'S',
        name: 'S'
      },
      {
        key: 'T',
        name: 'T'
      },
      {
        key: 'U',
        name: 'U'
      },
      {
        key: 'V',
        name: 'V'
      },
      {
        key: 'W',
        name: 'W'
      },
      {
        key: 'X',
        name: 'X'
      },
      {
        key: 'Y',
        name: 'Y'
      },
      {
        key: 'Z',
        name: 'Z'
      },
      {
        key: '港',
        name: '港'
      },
      {
        key: '澳',
        name: '澳'
      },
      {
        key: '学',
        name: '学'
      },
      {
        key: '警',
        name: '警'
      }
    ],
    newArr: [
      {
        key: '0',
        name: '0'
      },
      {
        key: '1',
        name: '1'
      },
      {
        key: '2',
        name: '2'
      },
      {
        key: '3',
        name: '3'
      },
      {
        key: '4',
        name: '4'
      },
      {
        key: '5',
        name: '5'
      },
      {
        key: '6',
        name: '6'
      },
      {
        key: '7',
        name: '7'
      },
      {
        key: '8',
        name: '8'
      },
      {
        key: '9',
        name: '9'
      },
      {
        key: 'A',
        name: 'A'
      },
      {
        key: 'B',
        name: 'B'
      },
      {
        key: 'C',
        name: 'C'
      },
      {
        key: 'D',
        name: 'D'
      },
      {
        key: 'E',
        name: 'E'
      },
      {
        key: 'F',
        name: 'F'
      },
      {
        key: 'G',
        name: 'G'
      },
      {
        key: 'H',
        name: 'H'
      },
      {
        key: 'I',
        name: 'I'
      },
      {
        key: 'J',
        name: 'J'
      },
      {
        key: 'K',
        name: 'K'
      },
      {
        key: 'L',
        name: 'L'
      },
      {
        key: 'M',
        name: 'M'
      },
      {
        key: 'N',
        name: 'N'
      },
      {
        key: 'O',
        name: 'O'
      },
      {
        key: 'P',
        name: 'P'
      },
      {
        key: 'Q',
        name: 'Q'
      },
      {
        key: 'R',
        name: 'R'
      },
      {
        key: 'S',
        name: 'S'
      },
      {
        key: 'T',
        name: 'T'
      },
      {
        key: 'U',
        name: 'U'
      },
      {
        key: 'V',
        name: 'V'
      },
      {
        key: 'W',
        name: 'W'
      },
      {
        key: 'X',
        name: 'X'
      },
      {
        key: 'Y',
        name: 'Y'
      },
      {
        key: 'Z',
        name: 'Z'
      },
      {
        key: '港',
        name: '港'
      },
      {
        key: '澳',
        name: '澳'
      },
      {
        key: '学',
        name: '学'
      },
      {
        key: '警',
        name: '警'
      }
    ],
    // whichArea:'',
    numKey:0,
    showMiddleLine:false,
    data:'智慧停车授权入口',
    selected:true,
    is_modal_Hidden: false,
    is_modal_Msg: {
      tit:'天虹智慧停车小程序',
      content: '不用再找收费处',
      content_secMsg: '登录体验更多便利',
      btn:'极速登录'
    },
    // 记录车牌历史记录
    codeHistoryHidden:false
    // whichNew:'aaa'
  },
  addInput:function(){
    // 地区样式
    // var InputAreaData = this.data.InputArea;
    var border = '';
    var borRight = 'none';
    var showMiddleLine = false;
    var borderNew = '1px solid #fe473c';
    // 字母样式
    // var InputWordData = this.data.InputWord;
    var borderW = '';
    var borLeft = 'none';
    // 数字样式
    var item = this.data.InputNum;
    for (var i in item) {
      item[i].border = '';
    }
    this.setData({
      'InputArea.border': border,
      'InputArea.borRight': borRight,
      'showMiddleLine': showMiddleLine,
      'InputWord.border': '',
      'InputWord.borLeft': borLeft,
      'InputNum': item,
      'pickerArr': this.data.newArr,
      'deleteBottom': '40rpx',
      'InputNew.border': borderNew      
    });
    // 弹出输入框
    this.animation.translate(0, '-100%').step();
    this.setData({ animation: this.animation.export() });
  },
  // 地区输入
  areaIn:function(res){
    // 地区样式
    var InputAreaData = this.data.InputArea;
    var border = InputAreaData.border == ''?'1px solid #fe473c':'';
    var borRight = InputAreaData.borRight == 'none'?'1px solid #fe473c':'none';
    var showMiddleLine = InputAreaData.border == '' ? true : false;    
    // 字母样式
    var InputWordData = this.data.InputWord;
    var borderW = '';
    var borLeft = 'none';
    
    // 数字样式
    var item = this.data.InputNum;
    for (var i in item) {
      item[i].border = '';
    }
    this.setData({
      'InputArea.border': border,
      'InputArea.borRight': borRight,
      'showMiddleLine': showMiddleLine,
      'InputWord.border': borderW,
      'InputWord.borLeft': borLeft,
      'InputNum': item,
      'pickerArr':this.data.areaArr,
      'deleteBottom':'120rpx',
      'InputNew.border': ''            
    });
    // 弹出输入框
    this.animation.translate(0, '-100%').step();
    this.setData({ animation: this.animation.export() });
    // 按钮状态沉睡
    this.setData({
      addStatus: 'asleepBtn'
    })
    // 点击输入框选择方法
    // this.pickerFn()
  },
  // 字母输入
  wordIn: function (res) {
    // 字母样式
    var InputWordData = this.data.InputWord;
    var border = InputWordData.border == '' ? '1px solid #fe473c' : '';
    var borLeft = InputWordData.borLeft == 'none' ? '1px solid #fe473c' : 'none';
    var showMiddleLine = InputWordData.border == '' ? true : false;
    // 地区样式
    var InputAreaData = this.data.InputArea;
    var borderA = '';
    var borRight =  'none';
    // 数字样式
    var item = this.data.InputNum;
    for (var i in item) {
      item[i].border = '';
    }
    this.setData({
      'InputWord.border': border,
      'InputWord.borLeft': borLeft,
      'showMiddleLine': showMiddleLine,
      'InputArea.border': borderA,
      'InputArea.borRight': borRight,
      'InputNum': item,
      'pickerArr': this.data.wordArr,
      'deleteBottom': '205rpx',
      'InputNew.border': ''                           
    });
    // 弹出输入框
    this.animation.translate(0, '-100%').step()
    this.setData({ animation: this.animation.export() })
    // 按钮状态沉睡
    this.setData({
      addStatus: 'asleepBtn'
    })
  },
  // 数字输入
  numInput:function(e,key){
    // 数字样式
    // console.log(key)
    if(key == 0){
      var key = key
    }else{
      var key = key || e.target.dataset.key;  
    }
    var item = this.data.InputNum;
    for(var i in item){
      item[i].border = '';
    }
    item[key].border = '1px solid #fe473c';
    // 字母样式
    var InputWordData = this.data.InputWord;
    var border = '';
    var borLeft = 'none';
    // 地区样式
    var InputAreaData = this.data.InputArea;
    var borderA = '';
    var borRight = 'none';
    this.setData({
      'InputNum': item,
      // 前两个框
      'InputWord.border': border,
      'InputWord.borLeft': borLeft,
      'showMiddleLine': false,
      'InputArea.border': borderA,
      'InputArea.borRight': borRight,
      'pickerArr': this.data.numArr,
      'deleteBottom': '40rpx',
      'numKey':key,
      'InputNew.border': ''                  
    });
    // 弹出输入框
    this.animation.translate(0, '-100%').step()
    this.setData({ animation: this.animation.export() })
    // 按钮状态沉睡
    this.setData({
      addStatus: 'asleepBtn'
    })
  },
  // 指定为何种输入
  pickerFn:function(e){
    // console.log(e);
    // console.log(this.data.InputNew.border == '')
    // console.log(this.data.pickerArr.length == this.data.areaArr.length)
    // 选中的是地区
    if (this.data.pickerArr.length == this.data.areaArr.length){
      this.areaFn(e);     
    // 选中的是字母
    } else if (this.data.pickerArr.length == this.data.wordArr.length){
      this.wordFn(e);
    // 选中的是数字
    } else if (this.data.pickerArr.length == this.data.numArr.length && this.data.InputNew.border == ''){
      this.numFn(e);     
    // 选中的是新能源
    } else{
      this.newFn(e);
    }
  },
  // 删除键
  deleteFn:function(e){
    // 选中的是地区
    if (this.data.pickerArr.length == this.data.areaArr.length) {
      this.setData({
        whichArea: ''
      });
      // 选中的是字母
    } else if (this.data.pickerArr.length == this.data.wordArr.length) {
      this.setData({
        whichWord: ''
      });
      // 回退一格
      this.areaIn();
      // 选中的是数字
    } else if (this.data.pickerArr.length == this.data.numArr.length && this.data.InputNew.border == '') {
      var key = this.data.numKey;
      var item = this.data.InputNum;
      item[key].val = '';
      this.setData({
        InputNum: item
      });
      // 调整selected长度
      var selected = this.data.selected;
      selected.splice(key,1)
      // 补充selected数组
      this.setData({
        selected: selected
      })
      // 回退一格
      // console.log(key)
      if (key == 0) {
        this.wordIn();
      } else {
        key--;
        this.numInput(undefined, key);
      }
    } else {
      this.setData({
        whichNew: ''
      });
      this.numInput(undefined, 4)      
    };
    
  },
  // 地区选择
  areaFn:function(e){
    this.setData({
      whichArea: e.target.dataset.val,
      areaCode:e.target.dataset.code
    });
    
    // 判断最后一个则收起输入框 
    if (this.data.selected.length == 5 && typeof this.data.whichArea != 'undefined' && typeof this.data.whichWord != 'undefined') {
      this.downFrame();
      
    }else{
      // 输入完后跳到下一个框
      this.wordIn();
      
    }
    
  },
  // 字母选择
  wordFn: function (e) {
    this.setData({
      whichWord: e.target.dataset.val,
      wordCode: e.target.dataset.code      
    });

    // 判断最后一个则收起输入框
    // console.log(this.data.whichArea)
    if (this.data.selected.length == 5 && typeof this.data.whichArea != 'undefined' && typeof this.data.whichWord != 'undefined') {
      this.downFrame();
    }else{
      // 输入完后跳到下一个框
      this.numInput(undefined, 0);
    }
  },
  // 数字选择
  numFn: function (e) {
    // console.log(e.target.dataset)
    var key = this.data.numKey;    
    var item = this.data.InputNum;
    item[key].val = e.target.dataset.val;
    

    // console.log(item);
    var selected = [];
    for(var i of item){
      if(i.val != ''){
        selected.push(1)
      }
    }
    // 补充selected数组
    this.setData({
      selected: selected
    })
    // 判断最后一个则收起输入框
    if (this.data.selected.length == 5 && typeof this.data.whichArea != 'undefined' && typeof this.data.whichWord != 'undefined'){
      this.downFrame();
    }else{
      // 跳下一个框
      if (key == 4) {
        key == 4
      } else {
        key++
      }
      this.numInput(undefined, key)
    }
    this.setData({
      InputNum: item,   
    })
  },
  // 新能源选择
  newFn: function (e) {
    this.setData({
      whichNew: e.target.dataset.val,
      newCode: e.target.dataset.code      
    });

    // 判断最后一个则收起输入框
    if (this.data.selected.length == 5 && typeof this.data.whichArea != 'undefined' && typeof this.data.whichWord != 'undefined' && typeof this.data.whichNew != 'undefined') {
      this.downFrame();
    } else {
      // 输入完后跳到下一个框
      // this.wordIn();

    }

  },
  // 收起输入框
  downFrame:function(e){
    this.animation.translate(0, '100%').step();
    this.setData({ animation: this.animation.export() });
    // this.setData({
    // })
    // 字母样式
    var border = '';
    var borLeft = 'none';
    var borderA = '';
    var borRight = 'none';
    var showMiddleLine = false;
    var item = this.data.InputNum;
    for (var i in item) {
      item[i].border = '';
    }   
    this.setData({
      'InputWord.border': border,
      'InputWord.borLeft': borLeft,
      'showMiddleLine': showMiddleLine,
      'InputArea.border': borderA,
      'InputArea.borRight': borRight,
      'InputNum': item  
    });
    // console.log(this.data.selected.length)
    // console.log(this.data.whichWord)
    if (this.data.selected.length == 5 && typeof this.data.whichArea != 'undefined' && this.data.whichArea != '' && typeof this.data.whichWord != 'undefined' && this.data.whichWord != '') {
      // 按钮状态激活
      this.setData({
        addStatus: 'activedBtn'
      })
    }else{
      // 按钮状态激活
      this.setData({
        addStatus: 'asleepBtn'
      })
    }
  },
  // 确定添加
  addFn:function(e){
    // const header = require("../../public/api/api.js").header;    
    var _this = this;
    if (this.data.addStatus == 'activedBtn'){
      const areaCode = this.data.areaCode;
      const wordCode = this.data.wordCode;
      var numCode = '';
      const InputNum = this.data.InputNum;
      for (var i of InputNum){
        numCode += String(i.val);
      }
      const newCode = this.data.newCode || '';
      var carCode = areaCode + wordCode + numCode + newCode;
      // console.log(carCode)
      carCode = 'HLJ51A56647'
      var data = {
        'carCode': 'HLJ51A56647',
      }
      post(api.addCar, data).then((res) => {
        console.log(res);//正确返回结果
        if (res.data.code == 200) {
          // 非虹领巾用户
          if (res.data.data.memberId == 0) {
            wx.setStorage({
              key: 'carCode',
              data: carCode
            });
            // 虹领巾用户
          } else {
            wx.setStorage({
              key: 'carCode',
              data: ''
            });
          }
          wx.redirectTo({
            url: '../detail/detail'
          })
        } else {
          wx.showModal({
            title: '',
            content: res.data.message,
            showCancel: false
          })
        }
        // 关闭loading方法
        this.setData({
          hiddenLoading: true
        })
      }).catch((errMsg) => {
        console.log(errMsg);//错误提示信息
        // 关闭loading方法
        this.setData({
          hiddenLoading: true
        })
      });
      
    }else{
      wx.showToast({
        title: '请添加车牌',
      })
      return;
    }
    
  },
  // 获取地区接口
  getArea:function(){
    const _this = this;
    var data = {}
    post(api.getArea, data).then((res) => {
      console.log(getCurrentPages() +  " getArea reuquest:"+api.getArea);//正确返回结果
      console.log(res);//正确返回结果
      var areaArr = [];
      for (var i of res.data.data) {
        areaArr.push({
          key: i.key,
          name: i.name
        })
      }
      // console.log(areaArr)
      _this.setData({
        'areaArr': areaArr
      })
      // 非200情况
    }).catch((res) => {
      console.log(res);//错误提示信息
    });
    
  },
  // 点击历史记录赋值
  setInfield:function(e){
    const code = e.target.dataset.val;
    const codeArr = [];
    for(var i of code){
      codeArr.push(i);
    }
    var InputNum = this.data.InputNum;
    for(var j in InputNum){
      InputNum[j].val = codeArr[~~j+3]
    }
    this.setData({
      whichArea:codeArr[0],
      whichWord:codeArr[1],
      InputNum:InputNum
    })
  },
  // 清除车牌历史记录
  clearHistory:function(){
    this.setData({
      codeHistoryHidden:true
    })
  },
  onLoad:function(options){
    // console.log(api)
    // 页面初始化 options为页面跳转所带来的参数
    this.getArea();
  },
  onReady:function(){
    // 页面渲染完成
    this.animation = wx.createAnimation()
  },
  onShow:function(){
    // this.addFn()
    // 页面显示
    // this.loginFn.wxLogin()
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})