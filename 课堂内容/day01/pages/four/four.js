// pages/four/four.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        dataList:''
    },
    getlower(){
        console.log('到最右边了，需要发送请求');
    },
    /**
     * 微信请求和之前的请求不一样
     * 最主要的区别 不涉及跨域问题
     * 协议必须是 https 需要在
     * 需要在小程序后台配置合法域名
     * 后台---开发---开发管理---开发设置---服务器域名---填写对应的域名---小程序详情---项目配置---域名信息---合法列表
     */
    getData(){
        var that = this;
        wx.request({
            url:'https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4',
            method:'get',
            data:'',
            success(res){
                // console.log(res,res.data.data.hot);
                that.setData({
                    dataList:res.data.data.hot
                })
            },
            fail(err){
                // console.log(err);
            }
        })
    },
    tranferItem(evt){
        var opt = evt.target.dataset.item;
        var obj = {
            name:opt.videoName,
            type:opt.cat,
            time:opt.comingTitle,
            desc:opt.desc
        }
        wx.navigateTo({
            url:'/pages/eleven/eleven?opt=' + JSON.stringify(obj)
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getData();
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