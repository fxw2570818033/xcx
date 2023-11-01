// pages/movie/movie.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list:['首页','榜单','热点','商城'],
        barFlag:false,
        navList:['热映','影院','待映','经典电影'],
        navIndex:0,
        hotList:[],
        queryAddress:'北京',
        queryNum:1,
        movieIds:null,
        movieId:'',
        queryIndex:12,
        isloading:false,
        cinemaList:[],
        labelList:[],
        offset:0,
        cinemaTotal:0
    },
    barShow(){
        this.setData({
            barFlag:!this.data.barFlag
        })
    },
    navActive(evt){
        this.setData({
            navIndex:evt.target.dataset.index
        })
    },
    startAjax(){
        wx.request({
            url:'https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json',
            method:'GET',
            success: res => {
                // console.log(res);
                this.setData({
                    hotList:res.data.data.hot
                })
            },
            fail: err => {
                console.log(err);
            }
        })
    },
    firstAjax(){
        wx.request({
            url:'https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?',
            method:'GET',
            data:{
                ct:this.data.queryAddress,
                ci:this.data.queryNum,
                channelId:4
            },
            success: res => {
                // console.log(res);
                this.setData({
                   movieIds:res.data.data.movieIds
               })
            },
            fail: err => {
                console.log(err);
            }
        })
    },
    againAjax(){
        this.setData({
            isloading:true
        })
        wx.showLoading({
            "title":'数据加载中。。。'
        })
        var str = '';
        for(var i = this.data.queryIndex ; i < this.data.queryIndex + 10; i++){
            str +=  this.data.movieIds[i] + ','
        }
        this.setData({
            movieId:str.slice(0,str.length-1)
        })
        if(this.data.queryIndex >= this.data.movieIds.length) {
            this.setData({
                queryIndex:this.data.queryIndex,
                movieId:null
            })
            wx.hideLoading();
            return
        } 
        wx.request({
            url:'https://i.maoyan.com/ajax/moreComingList?',
            method:'GET',
            data:{
                token:'',
                movieIds:this.data.movieId,
                optimus_uuid:'9070E7B0575111EEA63F6B02896CD5054620AF966F114BDD9954053F1D39E108',
                optimus_risk_level:71,
                optimus_code:10
            },
            success: res => {
                // console.log(res);
                this.setData({
                    hotList:[...this.data.hotList,...res.data.coming]
                })
            },
            fail: err => {
                console.log(err);
            },
            complete: () => {
                this.setData({
                    isloading:false
                }) 
                wx.hideLoading();
            }
        })
        
        this.setData({
            queryIndex:this.data.queryIndex + 10
        })
        // console.log(this.data.queryIndex);
    },
    firstCinema(){
        wx.request({
            url:'https://i.maoyan.com/ajax/moreCinemas?',
            method:'GET',
            data:{
                movieId:0,
                day:'2023-10-08',
                offset:0,
                limit:20,
                districtId:-1,
                lineId:-1,
                hallType:-1,
                brannId:-1,
                serviceId:-1,
                areaId:-1,
                stationId:-1,
                item:'',
                updateShowDay:true,
                reqId:1695861415864,
                cityId:1,
                optimus_uuid:'9070E7B0575111EEA63F6B02896CD5054620AF966F114BDD9954053F1D39E108',
                optimus_risk_level:71,
                optimus_code:10
            },
            success: res => {
                console.log(res);
                this.setData({
                    cinemaList:res.data.cinemas.cinemas,
                    labelList:res.data.cinemas.cinemas,
                    cinemaTotal:res.data.cinemas.paging.total
                })
                console.log(this.data.cinemaList);
            },
            fail: err => {
                console.log(err);
            },
            complete: msg => {
                console.log(msg);
            }
        })
    },
    againCinema(){
        wx.request({
            url:'https://i.maoyan.com/ajax/moreCinemas?',
            method:'GET',
            data:{
                movieId:0,
                day:'2023-10-08',
                offset:this.data.offset + 20,
                limit:20,
                districtId:-1,
                lineId:-1,
                hallType:-1,
                brannId:-1,
                serviceId:-1,
                areaId:-1,
                stationId:-1,
                item:'',
                updateShowDay:true,
                reqId:1695861415864,
                cityId:1,
                optimus_uuid:'9070E7B0575111EEA63F6B02896CD5054620AF966F114BDD9954053F1D39E108',
                optimus_risk_level:71,
                optimus_code:10
            },
            success: res => {
                console.log(res);
                this.setData({
                    cinemaList:[...this.data.cinemaList,...res.data.cinemas.cinemas],
                    labelList:[...this.data.labelList,...res.data.cinemas.cinemas]
                })
                console.log(this.data.cinemaList);
            },
            fail: err => {
                console.log(err);
            },
            complete: msg => {
                console.log(msg);
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.startAjax();
        this.firstAjax();
        this.firstCinema();
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
        this.setData({
            hotList:[],
            queryIndex:12,
            movieId:null
        })
        this.startAjax();
        this.firstAjax();
        wx.stopPullDownRefresh();
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        if(this.data.isloading) return
        this.againAjax();
        if(this.data.offset >= this.data.cinemaTotal - 20) return
        this.setData({
            offset:this.data.offset + 20
        })
        this.againCinema();
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})