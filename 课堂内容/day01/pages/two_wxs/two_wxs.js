// pages/two_wxs/two_wxs.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        time:1695087016281,
        str:'',
        list:['acg','abc','cds','ang','cxy','bcd']
    },
    editInput(evt){
        // 动态获取input框输入的值evt.detail.value
        // console.log(evt.detail.value);
        // 设置data中的数据
        this.setData({
            str:evt.detail.value
        })
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