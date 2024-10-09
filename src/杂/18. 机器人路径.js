// 一个机器人需要从二维地图的左上角移动到右下角。在这个地图中，有 0 和 1。0 表示机器人可以通过，1 表示墙壁。机器人可以在最多拆除 k 个墙壁的情况下，从起点到达终点。

// 注意：机器人只能上下左右移动。

// 示例 1:

// 输入：grid = [[0, 1, 0], [0, 1, 0]], k = 0
// 输出：False
// 解释：由于 k == 0，机器人无法拆除任何墙壁，因此不能到达右下角。

// 示例 2:

// 输入：grid = [[0, 1, 0], [0, 1, 0]], k = 1
// 输出：True
// 解释：机器人可以拆除墙壁 (0, 1) 或 (1, 1)，从而到达终点。

// 示例 3:

// 输入：grid = [[0, 1, 0, 0, 0],  [0, 1, 0, 1, 0], [0, 1, 0, 1, 0], [0, 1, 0, 1, 0], [0, 0, 0, 1, 0]], k = 0
// 输出：True
// 解释：机器人可以先向下，再向上，然后继续向下到达终点。


function robotPath(grid, k) {
    const rows = grid.length;
    const cols = grid[0].length;

    // if start position / end position is wall and cannot demolish more wall
    if((grid[0][0] === 1 || grid[rows - 1][cols - 1] === 1) && k === 0) {
        return false;
    }

    // init a queue with [ start position, end position, demolished number ] 
    const queue = [[0, 0, 0]];

    // robot move direction right, down, left, up
    const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    const visited = new Map();

    visited.set('0,0', 0)

    while(queue.length > 0) {
        const item = queue.shift() || []
        const [x, y, demolished] = item

        // reach target, success
        if (x === rows -1 && y === cols - 1) {
            return true
        }

        for( let [dx, dy] of direction) {
            const nx = dx + x;
            const ny = dy + y

            // new position is in boundaries
            if(nx >= 0 && nx < rows && ny >= 0 && ny < cols) {
                let newDemolished = demolished
                // meet wall demolish number add 1
                if(grid[nx][ny] === 1) {
                    newDemolished = demolished + 1
                }

                let position = `${nx},${ny}`
                // new position can be visited
                if(newDemolished <= k && !visited.has(position)) {
                    console.log(nx, ny)
                    visited.set(position, newDemolished)
                    queue.push([nx, ny, newDemolished])
                }
            }
        }
    }
    return false
}

// Example usage:
// const grid1 = [[0, 1, 0],
//                [0, 1, 0]];
// console.log(robotPath(grid1, 0));  // Output: false

// const grid3 = [
//     [0, 1, 0, 0, 0], 
//     [0, 1, 0, 1, 0],
//     [0, 1, 0, 1, 0],
//     [0, 1, 0, 1, 0],
//     [0, 0, 0, 1, 0]
// ];
// console.log(robotPath(grid3, 0));  // Output: true
