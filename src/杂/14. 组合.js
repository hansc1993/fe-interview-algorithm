// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

// 输入：n = 4, k = 2
// 输出：
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

console.log(JSON.stringify(compose(4, 2)))

function compose(n, k) {
    const result = []
    
    const helper = (start, temp)=> {
        if(temp.length === k) {
            result.push([...temp])
            return
        }
        for(let i= start;i<=n;i++) {
            temp.push(i)
            helper(i + 1, temp)
            temp.pop()
        }
    }

    helper(1, [])
    return result
}