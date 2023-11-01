export default function ajax(params){
    // params是一个对象
    // {   
    //     对象中主要传递这三个属性
    //     url,
    //     method,
    //     data
    // }
    return new Promise( (resolve,reject) => {
        wx.request({
            ...params,
            url:"http://localhost:3000" + params.url,
            success(res){
                resolve(res);
            },
            fail(err){
                reject(err)
            }
        })
    })
}