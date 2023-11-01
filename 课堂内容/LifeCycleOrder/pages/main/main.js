// pages/main/main.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    
    handlePage(){
        wx.navigateTo({
            url:'/pages/target/target'
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onLoad(options) {
        console.log('监听页面加载----onLoad');
        console.log(this.data,'onLoad');
    },
   
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        console.log('监听页面初次渲染完成 -----onReady');
        console.log(this.data,'onReady');
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        console.log('监听页面显示----onShow');
        console.log(this.data,'onShow');
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {
        console.log('监听页面隐藏 ---- onHide');
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {
        console.log('监听页面卸载---onUnload')
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