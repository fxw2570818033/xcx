export default function request(options){
    return new Promise( (resolve,reject) => {
        wx.request({
            ...options,
            url:'http://localhost:3000' + options.url,
            success(res){
                resolve(res);
            },
            fail(err){
                reject(err);
            }
            
        })
    })
}