class Promise {
    constructor(executor) {
        this.state = 'pending'
        this.value = undefined
        this.reason = undefined
        this.onfulfilledCallbacks = []
        this.onRejectCallbacks = []

        const resolve = (value) => {
            if(this.state === 'pending') {
                this.state = 'resolved'
                this.value = value
                this.onfulfilledCallbacks.forEach(cb=> cb(value))
            }
        }

        const reject = (reason) => {
            if(this.state === 'pending') {
                this.state = 'rejected'
                this.reason = reason
                this.onRejectCallbacks.forEach(cb=> cb(reason))
            }
        }

        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }


    then(onFulfilled, onRejected) {
        return new Promise((resolve, reject)=> {
            if(this.state === 'fulfilled') {
                setTimeout(()=> {
                    try {
                        const result = onFulfilled(this.value)
                        resolve(result)
                    } catch (error) {
                        reject(error)
                    }
                }, 0)
            }

            if(this.state === 'rejected') {
                setTimeout(()=> {
                    try {
                        const result = onRejected(this.reason)
                        resolve(result)
                    } catch (error) {
                        reject(error)
                    }
                }, 0)
            }

            if(this.state === 'pending') {
                this.onfulfilledCallbacks.push(onFulfilled)
                this.onRejectCallbacks.push(onRejected)
            }
        })
    }
}

const p = new Promise((resolve, reject)=> {
    
})

Promise.myAll = function(proms) {
    return new Promise((resolve, reject)=> {
        let count = 0;
        let finished = 0
        let ret = [];
        for(let item of proms) {
            let index = count
            count ++
            Promise.resolve(item).then(res=> {
                finished ++ 
                ret[index] = res
                if(finished === count) {
                    resolve(ret)
                }
            }).catch(err=> {
                reject(err)
            })
        }
    })
    
}

Promise.myRace = (proms)=> {
    return new Promise((resolve, reject)=> {
        for(let item of proms) {
            Promise.resolve(item).then((res)=> {
                resolve(res)
            }).catch(err=> {
                reject(err)
            })
        }
    })
}

Promise.allSettled = (proms)=> {
    return new Promise((resolve, reject)=> {
        let count = 0;
        let finished = 0
        let result = []
        for(let item of proms) {
            let index = count;
            Promise.resolve(item).then(res=> {
                count++
                finished++
                result[index] = {
                    status: 'fulfilled',
                    value: res
                }
                if(finished === proms.length) {
                    resolve(result)
                }
            }).catch(err=> {
                finished++
                count++
                result[index] = {
                    status: 'rejected',
                    reason: err
                }
                if(finished === proms.length) {
                    resolve(result)
                }
            })
        }
    })
}