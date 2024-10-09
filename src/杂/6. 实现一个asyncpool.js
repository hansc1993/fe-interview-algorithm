// 模拟异步任务的函数
function mockTask(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Task finished in ${time} ms`);
            resolve(time);
        }, time);
    });
}

// 示例任务列表，每个任务为一个异步函数
const tasks = [1000, 2000, 3000, 4000, 500].map(time => () => mockTask(time));

// 使用 asyncPool 执行这些任务，设置并发数为 2
asyncPool(2, tasks, task => task()).then(results => {
    console.log('All tasks completed:', results);
});

async function asyncPool(limit, tasks, taskHandler) {
    const result = []
    const executing = []
    for(let task of tasks) {
        // 先循环执行，把p推到result,也推到executing，当executing到达并发数限制后，阻塞，等待race，然后执行p的回调

        // 把taskHandler放到微任务队列中，确保不阻塞主线程执行
        const p = Promise.resolve().then(()=> taskHandler(task))
        result.push(p)
        const e = p.then(()=> {
            // 这行代码先不执行，继续往下，待异步执行完成后，回调这个函数
            executing.splice(executing.indexOf(e), 1)
        })
        executing.push(e)
        if(executing.length >= limit) {
            await Promise.race(executing)
        }
    }
    return Promise.all(result)
}