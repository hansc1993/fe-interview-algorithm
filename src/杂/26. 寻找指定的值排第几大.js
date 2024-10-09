
// 实现一个[8, 2, 5, 9, 20, 6, 66], 寻找其中30 排第几

// 方法一
// function findRank(arr, target) {
//     const sortArr = arr.sort((a,b)=> a - b)
    
//     return sortArr.indexOf(target)
// }

// 方法二
function findRank(arr, target) {
    let rank = 0

    for(let item of arr) {
        if(item < target) {
            rank ++
        }
    }
    return rank
}


console.log(findRank([9,2,5,9, 30,20,6,66], 30))