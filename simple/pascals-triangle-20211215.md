# 118. 杨辉三角

给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。

示例 1:

输入: numRows = 5
输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]


示例 2:

输入: numRows = 1
输出: [[1]]
 

提示:

1 <= numRows <= 30

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/pascals-triangle
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

# 方法一：数学
# 思路及解法

杨辉三角，是二项式系数在三角形中的一种几何排列。它是中国古代数学的杰出研究成果之一，它把二项式系数图形化，把组合数内在的一些代数性质直观地从图形中体现出来，是一种离散型的数与形的结合。

杨辉三角具有以下性质：

1、每行数字左右对称，由 1 开始逐渐变大再变小，并最终回到 1。

2、第 n 行（从 00 开始编号）的数字有 n+1 项，前 n 行共有 $\frac{n(n+1)}{2}$个数。

3、第 n 行的第 m 个数（从 0 开始编号）可表示为可以被表示为组合数 $\mathcal{C}(n,m)$，记作 $\mathcal{C}_n^m$或 $\binom{n}{m}$，即为从 n 个不同元素中取 m 个元素的组合数。我们可以用公式来表示它：$\mathcal{C}_n^m$=$\dfrac{n!}{m!\times (n-m)!}$ 

4、每个数字等于上一行的左右两个数字之和，可用此性质写出整个杨辉三角。即第 nn 行的第 ii 个数等于第 n-1n−1 行的第 i-1i−1 个数和第 ii 个数之和。这也是组合数的性质之一，即 $\mathcal{C}_n^i$=$\mathcal{C}_{n-1}^i$+$\mathcal{C}_{n-1}^{i-1}$

5、$(a+b)^n$ 的展开式（二项式展开）中的各项系数依次对应杨辉三角的第 n 行中的每一项。

依据性质4，我们可以一行一行地计算杨辉三角。每当我们计算出第 i 行的值，我们就可以在线性时间复杂度内计算出第 i+1 行的值。

# 代码
```ts
function generate(numRows: number): number[][] {
  const ret:any[] = []
  for(let i=0;i<numRows;i++){
      const row = new Array(i+1).fill(1)
      for(let j=1;j<row.length-1;j++){
          row[j]=ret[i-1][j-1]+ret[i-1][j]
      }
      ret.push(row);
  }
  return ret;
};
```

复杂度分析

时间复杂度：$O(\textit{numRows}^2
 )$。

空间复杂度：O(1)。不考虑返回值的空间占用。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/pascals-triangle/solution/yang-hui-san-jiao-by-leetcode-solution-lew9/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。