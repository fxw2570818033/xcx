export default function fillText(data){
    var arr = [];
    var arr1 = [];
    var arr2 = [];
    for(var i = 0; i < data.length; i++){
        if(data[i].scoreLabel != "暂无评分"){
            arr1.push(data[i]);
        }else{
            arr2.push(data[i]);
        }
    }
    arr1.sort(function(a,b){
        return b.sc-a.sc
    })
    arr = arr.concat(arr1,arr2);
    for(var j = 0; j < arr.length ;j++){
        if(arr[j].scoreLabel != "暂无评分"){
            arr[j].scwish = '观众评分 ' + arr[j].sc;
        }else{
            arr[j].scwish = arr[j].wish + ' 人想看';
        }
    }
    return arr;
}