/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // 边界1直接返回
  if (x === 1) return x;
  // 左侧数值
  var left = 0;
  // 右侧数值
  var right = x;
  var ans = -1;
  // 二分查找直到right>left，不能是<而是<=
  while (left <= right) {
    // middle中间数值
    var middle = Math.floor(left + (right - left) / 2);
    // 中间数平方
    var pow = middle * middle;

    // 直接返回避免后面的重复计算
    if (pow === x) {
      return middle;
    }

    if (pow < x) {
      // 在二分过程中每次发现 middle * middle < x 的情况，就把这个 middle 值记录为 ans，一直更新为新数值
      ans = middle;
      // 中间数平方小于x，左边数值右移
      left = middle + 1;
    } else {
      // 中间数平方大于x，右边数值左移
      right = middle - 1;
    }
  }
  // 如果二分查找超出边界了，无论最后的边界是停留在小于x的位置还是大于x的位置，都返回ans即可，因为它是最后一个乘积小于 x 的值，一定是正确答案。
  return ans;
};

// console.log(mySqrt(8));
