### 课程简介
#### 前端框架发展
#### 现代前端框架
#### 开发模式的改变
#### 课程简单介绍
### 课程简介-目标
```js
    <div id="app">
        <p>{{price}}元</p>
        <p v-text="msg"></p>
        <button @click="addHandle">add</button>
    </div>
    var vm = new Vue({
        el:'#app',
        data:{
            price:100,
            msg:'hello world'
        },
        methods:{
            addHandle:function(){
                this.price++;
            }
        }
    })
```
### MVVM概述
#### 介绍 MVVM 依次对应的就是Model View ViewModel
+ 降低数据和页面的耦合
### 核心要素/模块
#### 响应式
    + 数据双向绑定 --- 数据劫持Object.defineProperty(obj,prop,{})
    + 观察者模式或者订阅者模式
#### 模板解析
    + vue1.x的模板引擎 今天参照了1.x的原理
    + vue2.x的模板引擎，增加了虚拟DOM 算法
#### 虚拟DOM 
    + 之后讲

#### 完整流程
![image-20230918195008880](C:\Users\86155\AppData\Roaming\Typora\typora-user-images\image-20230918195008880.png)
#### 核心代码实现
+ 创建项目
+ 框架壳子-vue.js
+ Observer模块
+ vue.js中，data和methods的代理
+ Complier模块
    + 插值表达式计算
+ Watcher模块
+ Dep模块