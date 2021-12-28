# 125. 验证回文串

给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。


示例 1:
输入: "A man, a plan, a canal: Panama"
输出: true
解释："amanaplanacanalpanama" 是回文串

示例 2:
输入: "race a car"
输出: false
解释："raceacar" 不是回文串

提示：

1 <= s.length <= 2 * 105
字符串 s 由 ASCII 字符组成

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-palindrome
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

# 解题思路
先都转成大写（不然会出现 a A 判定为不相同）
设置头尾双指针，开启循环
如果指向的元素是不是有效的（不是字母和数字），则跳过
如果指向的元素有效，但不相同，则不是回文，返回false
否则有效，且相同，收缩指针，继续循环
直至指针相遇，循环结束，始终没有返回false，返回true。

# 代码
```ts
function isPalindrome(s: string): boolean {
  let isValid = (c)=>{
      return ((c>='a'&&c<='z')||(c>='A'&&c<='Z')||(c>='0'&&c<='9'))
  }
  s= s.toUpperCase();
  let i=0,j=s.length-1;
  while(i<j){
      if(!isValid(s[i])){
          i++;
          continue;
      }
      if(!isValid(s[j])){
          j--;
          continue;
      }
      if(s[i]!==s[j]){
          return false;
      }
      i++
      j--
  }
  return true;
};
```

# 复杂度分析
时间复杂度 O(n)

作者：xiao_ben_zhu
链接：https://leetcode-cn.com/problems/valid-palindrome/solution/125-shuang-zhi-zhen-xiang-hu-bi-jin-zhi-zhi-xiang-/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。