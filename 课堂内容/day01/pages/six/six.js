// pages/six/six.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        dataList:[
            {id:0,name:'华为meta60Pro',price:6999.23,num:1,isChecked:false},
            {id:1,name:'华为x5',price:12000.42,num:2,isChecked:false},
            {id:2,name:'苹果15',price:7999.76,num:7,isChecked:false},
            {id:3,name:'红米',price:4999.46,num:5,isChecked:false}
        ],
        allCheck:false,
        inverseCheck:false
    },
    handCheck(evt){
        var index = evt.target.dataset.index;
        this.data.dataList[index].isChecked = !this.data.dataList[index].isChecked;
        this.change();
        
    },
    minus(evt){
        let index = evt.target.dataset.id;
        this.data.dataList[index].num --;
        this.setData({
            dataList:this.data.dataList
        })
    },
    plus(evt){
        let index = evt.target.dataset.id;
        this.data.dataList[index].num ++;
        this.setData({
            dataList:this.data.dataList
        })
    },
    changeVal(evt){
        let index = evt.target.dataset.id;
        this.data.dataList[index].num = evt.detail.value;
        this.setData({
            dataList:this.data.dataList
        })
    },
    allClick(){
        for(let i = 0; i < this.data.dataList.length; i++){
            this.data.dataList[i].isChecked = !this.data.allCheck;
        }
        this.setData({
            allCheck:!this.data.allCheck,
            dataList:this.data.dataList
        })
    },
    inverse(){
        for(let i = 0; i < this.data.dataList.length; i++){
            this.data.dataList[i].isChecked = !this.data.dataList[i].isChecked;
        }
        this.change();
    },
    change(){
        let num = 0;
        for(let i = 0; i < this.data.dataList.length; i++){
            if(this.data.dataList[i].isChecked){
                num++;
            }
        }
        if(num >= this.data.dataList.length){
            this.setData({
                allCheck:true
            })
        }else{
            this.setData({
                allCheck:false
            })
        }
        this.setData({
            dataList:this.data.dataList
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