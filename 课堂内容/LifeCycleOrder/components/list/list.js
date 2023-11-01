// components/list/list.js
Component({

    /**
     * 组件的属性列表
     */
    properties: {

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

    },
    lifetimes:{
        created(){
            console.log('在组件实例刚刚被创建时执行-------created');
        },
        attached(){
            console.log('在组件实例进入页面节点树时执行----attached');
        }, // 在组件实例进入页面节点树时执行
        ready(){
            console.log('在组件在视图层布局完成后执行---ready');
        },
        moved(){
            console.log('在组件实例被移动到节点树另一个位置时执行----moved');
        },
        detached(){
            console.log('在组件实例被从页面节点树移除时执行----detached');
        }, // 在组件实例被从页面节点树移除时执行
        error(){
            console.log('每当组件方法抛出错误时执行-----error');
        }
    }, 
    // 组件所在页面的生命周期函数
    pageLifetimes:{
        show:function(){
            console.log('show');
        }, // 页面被显示
        hide:function(){
            console.log('hide');
        }, // 页面被隐藏
        resize:function(size){
            console.log('resize');
        } // 页面尺寸变化
    }
})