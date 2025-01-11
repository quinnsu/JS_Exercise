// 手写instanceof
function myInstanceof(left, right) {
  let proto = left.__proto__; // 取左表达式的__proto__值(指向它的原型)
  let prototype = right.prototype; //构造函数会有一个prototype属性，用这个构造函数创建的实例的__proto__属性会指向这个prototype
  while (true) {
    if (proto === null) return false;
    if (proto === prototype) return true;
    proto = proto.__proto__; //遍历原型链，直到Object.prototype，它的__proto__ === null
  }
}