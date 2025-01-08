// T1. 浅拷贝 深拷贝

const obj1 = {
    name:'zhangsan',
    age:18,
    address:{
        city:'beijing'
    },
}



// for实现浅拷贝
const shallowCopy = (obj) => {
    let newObj = {}
    for ( let key in obj){
        newObj[key] = obj[key]
    }
    return newObj
}

const obj2 ={
    name:'SU',
    sex:'female'
}

//Object.assign实现浅拷贝 
const shallowCopy_assign = (obj) => {
    // Object.assign(target, ...sources) 追加源对象的属性到目标对象
     Object.assign(obj2,obj)
}


shallowCopy_assign(obj1);

const print = (obj) => {
    console.log(JSON.stringify(obj))
}

print(obj2);


//深拷贝
function deepCopy(newObj,oldObj){
    for (let key in oldObj){
        let item = oldObj[key]
    
    if(item instanceof Array){
        newObj[key] = [];
        deepCopy(newObj[key],item);}
    else if (item instanceof Object){
        newObj[key]={};
        deepCopy(newObj[key],item);
    }
    else{
        newObj[key] = item;
    }}
    }




