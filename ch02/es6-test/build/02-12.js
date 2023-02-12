"use strict";

var add = function add(x, y) {
  this.result = x + y;
};
var obj = {};
//1. apply() 사용
//add.apply(obj, [3, 4]) // this : obj

//2. call() 사용
//add.call(obj, 3, 4) // this : obj

//3. bind() 사용
add = add.bind(obj); // this : obj (obj를 this로 강제 지정)
add(3, 4);
console.log(obj); // { result : 7 }