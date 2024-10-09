// 输入：n = 3, k = 3
// 输出："213"

const getPermutation = (n, k)=> {
    let count = 0;
    const used = {}

    const helper = (temp)=> {
        // 生成了一个排列
        if(temp.length === n) {
            count ++
            if(count === k) {
                return temp.join("")
            }
            return
        }

        for(let i=1;i<=n;i++) {
            if(used[i]) continue
            temp.push(i)
            used[i] = true
            const res = helper(temp)
            temp.pop()
            used[i] = false
            if(res) {
                return res
            }
        }
    }

    return helper([])
}

console.log(getPermutation(3,3))
