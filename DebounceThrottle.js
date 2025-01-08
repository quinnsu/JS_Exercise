// 基础知识：setTimeout的用法
setTimeout('一些代码或者一个函数',1000)
//通常使用setTimeout的时候，第一个参数是一个函数，而不是一个字符串。因为字符串会被eval，这样会影响性能。
setTimeout( function(){ console.log(2);}  ,1000);


//防抖场景： 搜索框输入联想 当用户输入搜索关键字时，不会立即发送请求，而是等待用户输入完成后再发送请求。
//简单来说，防抖函数会推迟函数的执行，直到过了一定时间间隔后，函数被执行。如果在这个时间间隔内再次调用该函数，则重新计时。

// 防抖简化版（无闭包）
let timer;
function debounce(fn,delay){
    clearTimeout(timer); //每次触发事件，都会清除之前的定时器
    timer = setTimeout(function(){ 
        fn(); 
    }, delay);
}

// 使用debounce
function testDebounce() {
    console.log('防抖测试');
}
document.onmousemove = () => { debounce(testDebounce, 1000); };

// 弊端：要使用全局变量timer，不够优雅；无法给testDebounce传递参数

//优化后
function debounce(fn,delay){
    let timer;

    return function(){
        clearTimeout(timer);
        timer = setTimeout( function(){
            //这里不是直接调用fn，而是使用apply调用，这样可以传递参数
            fn.apply(this,args);
        },delay);
    }
}

function testDebounce2(e) {
    console.log('防抖测试',e);
}
document.onmousemove = function(e) {
   debounce(testDebounce2(e), 1000);
}


// 节流场景：页面滚动事件，监听用户滚动页面，每隔一段时间执行一次函数。
function throttle(fn,interval){
    let last = 0;
    return function(){
        let now = Date.now();
        if (now - last >= interval){
            fn.apply(this,arguments);
            last = now;
        }
    }
}

const app = document.getElementById('app')

app.addEventListener(
  'mousemove',
  throttle(() => {
    console.log('hello')
  }, 1000)
)