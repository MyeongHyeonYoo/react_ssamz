function arrayConcat2(items1, items2) {
    return items1.concat(items2);
} // 제네릭을 적용한 함수
var arr2 = arrayConcat2([10, 20, 30], [40, 50]);
arr2.push("hello"); // arr2는 number[]형식이므로 명시적 에러 발생
//# sourceMappingURL=02-28.js.map