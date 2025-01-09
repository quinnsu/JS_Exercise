// Promise.all
// Promise.all() takes an array of promises and returns a single promise.
// This promise will resolve when all of the promises in the array have resolved.
// If any of the promises in the array are rejected, the promise returned by Promise.all() will be rejected.
// 返回的是一个promise对象
function PromiseAll(promiseArr){
    return new Promise((resolve,reject) => {
        // 判断传入的参数是否是一个数组
        if(!Array.isArray(promiseArr)){
            throw new Error(" Promise.all() must be called with an array");
        }
        const results = [];
        let counter = 0;
        for (let i = 0; i < promiseArr.length;i++){
            // 把每个数组元素都转换成promise对象
            // Promise.resolve()对于一个普通的值，会返回一个成功状态的promise对象；但对于promise对象不会做任何处理
            Promise.resolve(promiseArr[i])
             .then ((result) =>{
                // 不能用push，因为不能保证数组元素的顺序
                results[i] = result;
                counter++;
                if( counter == promiseArr.length){
                    resolve(results);
                }
             })
             .catch((e) =>{reject(e)})
        }
    })
}