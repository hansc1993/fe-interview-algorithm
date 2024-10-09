// leetcode题号：1052
// 有一个书店老板，他的书店开了 n 分钟。每分钟都有一些顾客进入这家商店。给定一个长度为 n 的整数数组 customers ，其中 customers[i] 是在第 i 分钟开始时进入商店的顾客数量，所有这些顾客在第 i 分钟结束后离开。
// 在某些分钟内，书店老板会生气。 如果书店老板在第 i 分钟生气，那么 grumpy[i] = 1，否则 grumpy[i] = 0。
// 当书店老板生气时，那一分钟的顾客就会不满意，若老板不生气则顾客是满意的。
// 书店老板知道一个秘密技巧，能抑制自己的情绪，可以让自己连续 minutes 分钟不生气，但却只能使用一次。
// 请你返回 这一天营业下来，最多有多少客户能够感到满意 。

// 示例 1：
// 输入：customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], minutes = 3
// 输出：16
// 解释：书店老板在最后 3 分钟保持冷静。
// 感到满意的最大客户数量 = 1 + 1 + 1 + 1 + 7 + 5 = 16.

// 示例 2：
// 输入：customers = [1], grumpy = [0], minutes = 1
// 输出：1

// 老板minutes窗口内满意的客户数量 + 窗口外的 满意客户数量
function maxSatisfied(customers, grumpy, minutes) {
    // 窗口内满意客户的数量
    let windowSum = 0
    // 原本总的满意客户数量
    let sum = 0

    // 先计算原本满意的客户数量
    for(let i = 0;i<customers.length;i++) {
        if(grumpy[i] === 0) {
            sum += customers[i]
        }
    }
    
    // 计算窗口
    for(let i= 0;i < minutes;i++) {
        // 如果窗口内是本身老板生气不满意的客户，则加上
        if(grumpy[i] === 1) {
            windowSum += customers[i]
        }
    }
    let maxWindowSum = windowSum

    for(let i=minutes;i < customers.length;i++) {
        // 窗口内统计的是因老板生气不满意的客户，所以在移出时，这部分要去除
        if(grumpy[i-minutes] === 1) {
            windowSum -= customers[i-minutes]
        }

        // 如果移入的是老板生气不满意的客户，则加上
        if(grumpy[i] === 1) {
            windowSum += customers[i]
        }

        maxWindowSum = Math.max(windowSum, maxWindowSum)
    }
    return maxWindowSum + sum
}

console.log(maxSatisfied([1,0,1,2,1,1,7,5], [0,1,0,1,0,1,0,1], 3)) // 16
console.log(maxSatisfied([1], [0], 1)) // 1
console.log(maxSatisfied([4,10,10], [1,1,0], 2)) // 24