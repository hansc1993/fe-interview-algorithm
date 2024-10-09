// 示例函数
function add(a, b, c) {
    return a + b + c;
}


function curry(fn, ...args) {
    if (args.length >= fn.length) {
        return fn(...args);
    }else {
        return (..._args)=> {
            return curry(fn, ...args, ..._args)
        }
    }
}

// 使用柯里化函数
const curriedAdd = curry(add);

// 调用示例
console.log(curriedAdd(1)(2)(3)); // 输出: 6
console.log(curriedAdd(1, 2)(3)); // 输出: 6
console.log(curriedAdd(1, 2, 3)); // 输出: 6

