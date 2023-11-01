import Dep from "./dep";

export default class Observer1{
    constructor(data){
        this.data = data;
        // 遍历对象完成所有数据的劫持
        this.walk(this.data);
    }
    /**
     * 遍历对象
     * @param {*} data 
     */
    walk(data){
        // 递归的退出条件  除非没有数据 或者这个数据不是对象了
        if(!data || typeof data != 'object'){
            return;
        }
        Object.keys(data).forEach( key => {
            this.defineReactive(data,key,data[key])
        })
    }
    /**
     * 动态设置响应式数据
     * @param {*} data 
     * @param {*} key 
     * @param {*} value 
     */
    defineReactive(data,key,value){
        let dep = new Dep();
        Object.defineProperty(data,key,{
            // 可遍历
            enumerable:true,
            // 不可再配置
            configurable:false,
            get:() => {
                Dep.target && dep.addSub(Dep.target);
                return value;
            },
            set: newValue => {
                console.log('set');
                value = newValue;
                // TODO 触发view页面的变化
                dep.notify();
            }
        })
        this.walk(value);
    }
}