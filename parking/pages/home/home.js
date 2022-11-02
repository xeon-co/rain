Page({
  data:{
    is_modal_Hidden: false,
    InputArea: {
      'border':"",
      'borRight':'none'
    },
    whichArea:'',
    showMiddleLine:false,
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
    is_modal_Msg: {
      tit:'天虹智慧停车小程序',
      content: '不用再找收费处',
      content_secMsg: '登录体验更多便利',
      btn:'极速登录'
    }
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
})