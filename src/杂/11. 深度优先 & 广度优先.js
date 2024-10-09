class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  
    addChild(child) {
      this.children.push(child);
    }
}

// 创建节点
const nodeA = new TreeNode('A');
const nodeB = new TreeNode('B');
const nodeC = new TreeNode('C');
const nodeD = new TreeNode('D');
const nodeE = new TreeNode('E');
const nodeF = new TreeNode('F');

// 构建树结构
nodeA.addChild(nodeB);
nodeA.addChild(nodeC);
nodeB.addChild(nodeD);
nodeB.addChild(nodeE);
nodeC.addChild(nodeF);



// 深度优先
function depthFirstSearch(root) {
    let stack = [root];
    while (stack.length > 0) {
        debugger
        const currentNode = stack.pop()
        console.log(currentNode.value)
        if(currentNode.children) {
            for(let i= currentNode.children.length - 1;i>=0;i--) {
                stack.push(currentNode.children[i])
            }
        }
    }
}

console.log("DFS Traversal:");
depthFirstSearch(nodeA);


// 广度优先
function breadthFirstSearch(root) {
    let queue = [root]
    while(queue.length > 0) {
        const currentNode = queue.shift()
        if(currentNode.children) {
            for(const children of currentNode.children) {
                queue.push(children)
            }
        }
    }
}
