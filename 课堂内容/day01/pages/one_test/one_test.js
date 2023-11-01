// pages/one_test/one_test.js
Page({

    /**
     * 页面的初始数据
     */
    /**
     * data里面写的数据   是 状态  
     */
    data: {
        list:['javascript','vue','jquery'],
        val:""
    },
    deleItem(evt){
        //获取触发事件元素身上的属性
        let id = evt.target.dataset.id;
        this.data.list.splice(id,1);
        this.setData({
            list:this.data.list
        })
    },
    editVal(evt){
        // console.log(evt);
        // console.log(evt.detail.value);
        // 输入框中输入的值
        this.setData({
            val:evt.detail.value
        })
    },
    addItem(){
        // input 输入的值
        // console.log(this.data.val);
        // this.setData({
        //     list:[...this.data.list,this.data.val]
        // })
        this.data.list.push(this.data.val);
        var a = this.data.list;
        this.setData({
            list:a,
            val:''
        })
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