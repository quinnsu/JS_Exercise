// Compare versions

// Compare two software version numbers (e.g. "1.7.1" or "1.2" or "0.0.1").

function compareVersions(version1, version2) {
  // split 拆分字符串为数组
  const v1 = version1.split(".");
  const v2 = version2.split(".");
  const len = Math.max(v1.length, v2.length);
  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i] || 0); // 空值转为0
    const num2 = parseInt(v2[i] || 0);
    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
    // 相等时继续比较下一位
  }
  return 0;
}

console.log(compareVersions("1.7.1", "1.2")); // 1


//练习
function com(v1, v2) {
  let arr1 = v1.split(".").map(parseInt);
  let arr2 = v2.split(".").map(parseInt);
  const len = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < len; i++) {
    if ((arr1[i] || 0) > (arr2[i] || 0)) { //undefined转为0！
      return 1;
    } else if ((arr1[i] || 0) < (arr2[i] || 0)) {
      return -1;
    }
  }
  return 0;
}
