// components/hot/hot.js
import {fillText} from '../../utils/common.js';
Component({
    lifetimes:{
       
    },
    /**
     * 组件的属性列表
     */
    properties: {
        flag:{
            type:Boolean,
            value:true,
        },
        hotList:{
            type:Array,
            value:[]
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        hotList:[]
    },

    /**
     * 组件的方法列表
     */
    methods: {
       
    }
})