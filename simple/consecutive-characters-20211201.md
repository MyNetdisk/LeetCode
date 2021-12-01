# 1446. 连续字符
给你一个字符串 s ，字符串的「能量」定义为：只包含一种字符的最长非空子字符串的长度。

请你返回字符串的能量。

 

示例 1：

输入：s = "leetcode"
输出：2
解释：子字符串 "ee" 长度为 2 ，只包含字符 'e' 。
示例 2：

输入：s = "abbcccddddeeeeedcba"
输出：5
解释：子字符串 "eeeee" 长度为 5 ，只包含字符 'e' 。
示例 3：

输入：s = "triplepillooooow"
输出：5
示例 4：

输入：s = "hooraaaaaaaaaaay"
输出：11
示例 5：

输入：s = "tourist"
输出：1
 

提示：

1 <= s.length <= 500
s 只包含小写英文字母。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/consecutive-characters
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

# 方法一：一次遍历
题目中的「只包含一种字符的最长非空子字符串的长度」，即为某个字符连续出现次数的最大值。据此可以设计如下算法来求解：

初始化当前字符连续出现次数 \textit{cnt}cnt 为 11。

从 s[1]s[1] 开始，向后遍历字符串，如果 s[i]=s[i-1]s[i]=s[i−1]，则将 \textit{cnt}cnt 加一，否则将 \textit{cnt}cnt 重置为 11。

维护上述过程中 \textit{cnt}cnt 的最大值，即为答案。

# 复杂度分析

时间复杂度：O(n)O(n)，其中 nn 是字符串 ss 的长度。遍历一次 ss 的时间复杂度为 O(n)O(n)。

空间复杂度：O(1)O(1)。我们只需要常数的空间保存若干变量。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/consecutive-characters/solution/lian-xu-zi-fu-by-leetcode-solution-lctm/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

# 代码
```ts
function maxPower(s: string): number {
  let ans = 1,cnt =1;
  for(let i=1;i<=s.length-1;i++){
      if(s[i]===s[i-1]){
          cnt+=1;
          ans = Math.max(cnt,ans);
      }else{
          cnt=1
      }
  }
  return ans;
};
```