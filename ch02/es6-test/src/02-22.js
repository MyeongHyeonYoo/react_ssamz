var p = new Promise((resolve, reject) => {
    resolve("first!")
});

p.then((msg) => {
    console.log(msg);
   throw new Error("## 에러!!")
    return "secnod";
})
.then((msg) => {
    console.log(msg);
    return "third";
})
.then((msg) => {
    console.log(msg);
})
.catch((error) => {
    console.log("에러 발생 ==> " + error)
});
