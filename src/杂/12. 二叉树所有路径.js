// 定义二叉树的节点结构
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// 构建示例二叉树
//      1
//     / \
//    2   3
//     \
//      5
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(5);

// 输出：["1->2->5","1->3"]

loop(root)


function loop(root) {
    let result = []
    let cur = ''
    treePath(root, result, cur)
    console.log(result)
    return result
}

function treePath(root, result, cur) {
    // 递归结束
    if(root === null) {
        return
    }
    // 递归到叶子节点
    if(root.left === null && root.right === null) {
        cur += root.val
        result.push(cur)
        return 
    }
    cur += root.val + '->'
    // 二叉树递归
    treePath(root.left, result, cur)
    treePath(root.right, result, cur)
}