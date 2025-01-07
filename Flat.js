//T2 Flat
// 递归无限拍平
var flat = function (arr) {
  let result = [];
  for (item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flat(item, n));
    } else {
      result.push(item);
    }
  }
  return result;
};

//问题：concat方法会创建一个新数组，如果数组长度很大，会影响性能
//优化：使用push方法+带深度参数的递归
var flat = function (arr, n) {
  let res = [];
  if (n <= 0) return arr;
  for (item of arr) {
    if (Array.isArray(item)) {
      res.push(...flat(item, n - 1));
    } else {
      res.push(item);
    }
  }
  return res;
};

// 方法2: 使用reduce方法
const flat = (arr, n = 1) => {
  if (n <= 0) return arr;
  else {
    const new_arr = arr.reduce((acc, cur) => {
        if (Array.isArray(cur)){
            acc.push(...flat(cur, n - 1));
        }
        else{
            acc.push(cur);
        }
        return acc;
    }, []);
  }
};
