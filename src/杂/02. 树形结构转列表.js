const data = [
    {
        id: 1,
        text: '节点1',
        parentId: 0,
        children: [
            {
                id: 2,
                text: '节点1_1',
                parentId: 1
            }
        ]
    }
]


function treeToNode(tree) {
    let arr = []
    const dfs = (tree)=> {
        tree.forEach(node=> {
            if(node.children) {
                dfs(node.children)
            }
            arr.push(node)
        })
    }
    dfs(tree)
    return arr
}


console.log(treeToNode(data))