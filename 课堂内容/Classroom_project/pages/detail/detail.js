// pages/detail/detail.js
import request from "../../utils/request";
import authMsg from "../../utils/auth"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        detailList:{},
        current:0,
        userMsgList:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // console.log(wx.getStorageSync('token'));
        // console.log(options);
        let id = options.id;
        let titles = options.title;
        // 动态设置导航标头
        wx.setNavigationBarTitle({
          title:titles,
        })
        this.getData(id);
    },
    getData(id){
        request({
            url:'/goods/' + id,
        }).then(res => {
            // console.log(res.data);
            this.setData({
                detailList:res.data
            })
        })
    },
    // 点击图片进行预览 可以保存图片到相册或者可以转发图片
    handlePreview(evt){
        // console.log(evt);
        let current = evt.currentTarget.dataset.current;
        // 在新页面中全屏预览图片。预览的过程中用户可以进行保存图片、发送给朋友等操作。
        wx.previewImage({
            current:current, //当前显示图片的http链接
            urls:this.data.detailList.slides.map(item => {
                return `http://localhost:3000${item}`
            }), // 需要预览的图片http链接列表
        })
    },
    // 切换商品详情 和 用户评价
    handleToggle(evt){
        let id = evt.target.dataset.id;
        this.setData({
            current:id
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        this.getUserMag();
    },
    // 获取用户评价信息
    getUserMag(){
        request({
            url:'/comments',
            method:'GET'
        }).then( res => {
            // console.log(res.data);
            this.setData({
                userMsgList:res.data
            })
        })
    },
    // 点击加入购物车
    handleAdd(){
        // wx.setStorageSync('token',123);
        // wx.setStorageSync('tel',123);
        authMsg(() => {
            let {nickName} = wx.getStorageSync('token');
            let tel = wx.getStorageSync('tel');
            let goodId = this.data.detailList.id;
            // 当点击加入购物车时 判断当前商品是否之前已经加入过购物车
            // 如果没有加入过 那就生成这个商品的一条数据
            // 如果已经加入过 那就只需要在数量上+1即可
            request({ // 查询该用户 是否添加过 当前商品
                url:`/carts`,
                data:{
                    username:nickName,
                    tel,
                    goodId
                }
            }).then( res => {
                // console.log(res.data);
                if(!res.data.length){
                    // res如果返回为空 就证明之前没有添加过该商品
                    return request({
                        url:'/carts',
                        method:'post', //json-server中想要存数据 必须使用post
                        data:{
                            "username":nickName,
                            "tel": tel,
                            "goodId": goodId,
                            "number": 1,
                            "checked": false
                        }
                    })
                }else{
                    // res长度如果不为空 证明已经添加过 更新number字段即可
                    return request({
                        url:`/carts/${res.data[0].id}`,
                        method:'PUT',
                        data:{
                            ...res.data[0],
                            number:res.data[0].number + 1
                        }
                    })
                }
            }).then( res => {
                wx.showToast({
                  title: '已成功添加购物车',
                })
                wx.switchTab({
                    url:'/pages/shopCar/shopCar'
                })
            })
        });
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