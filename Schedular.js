// T7 限制promise最大并发数
// 实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。
class Schedular {
    constructor() {
        this.tasks = []; // 任务队列
        this.runningTasks = 0;
        this.maxRunningTasks = 2;
    }

    // 
    // add返回一个返回promise的函数
    // task本身是一个promise
    add(task) {
        return new Promise((resolve) => {
            this.tasks.push([task, resolve]);
            this._run();
        });
    }

    _run() {
        // 如果当前正在运行的任务数大于等于最大任务数，或者任务队列为空，则直接返回
        // Q: 那什么时候执行 A: 前面的任务执行完后会调用this._run()
        if (this.runningTasks >= this.maxRunningTasks || !this.tasks.length) return
        this.runningTasks++;
        const [task, resolve] = this.tasks.shift(); 
        // shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
        // task本身是promise
        task.then(() => {
            this.runningTasks--;
            resolve();
            this._run();
        })
    }
}

const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const scheduler = new Schedular();
const addTask = (time, order) => {
    scheduler.add( timeout(time)).then(() => console.log(order))
}

addTask(1000, 1);
addTask(1000, 2);
// 1秒后输出12
addTask(1000, 3);
addTask(1000, 4);
// 再1秒后输出34
