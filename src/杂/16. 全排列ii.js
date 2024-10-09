// 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

// 输入：nums = [1,1,2]
// 输出：
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]




function full(arr) {
    const result = []
    const used = {}
    const dfs = (temp)=> {
        if(temp.length === arr.length) {
            result.push([...temp])
            return
        }
        for(let i=0;i<arr.length;i++) {
            if(used[i]) continue
            if (i - 1 >= 0 && arr[i - 1] == arr[i] && !used[i - 1]) {
                continue;
            }
            used[i] = true
            temp.push(arr[i])
            dfs(temp)
            used[i] = false
            temp.pop()
        }
    }

    dfs([])

    return result
}

console.log(JSON.stringify(full([1,1,2])))