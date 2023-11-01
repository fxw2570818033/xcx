// components/tabs/tabs.js
Component({

    /**
     * 组件的属性列表
     */
    properties: {
        list:{
            type:Array
        },
        current:{
            type:Number
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        list:['北京','石家庄','太原','祁县'],
        current:0
    },
    /**
     * 组件的方法列表
     */
    methods: {
        handClick(evt){
            let index = evt.target.dataset.index;
            // this.setData({
            //     current:index
            // })   
            this.triggerEvent('eventchange',index);
        }
    }
})