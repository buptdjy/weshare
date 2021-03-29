//app.js
App({
  globalData: {
    userInfo: null
  },
  onLaunch: function () {

    wx.cloud.init({
      env: "whattodo-9a20df",
      traceUser: true
    }),
    wx.login({
      success: function(res) {
        if (res.code) {
          wx.setStorageSync('code', res.code)
          console.log(res.code)
          //发起网络请求
          var appId = 'wx0ce9b5e375d3f3a5';
          var secret = '356648d88446def0800643bf9f8e9ec9';
          
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appId + '&secret=' + secret + '&js_code=' + res.code + '&grant_type=authorization_code',
            data: {},
            header: {
              'content-type': 'json'
            },
            success: function (res) {
              var openid = res.data.openid //返回openid
              console.log('openid为' + openid);
              wx.setStorageSync('openid', openid)
            },
            fail: function (res) {
              console.log("openid获取失误")
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  }
})