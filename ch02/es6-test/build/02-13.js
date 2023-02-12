"use strict";

var obj = {
  result: 0
};
obj.add = function (x, y) {
  function inner() {
    this.result = x + y; // 전역 객체
  }

  inner(); // 호출될 때의 형태는 특정 객체의 메서드 형태가 아니다. (전역 객체의 result에 할당)
};

obj.add(3, 4); // this: obj -> 중첩 함수로 전역에 할당

console.log(obj); // { result: 0 }
console.log(result); // 7 // 전역 변수 result에 할당