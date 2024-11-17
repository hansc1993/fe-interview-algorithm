// leetcode题号: 面试题 16.19. 水域大小
// 你有一个用于表示一片土地的整数矩阵land，该矩阵中每个点的值代表对应地点的海拔高度。若值为0则表示水域。
// 由垂直、水平或对角连接的水域为池塘。池塘的大小是指相连接的水域的个数。
// 编写一个方法来计算矩阵中所有池塘的大小，返回值需要从小到大排序。

// 示例：
// 输入：
// [
//   [0,2,1,0],
//   [0,1,0,1],
//   [1,1,0,1],
//   [0,1,0,1]
// ]
// 输出： [1,2,4]

function pondSizes(land) {
  let result = [];
  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < land[0].length; j++) {
      if (land[i][j] === 0) {
        result.push(dfs(land, i, j));
      }
    }
  }
  return result.sort((a, b) => a - b);
}

function dfs(grid, i, j) {
  let m = grid.length;
  let n = grid[0].length;
  let count = 0;

  if (i < 0 || i >= m || j < 0 || j >= n) {
    return 0;
  }

  if (grid[i][j] !== 0) {
    return 0;
  }

  grid[i][j] = 1;

  count += dfs(grid, i + 1, j);
  count += dfs(grid, i, j + 1);
  count += dfs(grid, i - 1, j);
  count += dfs(grid, i, j - 1);

  return count;
}

console.log(
  pondSizes([
    [0, 2, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 0, 1],
    [0, 1, 0, 1],
  ])
); // [1, 2, 4]
