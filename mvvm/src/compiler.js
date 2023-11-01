import Watcher from './watcher.js';
export default class Complier{
    constructor(context){
        // console.log(context);
        this.$el = context.$el;
        this.context = context;
        if(this.$el){
            // 把原始的dom转换为文档片段
            this.$fragment = this.nodeToFragment(this.$el);
            // 编译模板
            this.compiler(this.$fragment);
            // 把文档片段添加到页面中
            this.$el.appendChild(this.$fragment);
        }
    }
    /**
     * 把所有的元素转为文档片段
     * @param {*} node 
     */
    nodeToFragment(node){
        let fragment = document.createDocumentFragment();
        if(node.childNodes && node.childNodes.length){
            node.childNodes.forEach(child => {
                // 判断是不是我们需要添加的节点
                // 如果是注释节点或者无用的换行我们是不添加的
                if(!this.igorable(child)){
                    fragment.appendChild(child);
                }
            })
        }
        return fragment;
    }
    /**
     * 忽略那些节点比添加到文档片段
     * @param {*} node 
     */
    igorable(node){
        var reg = /^[\t\n\r]+/;
        return (node.nodeType === 8 || (node.nodeType === 3 && reg.test(node.textContent)));
    }
    /**
     * 模板编译
     * @param {*} node 
     */
    compiler(node){
        if(node.childNodes && node.childNodes.length){
            node.childNodes.forEach(child => {
                if(child.nodeType === 1){
                    // 当nodeTyle为1时，说明是元素节点
                    this.compilerElementNode(child);
                }else if(child.nodeType === 3){
                    // 当nodeTyle为3时，说明是文本节点
                    this.compilerTextNode(child);
                }
            })
        }
    }
    /**
     * 编译元素节点
     * @param {*} node 
     */
    compilerElementNode(node){
        let that = this;
        // todo 完成元素的编译
        // todo 指令等
        let attrs = [...node.attributes];
        attrs.forEach(attr => {
            let {name:attrName,value:attrValue} = attr;
            if(attrName.indexOf('v-') === 0){
                let dirName = attrName.slice(2);
                switch(dirName){
                    case "text":
                        new Watcher(attrValue,this.context,newValue => {
                            node.textContent = newValue;
                        })
                        break;
                    case "model":
                        new Watcher(attrValue,this.context,newValue => {
                            node.value = newValue
                        })
                        node.addEventListener("input", e => {
                            that.context[attrValue] = e.target.value;
                        })
                        break
                }
            }
            if(attrName.indexOf('@') === 0){
                this.compilerMethods(this.context,node,attrName,attrValue)
            }
        })
        this.compiler(node);
    }
    /**
     * 函数编译
     * @param {*} scope 
     * @param {*} node 
     * @param {*} sttrName 
     * @param {*} attrValue 
     */
    compilerMethods(scope,node,attrName,attrValue){
        // 获取类型
        let type = attrName.slice(1);
        let fn = scope[attrValue];
        node.addEventListener(type,fn.bind(scope));
    }
    /**
     * 编译文本节点
     * @param {*} node 
     */
    compilerTextNode(node){
        let text = node.textContent.trim();
        if(text){
            // 把text字符串，转换为表达式
            let exp = this.parseTextExp(text);
            // 添加订阅者 计算表达式的值
            // 当表达式依赖的数据发生变化时
            // 1. 重新计算表达式的值
            // 2. node.textContent给最新的值
            // 即可完成Model -> View 响应式
            new Watcher(exp,this.context,(newValue) => {
                node.textContent = newValue;
            });
        }
    }
    /**
     * 该函数完成了文本到表达式的转换
     * 111{{msg + '---'}}222
     * "111" + msg + '---' + '222'
     * @param {*} text 
     */
    parseTextExp(text){
        // 撇配插值表达式正则
        let regText = /\{\{(.+?)\}\}/g;
        // 分割插值表达式前后内容
        let pices = text.split(regText);
        console.log(136,pices);
        // 匹配插值表达式
        let matches = text.match(regText);
        console.log(matches);
        // 表达式数组
        let tokens = [];
        pices.forEach(item => {
            if(matches && matches.indexOf("{{" + item + "}}" > -1)){
                tokens.push("("+item+")");
            }else{
                tokens.push("`"+ item + "`");
            }
        })
        return tokens.join('+');
    }   
}