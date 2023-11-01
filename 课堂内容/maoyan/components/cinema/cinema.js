// components/cinema/cinema.js
Component({

    /**
     * 组件的属性列表
     */
    properties: {
        flag:{
            type:Boolean,
            value:false,
        },
        cinemaList:{
            type:Array,
            value:[]
        },
        labelList:{
            type:Array,
            value:[]
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        tabList:['全城','品牌','特色'],
        cinemaList:[],
        labelList:[],
        ind:0
    },

    /**
     * 组件的方法列表
     */
    methods: {

    },
    pageLifetimes: {
        // 组件所在页面的生命周期函数
        show: function () { 
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
                        labelList:res.data.cinemas.cinemas
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
        hide: function () { 

        },
        resize: function () { 

        },
    }
})