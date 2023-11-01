// pages/my/my.js
import authMsg from '../../utils/auth';
import request from '../../utils/request'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        photo:'/icon/淘公仔.png',
        token:{},
        loginStatus:'点击登录'
    },
    // 打开页面是否登录
    isLogin(){
        if(wx.getStorageSync('tel')){
            this.setData({
                token:wx.getStorageSync('token'),
                photo:wx.getStorageSync('token').avatarUrl,
                loginStatus:'退出登录'
            })
        }else{
            this.setData({
                token:{},
                photo:'/icon/淘公仔.png',
                loginStatus:'点击登录'
            })
        }
    },
    // 点击登录
    handelLongin(){
        authMsg( () => {
            if(this.data.loginStatus !== '点击登录'){
                wx.showModal({
                  title: '退出登录',
                  content: '',
                  complete: (res) => {
                    if (res.cancel) {
                      
                    }
                    if (res.confirm) {
                        this.setData({
                            token:{},
                            photo:'/icon/淘公仔.png',
                            loginStatus:'点击登录'
                        })
                        wx.removeStorageSync('tel');
                    }
                  }
                })
                
            }
           
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.isLogin();
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
        this.isLogin();
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