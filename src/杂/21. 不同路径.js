// 机器人可以向右或向下走，抵达终点有几种路径方式
function uniqPath(m, n) {
    const dp = Array.fill(m).map(v=> Array.fill(n))

    // 第一列可走数都为1
    for(let i=0;i<m;i++) {
        dp[i][0] = 1
    }
    // 第一行可走数都为1
    for(let j=0;j<m;j++) {
        dp[0][j] = 1
    }

    for(let i = 0; i< m;i++) {
        for(let j = 0; j < n; j++) {
            // 第i,j格的可走数为左边可走数加上上边可走数
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }

    // 返回最后终点的可走数
    return dp[m][n]
}

// 机器人可以向右或向下走，途中有障碍物，抵达终点有几种方式
// 如果遇到障碍物则抵达方式为0 + 上方/左方的可走数
function uniqPath2(obstacle) {
    const m = obstacle.length
    const n = obstacle[0].length
    const dp = Array.from({ length: m }, () => Array(n).fill(0))

    for(let i=0;i<m && obstacle[i][0] === 0;i++) {
        dp[i][0] = 1
    }
    for(let j=0;j<n && obstacle[0][j] === 0;j++) {
         dp[0][j] = 1
     }

     for(let i=0;i<m;i++) {
        for(let j=0;j<n;j++) {
            dp[i][j] = obstacle[i][j] === 1 ? 0 : dp[i-1][j] + dp[i][j-1]
        }
     }
     return dp[m,n]
}

// 机器人可以向右或向下走，途中有障碍物
// 在二维网格 grid 上，有 4 种类型的方格：

// 1 表示起始方格。且只有一个起始方格。
// 2 表示结束方格，且只有一个结束方格。
// 0 表示我们可以走过的空方格。
// -1 表示我们无法跨越的障碍。
// 返回在四个方向（上、下、左、右）上行走时，从起始方格到结束方格的不同路径的数目。

// 每一个无障碍方格都要通过一次，但是一条路径中不能重复通过同一个方格。

// 示例 1：

// 输入：[[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
// 输出：2
// 解释：我们有以下两条路径：
// 1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
// 2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)
// 示例 2：

// 输入：[[1,0,0,0],[0,0,0,0],[0,0,0,2]]
// 输出：4
// 解释：我们有以下四条路径： 
// 1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2),(2,3)
// 2. (0,0),(0,1),(1,1),(1,0),(2,0),(2,1),(2,2),(1,2),(0,2),(0,3),(1,3),(2,3)
// 3. (0,0),(1,0),(2,0),(2,1),(2,2),(1,2),(1,1),(0,1),(0,2),(0,3),(1,3),(2,3)
// 4. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2),(2,3)
// 示例 3：

// 输入：[[0,1],[2,0]]
// 输出：0
// 解释：
// 没有一条路能完全穿过每一个空的方格一次。
// 请注意，起始和结束方格可以位于网格中的任意位置。
 

// 提示：

// 1 <= grid.length * grid[0].length <= 20


// 寻找起始点，终点
// 记录空格数，需要走完所有空格

function uniquePath3(grid) {
    let rows = grid.length;
    let cols = grid[0].length;

    let startX, startY, endX, endY

    let count = 0

    for(let i=0;i<rows;i++) {
        for(let j=0;j<cols;j++) {
            if(grid[i][j] === 1) {
                startX = i
                startY = j
            }

            if(grid[i][j] === 2) {
                endX = i
                endY = j
            }

            if(grid[i][j] === 0) {
                count += 1
            }
        }
    }

    function dfs(x, y, remain) {
        // 如果超出边界，或者目标为障碍物
        if(x < 0 || x>=rows || y < 0 || y >= cols || grid[x][y] === -1) {
            return 0
        }

        if(x === endX && y === endY) {
            return remain === 0 ? 1 : 0
        }

        // 记录访问过的
        grid[x][y] = -1

        let totalPath = dfs(x + 1, y, remain - 1) + dfs(x, y+1, remain -1) + dfs(x-1, y, remain-1) + dfs(x, y-1,remain-1)

        grid[x][y] = 0

        return totalPath
    }

    return dfs(startX, startY, count + 1)
}

console.dir(uniquePath3([[1,0,0,0],[0,0,0,0],[0,0,0,2]]))