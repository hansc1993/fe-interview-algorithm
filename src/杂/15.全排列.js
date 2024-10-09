// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

function full(arr) {
    const result = []
    const used = {}

    const dfs = (temp)=> {
        if(temp.length === arr.length) {
            result.push([...temp])
        }
        for(let item of arr) {
            if(used[item]) continue
            temp.push(item)
            used[item] = true
            dfs(temp)
            temp.pop()
            used[item] = false
        }
    }

    dfs([])

    return result
}

console.log(JSON.stringify(full([1,2,3])))