# 110. 平衡二叉树

给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。


示例 1：

输入：root = [3,9,20,null,null,15,7]
输出：true


示例 2：

输入：root = [1,2,2,3,3,null,null,4,4]
输出：false


示例 3：

输入：root = []
输出：true
 

提示：

树中的节点数在范围 [0, 5000] 内
-104 <= Node.val <= 104

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/balanced-binary-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


# 解题思路
关于根节点的深度究竟是1 还是 0，不同的地方有不一样的标准，leetcode的题目中都是以节点为一度，即根节点深度是1。但维基百科上定义用边为一度，即根节点的深度是0，我们暂时以leetcode为准（毕竟要在这上面刷题）。

因为求深度可以从上到下去查 所以需要前序遍历（中左右），而高度只能从下到上去查，所以只能后序遍历（左右中）

有的同学一定疑惑，为什么104.二叉树的最大深度中求的是二叉树的最大深度，也用的是后序遍历。

那是因为代码的逻辑其实是求的根节点的高度，而根节点的高度就是这颗树的最大深度，所以才可以使用后序遍历。

作者：carlsun-2
链接：https://leetcode-cn.com/problems/balanced-binary-tree/solution/dai-ma-sui-xiang-lu-dai-ni-xue-tou-er-ch-x3bv/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

# 代码
```ts
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isBalanced(root: TreeNode | null): boolean {
    //还是用递归三部曲  + 后序遍历 左右中 当前左子树右子树高度相差大于1就返回-1
    // 1. 确定递归函数参数以及返回值
   function getDepth(node:TreeNode){
       // 2. 确定递归函数终止条件
      if(node===null){
          return false;
      }
      // 3. 确定单层递归逻辑
      let leftDepth = getDepth(node.left);//左子树高度
      if(leftDepth===-1){
          return -1;
      }
      let rightDepth = getDepth(node.right);//右子树高度
      if(rightDepth===-1){
          return -1;
      }
      if(Math.abs(leftDepth-rightDepth)>1){
          return -1;
      }else{
          return 1+Math.max(leftDepth,rightDepth);
      }
   }
   return getDepth(root)===-1?false:true;
};
```