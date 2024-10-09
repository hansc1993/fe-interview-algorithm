// 防抖，一定时间内多次触发只执行一次
function debounce(fn, wait) {
    let timer
    return (...args)=> {
        if(timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(()=> {
            fn(...args)
        }, wait)
    }
}

// 节流，在一个时间段内 只执行一次
function throttle(fn, wait) {
    let last = 0
    return (...args)=> {
        let now = new Date()
        if(now - last >= wait) {
            last = now
            fn(...args)
        }
    }
}
