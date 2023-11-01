// pages/searchList/searchList.js
import request from '../../utils/request'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        searchList:[],
        priceFlag:true,
        msgFlag:true
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // console.log(options);
        wx.setNavigationBarTitle({
          title:options.title,
        })
        this.getData(options.id)
    },
    getData(id){
        request({
            url:`/categories/${id}?_embed=goods`
        }).then( res => {
            console.log(res.data.goods);
            this.setData({
                searchList:res.data.goods
            })
        })
        // request({
        //     url:`/goods?categoryId=${id}`,
        //     method:'GET'
        // }).then( res => {
        //     console.log(res);
        //     this.setData({
        //         searchList:
        //     })
        // })
    },
    handleDetail(evt){
        // console.log(evt);
        // console.log(evt.currentTarget.dataset);
        wx.navigateTo({
            url:`/pages/detail/detail?id=${evt.currentTarget.dataset.id}&title=${evt.currentTarget.dataset.title}`
        })
    },
    priceSort(){
        let flag = this.data.priceFlag;
        this.setData({
            priceFlag:!flag,
            searchList:flag?this.data.searchList.sort((item1,item2) => {
                return item1.price - item2.price
            }):this.data.searchList.sort((item1,item2) => {
                return item2.price - item1.price
            })
        })
    },
    handleNav(evt){
        console.log(evt);
        wx.navigateTo({
            url:`/pages/detail/detail?id=${evt.currentTarget.dataset.id}&title=${evt.currentTarget.dataset.title}`
        })
    },
    msgSort(){
        let flag = this.data.msgFlag;
        this.setData({
            msgFlag:!flag,
            searchList:flag?this.data.searchList.sort((item1,item2) => {
                return parseInt(item1.goodcomment) - parseInt(item2.goodcomment)
            }):this.data.searchList.sort((item1,item2) => {
                return parseInt(item2.goodcomment) - parseInt(item1.goodcomment)
            })
        })
        
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