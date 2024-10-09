// 题解套路：https://leetcode.cn/circle/discuss/0viNMK/
// leetcode题号：1456
// 给你字符串 s 和整数 k 。
// 请返回字符串 s 中长度为 k 的单个子字符串中可能包含的最大元音字母数。
// 英文中的 元音字母 为（a, e, i, o, u）。

// 示例 1：
// 输入：s = "abciiidef", k = 3
// 输出：3
// 解释：子字符串 "iii" 包含 3 个元音字母。

// 示例 2：
// 输入：s = "aeiou", k = 2
// 输出：2
// 解释：任意长度为 2 的子字符串都包含 2 个元音字母。

// 示例 3：
// 输入：s = "leetcode", k = 3
// 输出：2
// 解释："lee"、"eet" 和 "ode" 都包含 2 个元音字母。

// 示例 4：
// 输入：s = "rhythms", k = 4
// 输出：0
// 解释：字符串 s 中不含任何元音字母。

// 示例 5：
// 输入：s = "tryhard", k = 4
// 输出：1

// 定长滑窗套路
// 入-更新-出
// 1. 入：下标为i的元素进入窗口，更新相关统计量，如果i < k -1 则重复第一步
// 2. 更新：更新答案。一般是更新最大值/最小值
// 3. 出：下标为 i - k + 1 的元素离开窗口，更新统计量

// 举例：
// 示例 1，s=abciiidef, k=3。
// 从左到右遍历 s。
// 首先统计前 k−1=2 个字母的元音个数，这有 1 个。
// s[2]=c 进入窗口，此时找到了第一个长为 k 的子串 abc，现在元音个数有 1 个，更新答案最大值。然后 s[0]=a 离开窗口，现在元音个数有 0 个。
// s[3]=i 进入窗口，此时找到了第二个长为 k 的子串 bci，现在元音个数有 1 个，更新答案最大值。然后 s[1]=b 离开窗口，现在元音个数有 1 个。
// s[4]=i 进入窗口，此时找到了第三个长为 k 的子串 cii，现在元音个数有 2 个，更新答案最大值。然后 s[2]=c 离开窗口，现在元音个数有 2 个。
// s[5]=i 进入窗口，此时找到了第四个长为 k 的子串 iii，现在元音个数有 3 个，更新答案最大值。然后 s[3]=i 离开窗口，现在元音个数有 2 个。
// s[6]=d 进入窗口，此时找到了第五个长为 k 的子串 iid，现在元音个数有 2 个，更新答案最大值。然后 s[4]=i 离开窗口，现在元音个数有 1 个。
// s[7]=e 进入窗口，此时找到了第六个长为 k 的子串 ide，现在元音个数有 2 个，更新答案最大值。然后 s[5]=i 离开窗口，现在元音个数有 1 个。
// s[8]=f 进入窗口，此时找到了第七个长为 k 的子串 def，现在元音个数有 1 个，更新答案最大值。遍历结束。

function maxVowels(s, k) {
    let ans = 0
    let vowels = 0
    for(let i=0;i<s.length;i++) {
        if(s[i]==="a" || s[i]==="e" || s[i]==="i" || s[i]==="o" || s[i]==="u") {
            vowels++
        }

        if(i<k-1) {
            continue
        }

        ans = Math.max(ans, vowels)

        let out = s[i-k+1]
        if(out==="a" || out==="e" || out==="i" || out==="o" || out==="u") {
            vowels--
        }
    }
    return ans
}

console.log(maxVowels("abciiidef", 3)) // 3
console.log(maxVowels("aeiou", 2)) // 2
console.log(maxVowels("leetcode", 3)) // 2
console.log(maxVowels("rhythms", 4)) // 0
console.log(maxVowels("tryhard", 4)) // 1