// components/tabA/tabA.js
Component({

    /**
     * 组件的属性列表
     */
    properties: {
        active:{
            type:Boolean
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        
    },

    /**
     * 组件的方法列表
     */
    methods: {
        showClick(){
            this.triggerEvent('eventclick',false)
        },
        hideClick(){
            this.triggerEvent('eventclick',true)
        }
    }
})