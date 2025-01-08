// 返回数组中出现最多次数的元素
// 例如：[1, 2, 3, 4, 5, 1, 1, 2, 3, 1] => 1

// 方法1: 使用对象存储元素出现的次数, item of 遍历
function findMostFrequentElement(arr){
    dict = {};
    let max = 0;
    for (item of arr){
        if (dict[item] === undefined){
            dict[item] = 1;
        }
        else{
            dict[item] += 1;
        }
        if (dict[max] > max){
            max = dict[max];
        }
    }
    return max;
}

// 方法2: reduce
function findMostFrequentElement(arr){
    map = arr.reduce((acc,cur)=>{
        if (acc[cur] === undefined){
            acc[cur] = 1;
        }
        else{
            acc[cur] += 1;
        }
        return acc;
    },{});
    let max = 0;
    for (key in map){
        if (map[key] > max){
            max = map[key];
        }
    }
    return max;
}
