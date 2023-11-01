// pages/eleven/eleven.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        dataList:null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log(JSON.parse(options.opt));
        console.log('onload执行。。。。');
        this.setData({
            dataList:JSON.parse(options.opt)
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        console.log('onready执行了。。。');
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        console.log('我显示了。。。');
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {
        console.log('我隐藏了。。。')
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {
        console.log('我卸载了。。。');
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