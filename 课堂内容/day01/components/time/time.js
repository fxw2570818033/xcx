// components/time/time.js
Component({
    lifetimes:{
        // 当前组件的节点渲染完成时执行
        attached(){
            this.getTime();
        },
        // 当父页面销毁子组件是 会执行
        detached(){
            clearInterval(this.data.timer);
        }
    },
    /**
     * 组件的属性列表
     */
    properties: {
        
    },

    /**
     * 组件的初始数据
     */
    data: {
        time:10,
        timer:null
    },

    /**
     * 组件的方法列表
     */
    methods: {
        getTime(){
            this.data.timer = setInterval(() => {
                if(this.data.time <= 1){
                    this.triggerEvent('eventOver',0);
                }
                this.setData({
                    time:--this.data.time
                })
            },1000)
        }
    }
})