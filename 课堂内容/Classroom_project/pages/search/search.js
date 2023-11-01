// pages/search/search.js
import request from '../../utils/request'
Page({

    /**
     * 页面的初始数据
     */
    data: {
      
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            search: this.search.bind(this)
        })
    },
    search(value) {
        // return Promise.all([
        //     request({url:`/categories?title_like=${value}`}),
        //     request({url:`/goods?title_like=${value}`})
        // ]).then(res=>{
        //     console.log(res)
        // })
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve([{text: '搜索结果', value: 1}, {text: '搜索结果2', value: 2}])
        //     }, 200)
        // })
        // http://localhost:3000/categories?
        // title_like=xxx
        // ?后面跟着查询的字段名， _like表示模糊查询
        // console.log(value);
        return Promise.all([
            request({
                url:`/categories?title_like=${value}`,
                method:'GET'
            }),
            request({
                url:`/goods?title_like=${value}`,
                method:'GET'
            })
        ]).then( res => {
            // console.log(res);
            return [...res[0].data.map( item => ({
                ...item,
                text:item.title,
                type:1
            })),...res[1].data.map( item => ({
                ...item,
                text:item.title,
                type:2
            }))];
        })
    },
    selectResult(e){
        console.log('select result', e.detail)
        if(e.detail.item.type == 1){
            // console.log('跳转到分类页面');
            wx.navigateTo({
                url:`/pages/searchList/searchList?id=${e.detail.item.id}&title=${e.detail.item.title}`
            })
        }else{
            // console.log('跳转到详情页面');
            wx.navigateTo({
                url:`/pages/detail/detail?id=${e.detail.item.id}&title=${e.detail.item.title}`
            })
        }
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