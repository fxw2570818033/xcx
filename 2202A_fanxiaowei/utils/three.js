function deepClone(arr,target){
    for(let key in arr){
        if(arr[key] instanceof Array){
            target[key] = [];
            deepClone(arr[key],target[key]);
        }else if(arr[key] instanceof Object){
            target[key] = {};
            deepClone(arr[key],target[key]);
        }else{
            target[key] = arr[key];
        }
    }
    return target;
}
function getHumpName(str){
    str = str.split('_');
    var newStr = str[0];
    for(var i = 1; i< str.length; i++){
        newStr += str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return newStr;
}
export {
    deepClone,getHumpName
}