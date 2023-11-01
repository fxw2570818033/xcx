// pages/main/main.js
import request from "../../utils/request"
import time from "../../utils/time";
import {deepClone,getHumpName} from '../../utils/three';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        fdLarge:[],
        find:[
            "限时抢购","时令新品"
        ],
        gettime:[],
        swiper:[
            [
                {
                    image:'http://blog.img.duanshuilu.com/nbsd4fsd45fsd5f.jpg',
                    xian:11.9,
                    yuan:14.5
                },{
                    image:'http://blog.img.duanshuilu.com/nbsd4fsd45fsd5f.jpg',
                    xian:11.9,
                    yuan:14.5
                }
            ], [
                {
                    image:'http://blog.img.duanshuilu.com/nbsd4fsd45fsd5f.jpg',
                    xian:1.9,
                    yuan:12.5
                },{
                    image:'http://blog.img.duanshuilu.com/nbsd4fsd45fsd5f.jpg',
                    xian:55.9,
                    yuan:64.5
                }
            ], [
                {
                    image:'http://blog.img.duanshuilu.com/nbsd4fsd45fsd5f.jpg',
                    xian:0.9,
                    yuan:14.5
                },{
                    image:'http://blog.img.duanshuilu.com/nbsd4fsd45fsd5f.jpg',
                    xian:15.45,
                    yuan:14.5
                }
            ], [
                {
                    image:'http://blog.img.duanshuilu.com/nbsd4fsd45fsd5f.jpg',
                    xian:11.9,
                    yuan:14.5
                },{
                    image:'http://blog.img.duanshuilu.com/nbsd4fsd45fsd5f.jpg',
                    xian:12.9,
                    yuan:17.5
                }
            ]
        ]
    },
    handleCategory(e){
        var id = e.currentTarget.dataset.id;
        wx.setStorageSync('id',id);
        wx.switchTab({
            url:`/pages/category/category`
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var arr =  [
            {name:"a",id:1},
            {name:"b",id:2},
            {name:"c",id:3}
        ];
        var target = [];
        console.log(deepClone(arr,target));
        console.log(getHumpName('border_right_bottom'));
        request({
            url:"/categories"
        }).then( res => {
            // console.log(res);
            this.setData({
                fdLarge:res.data
            })
        })
        setInterval(() => {
            this.setData({
                gettime:time()
            })
        },1000)
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