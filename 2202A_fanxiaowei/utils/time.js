export default function time(){
    var day =  new Date().getDate();
    if(day >=18){
        day = day + 1;
    }
    var target = new Date("2023/10/"+day+" 18:00:00");
    var date = new Date();
    var time = parseInt((target.getTime() - date.getTime())/1000);
    var hour =  getZero(parseInt(time/60/60)%24);
    var minute = getZero(parseInt(time/60)%60);
    var second = getZero(time%60);
    return [hour,minute,second]
}
function getZero(num){
    if(num < 10){
        num = "0" + num;
    }
    return num;
}