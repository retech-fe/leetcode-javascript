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
  // 二分查找直到right>left，不能是<而是<=
  while (left <= right) {
    // middle中间数值
    var middle = Math.floor(left + (right - left) / 2);
    // 中间数平方
    var pow = middle * middle;

    if (pow === x) {
      return middle;
    }

    // 中间数平方大于x，右边数值左移
    if (pow > x) {
      right = middle - 1;
    } else {
      // 中间数平方小于x，左边数值右移
      left = middle + 1;
    }
  }
  // 退出循环时的right
  return right;
};

console.log(mySqrt(8));
