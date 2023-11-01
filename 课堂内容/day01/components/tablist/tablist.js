// components/tablist/tablist.js
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
        current:0,
        list:['首页','详情','我的']
    },
    /**
     * 组件的方法列表
     */
    methods: {
        handTab(evt){
            var index = evt.target.dataset.index;
            // this.setData({
            //     current:index
            // })
            this.triggerEvent('eventcurrentval',index)
        }
    }
})