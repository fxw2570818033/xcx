// components/ready/ready.js
Component({

    /**
     * 组件的属性列表
     */
    properties: {
        flag:{
            type:Boolean,
            value:false
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        expect:null
    },

    /**
     * 组件的方法列表
     */
    methods: {

    },
    pageLifetimes:{
        // 页面被显示
        show:function(){
            wx.request({
                url:'https://i.maoyan.com/ajax/mostExpected?',
                method:'GET',
                data:{
                    limit:10,
                    offset:0,
                    token:'',
                    optimus_uuid:'9070E7B0575111EEA63F6B02896CD5054620AF966F114BDD9954053F1D39E108',
                    optimus_risk_level:71,
                    optimus_code:10
                },
                success: res => {
                    console.log(res);
                    this.setData({
                        expect:res.data.coming
                    })
                    console.log(this.data.expect);
                },
                fail: err => {
                    console.log(err);
                },
                complete: msg => {
                    console.log(msg);
                }
            })
        }, 
        // 页面被隐藏
        hide:function(){}, 
        // 页面尺寸变化
        resize:function(size){} 
    }
})