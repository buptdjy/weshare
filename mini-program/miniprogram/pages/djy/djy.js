// miniprogram/pages/djy/djy.js
const db = wx.cloud.database({env: 'bupt2018-8hxvd'})
import appUtil from '../../utils/time_utils.js';
import randUtil from '../../utils/rand.js';


Page({

  /**
   * 页面的初始数据
   */
  data: {
    canteenlist: [
      {
        name: "小格冰箱-冷藏",
        people: "包含冷藏，适用于存放化妆品，少量饮料",
        id: 1

      },
      {
        name: "中格冰箱-冷藏",
        people: "包含冷藏，适用于存放化妆品，少量饮料",
        id: 2

      },
      {
        name: "大格冰箱-冷藏",
        people: "包含冷藏，适用于存放化妆品，少量饮料",
        id: 3

      },
      {
        name: "小格冰箱-冷冻",
        people: "包含冷冻，适用于存放化妆品，少量饮料",
        id: 4

      },
      {
        name: "中格冰箱-冷冻",
        people: "包含冷冻，适用于存放化妆品，少量饮料",
        id: 5

      },
      {
        name: "大格冰箱-冷冻",
        people: "包含冷冻，适用于存放化妆品，少量饮料",
        id: 6

      }
    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

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
  f1: function (event) {
    var dishId = event.currentTarget.dataset.dishId
    wx.setStorageSync('dishId', dishId)
    console.log(dishId);

    let that = this
    var time = appUtil(new Date,"Y-M-D h:m:s");

    console.log("HIYA!!!!")

    db.collection('order').add({
      data: {
        order_no:randUtil(),
        flag:1,
        location:"北京邮电大学",
        time:time,
        box_num:dishId
      },
      success: res => {
        console.log("SECOND TIME MOTHERFUCKER!!!")
        wx.navigateTo({
          url: '/pages/dish/dish?id=' + dishId
        })
      },
      fail: res => {
        console.log("SORRY!", res)
      }
  })
}
})