// pages/category/category.js
import request from '../../utils/request'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        vtabs: [],
        activeTab: 0,
        num:[],
        hei:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        request({
            url:'/categories?_embed=goods'
        }).then( res => {
            // console.log(res);
            for(let i = 0; i < res.data.length; i++ ){
                this.setData({
                    num:[...this.data.num,res.data[i].goods.length]
                })
                if(res.data[i].goods.length % 2 == 0){
                    this.setData({
                        hei:[...this.data.hei,res.data[i].goods.length / 2 * 400]
                    })
                }else{
                    this.setData({
                        hei:[...this.data.hei,(res.data[i].goods.length / 2 + 0.5) * 400]
                    })
                }
                
            }
            
            this.setData({
                vtabs:res.data
            })
        })
    },
    onTabCLick(e) {
        const index = e.detail.index
        console.log('tabClick', index)
    },
    
    onChange(e) {
        const index = e.detail.index
        console.log('change', index)
    },
    handleNav(evt){
        wx.navigateTo({
          url: `/pages/detail/detail?id=${evt.currentTarget.dataset.id}&title=${evt.currentTarget.dataset.title}`,
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