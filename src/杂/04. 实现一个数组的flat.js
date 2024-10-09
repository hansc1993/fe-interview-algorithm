const arr = [1, [2, 3, [4, 5]], 1, 2, [6, 7]]

function flat(data, depth) {
    let res = []
    depth --
    data.forEach(v=> {
        if(Array.isArray(v) && (depth >= 0)) {
            res = res.concat(flat(v, depth))
        }else {
            res.push(v)
        }
    })
    return res
}

console.dir(flat(arr, 2))