// pages/shopCar/shopCar.js
import request from '../../utils/request'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goods:[]
    },
    eventminus(e){
        // console.log(e.detail);
        request({
            url:`/foods?id=${e.detail.foodsId}&categoryId=${e.detail.categoryId}`,
            method:'get'
        }).then( res => {
            // console.log(res.data[0]);
            if(res.data[0].num > 1){
                request({
                    url:`/foods/${e.detail.foodsId}`,
                    method:'put',
                    data:{
                        ...res.data[0],
                        num:--res.data[0].num
                    }
                }).then( res => {
                    // console.log(res);
                    this.once();
                })
            }else{
                request({
                    url:`/foods/${e.detail.foodsId}`,
                    method:'put',
                    data:{
                        ...res.data[0],
                        num:1
                    }
                }).then( res => {
                    console.log(res);
                    this.once();
                })
            }
        })
    },
    eventplus(e){
        request({
            url:`/foods?id=${e.detail.foodsId}&categoryId=${e.detail.categoryId}`,
            method:'get'
        }).then( res => {
            // console.log(res.data[0]);
            request({
                url:`/foods/${e.detail.foodsId}`,
                method:'put',
                data:{
                    ...res.data[0],
                    num: res.data[0].num + 1
                }
            }).then( res => {
                // console.log(res);
                this.once();
            })
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    once(){
        this.setData({
            goods:[]
        })
        request({
            url:'/foods'
        }).then( res => {
            for(var i = 0; i < res.data.length; i++){
                if(res.data[i].num){
                    this.setData({
                        goods:[...this.data.goods,res.data[i]]
                    })
                }
            }
        })
    },
    onLoad(options) {
       this.once();
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
        this.setData({
            goods:[]
        })
        var arr = [];
        request({
            url:'/foods'
        }).then( res => {
            for(var i = 0; i < res.data.length; i++){
                if(res.data[i].num){
                    arr.push(res.data[i]);
                    this.setData({
                        goods:arr
                    })
                }
            }
        })
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
        // this.setData({
        //     goods:[]
        // })
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