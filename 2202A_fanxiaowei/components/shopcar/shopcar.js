// components/shopcar/shopcar.js
import request from '../../utils/request'
Component({

    /**
     * 组件的属性列表
     */
    properties: {
        goods:{
            type:Array,
            value:[]
        }
    },
    lifetimes:{
        attached(){
           this.properties.goods = [];
            request({
                url:'/foods'
            }).then( res => {
                for(var i = 0; i < res.data.length; i++){
                    if(res.data[i].num){
                        this.setData({
                            goods:[...this.data.goods,res.data[i]]
                        })
                    }
                }
            })
        },
    },
    /**
     * 组件的初始数据
     */
    data: {
        goods:[]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleMinus(e){
            console.log(e);
            this.triggerEvent('eventminus',{foodsId:e.currentTarget.dataset.foodsid,categoryId:e.currentTarget.dataset.categoryid});
        },
        handlePlus(e){
            this.triggerEvent('eventplus',{foodsId:e.currentTarget.dataset.foodsid,categoryId:e.currentTarget.dataset.categoryid});
        }
    }
})