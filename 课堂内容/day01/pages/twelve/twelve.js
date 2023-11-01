// pages/twelve/twelve.js
const citySelector = requirePlugin('citySelector');
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    getCity(){
        const key = '7TCBZ-4DCC7-ZYGXM-PMGSY-76KNV-SIF6E'; // 使用在腾讯位置服务申请的key
        const referer = 'demo'; // 调用插件的app的名称
        const hotCitys = '北京'; // 用户自定义的的热门城市
        
        wx.navigateTo({
          url: `plugin://citySelector/index?key=${key}&referer=${referer}&hotCitys=${hotCitys}`,
        });
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
        const selectedCity = citySelector.getCity(); // 选择城市后返回城市信息对象，若未选择返回null
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
        // 页面卸载时清空插件数据，防止再次进入页面，getCity返回的是上次的结果
        citySelector.clearCity();
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