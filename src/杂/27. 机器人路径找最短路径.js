// m*n的格子，机器人走格子，图中有障碍物，寻找走到终点的最短路径

function findShortPath(grid, start, end) {
    const rows = grid.length;
    const cols = grid[0].length;

    // 起点坐标，start,end, 步数0
    const queue = [start, end, 0]
    const visited = new Map()

    const direction = [[0, 1], [1, 0], [-1, 0], [0, -1]]
    visited.set(`${start}.${end}`, 1)

    while(queue.length) {
        const [x, y, step] = queue.shift()

        for(let [dx, dy] of direction) {
            let nx = x + dx
            let ny = y + dy

            // 抵达终点
            if(nx === rows && ny === cols) {
                return step
            }

            if(nx >=0 && nx <rows && ny >=0 && ny <cols && grid[nx][ny] === 0 && !visited.has(`${nx}.${ny}`)) {
                visited.set(`${nx}.${ny}`, 1)
                queue.push([nx, ny, step + 1])
            }
        }
    }
    return -1
}