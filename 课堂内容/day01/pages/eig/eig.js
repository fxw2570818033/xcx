// pages/eig/eig.js
import ajax from "../../utils/ajax"
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    HandlerGet(){
        ajax({url:'/list',method:'get'}).then(res => {
            console.log(res.data);
        })

        // wx.request({
        //     url:'http://localhost:3000/list',
        //     method:'get',
        //     success(res){
        //         console.log(res.data);
        //     },
        //     fail(err){
        //         console.log(err);
        //     }
        // })
    },
    HandlerPost(){
        ajax({url:'/list',method:'POST',data:{name:'bug',bug:'数以万计'}}).then(res => {
            console.log(res.data);
        })
        // wx.request({
        //     url:'http://localhost:3000/list',
        //     method:'post',
        //     data:{
        //         name:'zx',
        //         age:18
        //     },
        //     success(res){
        //         console.log(res.data);
        //     },
        //     fail(err){
        //         console.log(err);
        //     }
        // })
    },
    HandlerPut(){

        ajax({url:'/list/4',method:'PUT',data:{name:'bug',bug:'数xue'}}).then(res => {
            console.log(res.data);
        })

        // wx.request({
        //     url:'http://localhost:3000/list/1',
        //     method:'put',
        //     data:{
        //         name:"陌小南"
        //     },
        //     success(res){
        //         console.log(res.data);
        //     },
        //     fail(err){
        //         console.log(err);
        //     }
        // })
    },
    HandlerDelete(){

        ajax({url:'/list/3',method:'DELETE'}).then(res => {
            console.log(res.data);
        })

        // wx.request({
        //     url:'http://localhost:3000/list/2',
        //     method:'delete',
        //     success(res){
        //         console.log(res.data);
        //     },
        //     fail(err){
        //         console.log(err);
        //     }
        // })
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