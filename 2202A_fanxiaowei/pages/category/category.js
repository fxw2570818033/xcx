// pages/category/category.js
import request from "../../utils/request";
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tab:[],
        content:[],
        num:null,
        toggle:false,
        shopCarNum:0
    },
    handleTab(e){
        this.setData({
            content:this.data.tab[e.currentTarget.dataset.num].foods,
            num:e.currentTarget.dataset.num
        })
        wx.setStorageSync('id',e.currentTarget.dataset.num + 1)
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var id = wx.getStorageSync('id');
        request({
            url:`/categories?_embed=foods`
        }).then( res => {
            // console.log(res);
            this.setData({
                tab:res.data,
                content:res.data[id].foods,
                num:id-1
            })
        })
       
    },
    handleCategory(){
        this.setData({
            toggle:true
        })
    },
    handleHide(){
        this.setData({
            toggle:false
        })
    },
    handleActive(e){
        this.setData({
            content:this.data.tab[e.currentTarget.dataset.num].foods,
            num:e.currentTarget.dataset.num,
            toggle:false
        })
        wx.setStorageSync('id',e.currentTarget.dataset.num + 1)
    },
    handelShopCar(e){
        var id = e.currentTarget.dataset.id;
        // console.log(id);
        request({
            url:`/foods/${id}`,
            method:'get'
        }).then( res => {
            // console.log(res.data);
            // console.log(res.data.num);
            if(!res.data.num){
                request({
                    url:`/foods/${id}`,
                    method:'put',
                    data:{
                        ...res.data,
                        num:1
                    }
                })
            }else{
                request({
                    url:`/foods/${id}`,
                    method:'put',
                    data:{
                        ...res.data,
                        num:res.data.num + 1
                    }
                })
            }
            var ids = wx.getStorageSync('id')
            request({
                url:`/categories?_embed=foods`
            }).then( res => {
                // console.log(res);
                this.setData({
                    tab:res.data,
                    content:res.data[ids - 1].foods,
                    num:ids-1
                })
            })

            wx.showToast({
                title: '加入购物车成功',
            })
            setTimeout(() => {
                wx.switchTab({
                    url:'/pages/shopCar/shopCar'
                })
            },1000)
            
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
        var id = wx.getStorageSync('id');
        request({
            url:`/categories?_embed=foods`
        }).then( res => {
            // console.log(res);
            this.setData({
                tab:res.data,
                content:res.data[id-1].foods,
                num:id-1
            })
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
        // console.log(1);
        wx.showToast({
          title: '切换至下一分类',
        })
        this.setData({
            num:this.data.num + 1,
            content:this.data.tab[this.data.num + 1].foods
        })
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})