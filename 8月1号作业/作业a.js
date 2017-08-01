/**
 * Created by dllo on 17/8/1.
 */


// forEach
var array = [1, 2, 6, 4];
// 参数一: 遍历数组中的内容
// 参数二: 是对应值得下标
// 参数三: 是数组本身
array.forEach(function (index, value, array) {

    // console.log(index);
    // console.log(value);
    // console.log(array);
});



// map
var data = [1,2,3,4];
// 1.原数组被“映射”成对应新数组
// 2.callback需要有return值,否则所数组所有项都被映射成了undefined
var array1 = data.map(function (a) {
    return a - 1;
});
// console.log(array1);

//使用map方法方便获得对象数组中的特定属性值
var users = [
    {name: "张含韵", "email": "zhang@email.com"},
    {name: "江一燕",   "email": "jiang@email.com"},
    {name: "李小璐",  "email": "li@email.com"}
];

var emails = users.map(function (user) {
    // return user['name'];  // 第1种方法
    // return user.name;     // 第2种方法
});
// console.log(emails.join(", "));





//filter 过滤,筛选
var data1 = [0,8,9,10];
// 0是false,被抛弃!
//filter的callback函数需要返回布尔值true或false,若果不为true,就会被过滤掉
var array2 = data1.filter(function (a1) {
    //可以给出条件筛选
    return a1 < 3
});
// console.log(array2);



//some
var array3 = [5, 8, 3, 10];
var sum = 3;
// 某一项符合条件即可
var arr = array3.some(function (t) {
    return t < sum
});
// console.log(arr);//返回布尔值



























