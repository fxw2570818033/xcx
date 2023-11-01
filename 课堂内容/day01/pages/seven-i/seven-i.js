// pages/seven-i/seven-i.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        arr:['摩托车','汽车','火车','飞机'],
        // 页面中 将数据arr传递给子组件tablist中
        // 父子之间的通信(传递)
        swiperList:["这是摩托车的详情","这是汽车的详情","这是火车的详情","这是飞机的详情"],
        i:0
    },
    getCurrent(evt){
        this.setData({
            i:evt.detail.current
        })
    },
    handCurrent(evt){
        console.log(evt);
        // console.log('我是父页面中的方法，参数为',evt.detail);
        this.setData({
            i:evt.detail
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