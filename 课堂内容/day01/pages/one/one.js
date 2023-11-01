// pages/one/one.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        myName:'铁柱',
        arr:['a','b','c'],
        // 虚拟DOM 对比完成以后 在操作真实DOM
        list:["第一个content","第二个content","第三个content"],
        item:"我是item",
        index:666,
        flag:false,
        hide:true
    },
    // 想要获取data中定义的变量的状态可以使用this.data.xxx变量名 但是这种不能修改
    // 如果想要改变data中定义的状态 就必须调用this.setData()方法去修改页面才会跟着去修改所对应的状态
    tabFlag(){
        // console.log(this);
        // console.log(this.data.flag);
        this.setData({
            flag : !this.data.flag
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