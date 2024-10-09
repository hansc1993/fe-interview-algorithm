// 问题描述：

// 一个机器人需要从二维地图的左上角移动到右下角。在这个地图中，有 0 和 1。0 表示机器人可以通过，1 表示墙壁。机器人可以在最多拆除 k 个墙壁的情况下，从起点到达终点。机器人只能上下左右移动。

// 现在要求输出机器人可以从起点到终点的不同路径的总数。

// 示例 1:

// 输入：grid = [[0, 1, 0], [0, 1, 0]], k = 0

// 输出：0

// 解释：由于 k == 0，机器人无法拆除任何墙壁，因此不能到达终点，没有路径。

// 示例 2:

// 输入：grid = [[0, 1, 0], [0, 1, 0]], k = 1

// 输出：1

// 解释：机器人可以拆除墙壁 (0, 1) 或 (1, 1)，但只存在一种路径到达终点。

// 示例 3:

// 输入：grid = [[0, 1, 0, 0, 0], [0, 1, 0, 1, 0], [0, 1, 0, 1, 0], [0, 1, 0, 1, 0], [0, 0, 0, 1, 0]], k = 0

// 输出：1

// 解释：机器人可以先向下，再向上，然后继续向下到达终点，有且仅有一条路径到达终点。

// 思路

// 为了解决这个问题，可以使用回溯（递归+剪枝）或动态规划+广度优先搜索（BFS）结合的方法。

function robotPath(grid, k) {
    const rows = grid.length
    const cols = grid[0].length

    const queue = [[0, 0, k]]

    const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]]

    const visited = new Map()

    visited.set(`0,0`, k)

    const pathCount = 0

    while(queue.length > 0) {

        const [x, y, k] = queue.shift()

        if(x === rows -1 && y === cols - 1) {
            pathCount++
        }

        for(let [dx, dy] of direction) {
            const nx = x + dx
            const ny = y + dy
            const newK = k

            if(nx < 0 || nx > rows || ny < 0 || ny > rows || (grid[nx, ny] === 1 && k === 0)) {
                continue
            }

            if(grid[nx, ny] === 1) {
                newk--
            }
            
            if(newk >= 0 && !visited.has(`${nx},${ny}`)) {
                visited.set(`${nx},${ny}`, newK)
                queue.push([nx, ny, newK])
            }
        }
    }
    return pathCount
}