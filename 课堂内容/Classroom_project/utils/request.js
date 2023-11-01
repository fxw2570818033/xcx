export default function  request(params){
    return new Promise((resolve,reject) => {
        wx.request({
            ...params,
            url:'http://localhost:8099' + params.url,
            success(res){
                resolve(res);
            },
            fail(err){
                reject(err);
            }
        })
    })
}