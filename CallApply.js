// 手写实现call和apply

// 给context加一个属性，属性值是当前函数，然后调用这个属性，最后删除这个属性
Function.prototype.myCall = function (context, ...args) {
    // 如果context是null或者undefined，那么context指向全局对象
    //  globalThis是在nodejs和浏览器中都可以使用的全局对象
    context = (context === null || context === undefined )? globalThis : Object(context)
    const fnk = Symbol() // 生成一个唯一的key
    //Object.defineProperty(context, fnk, { enumerable: false, value: this })
    context[fnk] = this
    const r = context[fnk](...args)
    delete context[fnk]
    return r
}


Function.prototype.myApply = function (context, args) {
    context = context === null || context === undefined ? globalThis : Object(context)
    const fnk = Symbol()
    context[fnk] = this
    const r = context[fnk](...args)
    delete context[fnk]
    return r
}

//test
function test(a, b) {
    console.log(a, b)
    console.log(this)
}
test.myCall({ a: 1 }, 2, 3)