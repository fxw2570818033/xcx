// pages/shopCar/shopCar.js
import request from '../../utils/request';
import authMsg from '../../utils/auth';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        slideButtons:[
            {type:'warn',text:'分组'},
            {type:'default',text:'收藏'},
            {type:'warn',text:'删除'}
        ],
        shopData:[],
        allFlag:false,
        shopLen:0,
        allNum:0,
        allMoney:0
    },

    // 重新修改shopData的值
    change(){
        var {nickName} = wx.getStorageSync('token');
        var tel = wx.getStorageSync('tel');
        request({
            url:`/carts?username=${nickName}&tel=${tel}&_expand=good`
        }).then( res => {
            this.setData({
                shopData:res.data,
                shopLen:res.data.length
            })
        })
    },
    // 删除购物车某商品
    handleDelete(evt){
        // console.log(evt);
        if(evt.detail.index == 2){
            // console.log('delete');
            wx.showModal({
              title: '确定要删除么',
              content: '删除之后不可以恢复',
              confirmColor:'#576B95',
              complete: (res) => {
                if (res.cancel) {
                    wx.showToast({
                        title: '买买买',
                      })
                }
                if (res.confirm) {
                    request({
                        url:`/carts/${evt.currentTarget.dataset.cartsid}`,
                        method:'delete'
                    }).then( res => {
                        wx.showToast({
                          title: '主人太狠心了',
                        })
                    }).then( res => {
                       this.change();
                       this.total();
                    })
                }
              }
            })
        }   
    },
    // 渲染购物车商品
    getShopData(){
        authMsg( () => {
            this.change();
            var {nickName} = wx.getStorageSync('token');
            var tel = wx.getStorageSync('tel');
            request({
                url:`/carts?username=${nickName}&tel=${tel}&checked=true`
            }).then(res => {
                if(res.data.length == this.data.shopLen){
                    this.setData({
                        allFlag:true
                    })
                }
                this.total();
            })
        })
    },
    // 点击-号减少购物车数量
    handleMinus(e){
        request({
            url:`/carts/${e.currentTarget.dataset.cartsid}`
        }).then( res => {
            // console.log(res);
            if(res.data.number > 1){
                request({
                    url:`/carts/${e.currentTarget.dataset.cartsid}`,
                    method:'put',
                    data:{
                        ...res.data,
                        number:--res.data.number
                    }
                })
            }else{
                request({
                    url:`/carts/${e.currentTarget.dataset.cartsid}`,
                    method:'put',
                    data:{
                        ...res.data,
                        number:1
                    }
                })
            }
        }).then( res => {
            this.change();
            this.total();
        })
    },
    // 点击+号增加购物车数量
    handlePlus(e){
        request({
            url:`/carts/${e.currentTarget.dataset.cartsid}`
        }).then( res => {
            request({
                url:`/carts/${e.currentTarget.dataset.cartsid}`,
                method:'put',
                data:{
                    ...res.data,
                    number:++res.data.number
                }
            })
        }).then( res => {
            this.change();
            this.total();
        })
    },
    // 通过表单输入商品数量
    handleNumber(e){
        request({
            url:`/carts/${e.currentTarget.dataset.cartsid}`
        }).then( res => {
            request({
                url:`/carts/${e.currentTarget.dataset.cartsid}`,
                method:'put',
                data:{
                    ...res.data,
                    number:e.detail.value
                }
            })
        }).then( res => {
            this.change();
            this.total();
        })
    },
    // 单个商品是否被选中
    isChecked(e){
        request({
            url:`/carts/${e.currentTarget.dataset.cartsid}`
        }).then( res => {
            request({
                url:`/carts/${e.currentTarget.dataset.cartsid}`,
                method:'put',
                data:{
                    ...res.data,
                    checked:!res.data.checked
                }
            })
        }).then( res => {
            this.change();
            var {nickName} = wx.getStorageSync('token');
            var tel = wx.getStorageSync('tel');
            request({
                url:`/carts?username=${nickName}&tel=${tel}&checked=true`
            }).then(res => {
                // console.log(res.data);
                if(res.data.length == this.data.shopLen){
                    this.setData({
                        allFlag:true
                    })
                }else{
                    this.setData({
                        allFlag:false
                    })
                }
            })
            this.total();
        })
       
    },
    // 点击全选按钮
    handleAllChecked(e){
        this.setData({
            allFlag:!this.data.allFlag
        })
        var {nickName} = wx.getStorageSync('token');
        var tel = wx.getStorageSync('tel');
        request({
            url:`/carts?username=${nickName}&tel=${tel}&_expand=good`
        }).then( res => {
            for(let i = 0; i < res.data.length; i++){
                request({
                    url:`/carts/${res.data[i].id}`,
                    method:'put',
                    data:{
                        username: res.data[i].username,
                        tel: res.data[i].tel,
                        goodId: res.data[i].goodId,
                        number: res.data[i].number,
                        checked:this.data.allFlag
                    }
                })
            }
        }).then( res => {
            this.change();
            this.total();
        })
    },
    // 计算总价与总数
    total(){
        var {nickName} = wx.getStorageSync('token');
        var tel = wx.getStorageSync('tel');
        request({
            url:`/carts?username=${nickName}&tel=${tel}&checked=true&_expand=good`
        }).then(res => {
            // console.log(res.data);
            let nums = 0;
            let moneys = 0;
            for(let i = 0; i < res.data.length; i++){
                nums += res.data[i].number,
                moneys += res.data[i].number * res.data[i].good.price
            }
            this.setData({
                allNum:nums,
                allMoney:moneys
            })
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getShopData();
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
        this.getShopData();
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