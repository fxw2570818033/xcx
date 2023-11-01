// pages/main/main.js
import request from '../../utils/request'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        swiperList:[],
        listData:[],
        flag:false
    },
    currentPage:1,
    total:null,
    several:5,
    isLoading:false,

    // 获取轮播图数据
    getSwiperData(){
        request({
            url:'/recommends',
            method:'GET'
        }).then(res => {
            // console.log(res);
            this.setData({
                swiperList:res.data
            })
        }).catch(err => {
            console.log(err);
        })
    },
    // 获取列表书数据
    // http://localhost:3000/goods?_page=1&_limit=5
    getListData(){
        this.isLoading = true;
        wx.showLoading({
          title: '数据加载中...',
        })
        request({
            url:`/goods?_page=${this.currentPage}&_limit=${this.several}`,
            method:'GET'
        }).then( res => {
            // console.log(res);
            // console.log(res.header['X-Total-Count']);
            this.total = res.header['X-Total-Count'];
            this.setData({
                listData:[...this.data.listData,...res.data],
            })
            this.isLoading = false;
            wx.hideLoading();
        })
    },
    // 跳转搜索页面
    handleNavigator(){
        wx.navigateTo({
            url:'/pages/search/search'
        })
    },
    // 跳转到商品详情页
    handleDetail(evt){
        // console.log(evt.currentTarget.dataset.id);
        let id = evt.currentTarget.dataset.id;
        let title = evt.currentTarget.dataset.title;
        // wx.navigateTo() 跳转新页面 保留当前页面 不能跳转tabBar页面 可以传参
        // wx.redirect() 跳转新页面 关闭当前页面 不能跳转tabBar页面 可以传参
        // wx.switchTab() 跳转到tabBar页面 关闭之前所有的页面 不可以传参
        // wx.reLaunch() 跳转到任何页面 可以传参
        wx.navigateTo({
            url:`/pages/detail/detail?id=${id}&title=${title}`
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
        this.getSwiperData();
        this.getListData();
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
        // 当listdata中的数据长度正好等于 header信息中x-total-count的值相等的时候，不再发送请求
        // 让 flag = true
        if(this.data.listData.length == this.total){
            this.setData({
                flag:true
            })
            return
        }
        // if(this.currentPage * this.several >= this.total){
        //     this.setData({
        //         flag:true
        //     })
        //     return
        // } 
        if(this.isLoading) return
        this.currentPage ++;
        this.getListData();
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})