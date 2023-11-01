
import Complier from './compiler.js';
import Observer from './observer.js';

class Vue{
    constructor(options){
        // console.log(options);
        // 获取元素dom对象
        this.$el = document.querySelector(options.el);
        // 转存数据
        this.$data = options.data || {};

        // 数据 和 函数代理
        this._proxyData(this.$data)
        this._proxyMthods(options.methods);

        // 数据劫持
        new Observer(this.$data);
        // // 模板编译
        new Complier(this);
    }
    /**
     * 数据的代理
     * @param {*} data 
     */
    _proxyData(data){
        Object.keys(data).forEach(key => {
            Object.defineProperty(this,key,{
                set(newValue){
                    data[key] = newValue;
                },
                get(){
                    return data[key];
                }
            })
        })
    }
    /**
     * 函数的代理
     */
    _proxyMthods(methods){
        if(methods && typeof methods === 'object'){
            Object.keys(methods).forEach(key => {
                this[key] = methods[key];
            })
        }
    }
}
window.Vue = Vue;