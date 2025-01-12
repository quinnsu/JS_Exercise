// T8 函数柯里化
// 柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术
function curry(fn, ...args1) {
    // 参数数量够了就执行
    if (args1.length >= fn.length) {
        return fn(...args1) 
    } else {// 参数数量不够就继续curry
        return (...args2) => curry(fn, ...args1, ...args2)
    }
}

// 详细解释
function add(a, b, c) { return a + b + c; }
console.log(add.length); // 输出 3 所以，函数的lenfth是他的形参个数

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // 输出 6
console.log(curriedAdd(1, 2)(3)); // 输出 6
console.log(curriedAdd(1)(2, 3)); // 输出 6
console.log(curriedAdd(1, 2, 3)); // 输出 6