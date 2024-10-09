let arr = [
    { id: 1, name: '部门1', pid: 0 },
    { id: 2, name: '部门2', pid: 1 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 4, name: '部门4', pid: 3 },
    { id: 5, name: '部门5', pid: 4 },
    { id: 6, name: '部门6', pid: 0 },
]

function listToTree(data) {
    let tree = []
    data.forEach(item=> {
        let children = arr.filter(v=> v.pid === item.id)
        item.children = children
        if(item.pid === 0) {
            tree.push(item)
        }
    })
    return tree
}

console.log(JSON.stringify(listToTree(arr)))