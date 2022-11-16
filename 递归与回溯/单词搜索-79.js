/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
let directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
]; // 左 右 上 下

let visited;
let exist = function (board, word) {
  let maxY = board.length;
  if (!maxY) return false;
  let maxX = board[0].length;

  // 二维数组记录已访问过的元素
  visited = new Array(maxY);
  for (let y = 0; y < visited.length; y++) {
    visited[y] = new Array(maxX);
  }

  let inArea = (x, y) => {
    return x >= 0 && x < maxX && y >= 0 && y < maxY;
  };

  let search = (startX, startY, wordIndex) => {
    // 当前单元格的字符
    let curCell = board[startY][startX];
    // 当前模板字符的第x个字符
    let curChar = word[wordIndex];
    // 当前起始字符不匹配，直接失败
    if (curCell !== curChar) {
      return false;
    }

    // 如果递归到最后一位字符，就直接返回最后一位字符是否匹配成功
    if (wordIndex === word.length - 1) {
      return curCell === curChar;
    }

    // 如果找到目标字符，进一步递归，先记录为已访问元素，防止递归的时候重复访问
    visited[startY][startX] = true;

    for (let direction of directions) {
      let [x, y] = direction;
      let nextX = startX + x;
      let nextY = startY + y;

      // 需要保证未越界且未被访问过
      if (inArea(nextX, nextY) && !visited[nextY][nextX]) {
        if (search(nextX, nextY, wordIndex + 1)) {
          return true;
        }
      }
    }
    // 重置已访问标记位
    visited[startY][startX] = false;
  };

  // 循环先找到第一个相等的字符，然后在递归
  for (let y = 0; y < maxY; y++) {
    for (let x = 0; x < maxX; x++) {
      if (search(x, y, 0)) {
        // 找到直接跳出双层循环
        return true;
      }
    }
  }

  return false;
};

// var board = [
//   ["A", "B", "C", "E"],
//   ["S", "F", "C", "S"],
//   ["A", "D", "E", "E"],
// ];

// var word = "ABCCED";

var board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];

var word = "SEE";

console.log(exist(board, word));
console.log(visited);
