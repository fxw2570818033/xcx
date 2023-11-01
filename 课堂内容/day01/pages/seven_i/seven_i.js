// pages/seven_i/seven_i.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list:['江苏','永城','房山','石家庄','周口','亳州','涞水'],
        swiperList:["鬼子的小弟彭于晏","丁晓晓是个富婆","李媛是个媛贵人","可以用你北工商第一次打工剩余money给我买零食吃么","承意伟妈妈说：以后只能吃软饭了","李新峰要在火车上站着过中秋","佟老六是zx的备胎"],
        i:0
    },
    // swiper中的事件 bindchange 
    // current 改变时会触发 change 事件，event.detail = {current, source} evt.detail.current
    handChange(evt){
        this.setData({
            i:evt.detail.current
        })
    },
    eventchange(evt){
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