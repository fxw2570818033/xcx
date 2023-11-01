export default function authMsg(callback){
    // 判断是否存在tel的缓存 
    if( wx.getStorageSync("tel")){
        // 如果有 就执行回调函数callback
        // console.log('业务逻辑处理...');
        callback && callback();
    }else{
        // 如果没有 tel 权限
        // 判断当前是否有token的权限
        if(wx.getStorageSync("token")){
            // 有token的权限  直接跳转到注册手机号码的页面
            wx.navigateTo({
                url:'/pages/register/register'
            })
        }else{
            // 如果没有token的权限  就让它跳转到获取token权限的页面
            wx.navigateTo({
                url:'/pages/auth/auth'
            })
        }   
    }
}