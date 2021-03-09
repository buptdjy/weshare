// miniprogram/pages/mainpg/mainpg.js
const app = getApp()
const db = wx.cloud.database({env: 'bupt2018-8hxvd'})

wx.cloud.init();

Page({
  test() {
    wx.navigateTo({
      url: '/pages/test/test',
    })
  },
  // getInfo() {
  //   var my_id = data[0]._openid;
  //   let that = this;

  //   db.add({
  //     data:{
  //       test:my_id,


  //     }
  //   })
  // },

  /**
   * 页面的初始数据
   */
  data: {
    datalist: [],
    canteenlist:[
      {
        name:"学一",
        people:10,
        id:1,
        num:123456,
        time:20200605,
        num1: 16,
        flag:1

      }
    ],


    openid: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    // console.log("sdadasdas")
    db.collection('order').get({
      success(res) {
        console.log("FIRST TIME SUCKER!!", res)
        console.log(Date())
        that.setData({
          datalist: res.data
        })
      },
      fail(res) {
        console.log("AWWWWW MAN", res)
      }
    })
  },
  // onLoad: function (options) {

  //  var x=this;
  //   //建立连接
  //   wx.connectSocket({
  //     url: "wss://canteencloud.com/ws",
  //   })

  //   //连接成功
  //   wx.onSocketOpen(function () {
  //     wx.sendSocketMessage({
  //       data: 'stock',
  //     })
  //   })
   
  //   //接收数据
  //   wx.onSocketMessage(function (data) {
     

      
  //     console.log(data.data);
     
  //    var objData = JSON.parse(data.data);
  //    x.setData({
  //      people:objData
  //    })
     
     
  //   })

  //   //连接失败
  //   wx.onSocketError(function () {
  //     console.log('websocket连接失败！');

  //   this.getOpenid();
  // })

  //   this.getOpenid();
  // },

  //获取用户openid
  getOpenid() {
    let that = this
    wx.cloud.callFunction({
      name: 'getOpenid',
      complete: res => {
        console.log(res)
        console.log('云函数获取到的openid: ', res.result.openid)
        var openid = res.result.openid
        db.collection("userinfo").add({
          data:{
            // test: res.result.appid
          }
        })
        wx.setStorageSync('openid', openid)
        that.setData({
          openid: openid
        })
      }

    })
  }
  ,

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  f0: function (event) {
    let that = this
    var time = new Date();

    console.log("HIYA!!!!")

    db.collection('order').add({
      data: {
        order_no:Math.random(),
        flag:1,
        location:"北京邮电大学",
        time:time,
        box_num:5
      },
      success: res => {
        console.log("SECOND TIME MOTHERFUCKER!!!")
      },
      fail: res => {
        console.log("SORRY!")
      }
    })

    // var canteenId = event.currentTarget.dataset.canteenId
    // console.log(canteenId);
    wx.navigateTo({
      url: '/pages/canteen/canteen?id=' + canteenId
    })
  },
})