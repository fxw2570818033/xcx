// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //存放轮播图数据的列表
        swiperList:[],
        //存放九宫格数据的列表
        gridList:[]
    },
    // 获取轮播图数据的请求
    getSwiperList(){
        wx.request({
            url:'https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4',
            method:'GET',
            success:res => {
                this.setData({
                    swiperList:res.data.data.hot
                })
            }
        })
    },
    // 获取九宫格数据的请求
    getGridList(){
        wx.request({
            url:'https://www.escook.cn/categories',
            method:'GET',
            success:res => {
                console.log(res);
                this.setData({
                    gridList:res.data
                })
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getSwiperList();
        // this.getGridList();
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