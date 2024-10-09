// function flaten(arr) {
//     let result = []
//     for(let item of arr) {
//         if(Array.isArray(item)) {
//             result = [...result, ...flaten(item)]
//         }else {
//             result.push(item)
//         }
//     }
//     return result
// }
// // 1
// [1]
// [1,2]
// [1, 1, 2]

// console.log(flaten())

function flaten(arr,newArr='') {
    let _arr = newArr;
    arr.map(item =>{
        console.log(item,'aa',"原数组",_arr)
        if(Array.isArray(item)) {
            flaten(item,_arr)
        }else {
            _arr =_arr +item+","
            console.log("shuru--",_arr)
        }
    })
    console.log(_arr,'--')
}
flaten([1,[2,3], [[4,5,6]]]);

