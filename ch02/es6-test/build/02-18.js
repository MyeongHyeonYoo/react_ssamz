"use strict";

var d1 = new Date();
var name = "홍길동";
var r1 = "".concat(name, "\uB2D8\uC5D0\uAC8C ").concat(d1.toDateString(), "\uC5D0 \uC5F0\uB77D\uD588\uB2E4.");
console.log(r1);
var product = "갤럭시S23";
var price = 1200000;
var str = "".concat(product, "\uC758 \uAC00\uACA9\uC740\n").concat(price, "\uC6D0 \uC785\uB2C8\uB2E4.");
console.log(str);