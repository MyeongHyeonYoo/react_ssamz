# **chapter 02** 

 ## π‘ `React` 

--- 

#### [νμμ€ν¬λ¦½νΈ]
```
βΆ tsconfig.json μ€μ  κ΄λ ¨ 

https://www.typescriptlang.org/tsconfig
https://typescript-kr.github.io/pages/compiler-options.html
```

βΎ sample : test <br>
```javascript
npx tsc

node build/sample.js
```

```
[Typescript Playground]

https://www.typescriptlang.org/ko/play
```
<img src="img/playground.jpg" width="800" height="320"> <br>
- Type Error <br>
<img src="img/type_error.jpg" width="760" height="320"> <br>

- type alias
```javascript
type TestType {
  id: number,
  age: number,
  name: {
    first: string,
    last: string
  }
}

let obj : TestType = {
  id : 1001,
  age : 20,
  name : {
    first : "Larry",
    last : "King"
  }
}
```

<br>
βΎ 02-27 : any[] νμ [λ°°μ΄] <br>
<img src="img/02-27.jpg" width="150" height="80"> <br><br>
βΎ 02-28 : μ λ€λ¦­ νμ <br><br>
βΎ 02-29 : νμ λ³μΉ­(type alias) <br>
- νμ 1κ° λλ λ³΅μ‘ν νμμ λν λ³μΉ­ λΆμ¬ <br>
- μ νμ  μμ± : ? <br>
- μ½κΈ° μ μ© μμ± : readonly <br>
- νν νμ <br>

```javascript
// string νμμ λν λ³μΉ­ λΆμ¬
type MyType = string;
let a: MyType = "Hello";

// λ³΅μ‘ν νμμ λν λ³μΉ­ λΆμ¬
type MyType2 = { name: string, age: number; }
let b: MyType2 = { name: "νκΈΈλ", age: 20 };

// μ νμ  μμ±κ³Ό μ½κΈ° μ μ© μμ±
type MyType3 = {
    name: string;
    age?: number;
    readonly email: string;
};

let c: MyType3 = { name: "νκΈΈλ", email: "gdhong@test.com" };
// μ½κΈ° μ μ©μ΄λ―λ‘ μλ¬ λ°μ
// c.email = "gdhong@test.com";

// νν νμ
type TupleType = [string, number];
let d: TupleType = ["hello", 100];
// let e: TupleType = ["hello", 100, "world"]; // μλ¬
```

βΎ 02-30 : νμ λ³μΉ­ μ νμ λ³μΉ­ <br>
βΎ 02-31 : μ λμ¨(union type) νμ ( | ) - λ¨μΌ <br>
βΎ 02-32 : μ λμ¨(union type) νμ ( | ) - λ³΅μ <br>
βΎ 02-33 : μΈν°μΉμ(intersection type) νμ ( & ) <br>
βΎ 02-34 : μ΄κ±°ν(enum) <br>
βΎ 02-35 : μΈν°νμ΄μ€(interface) <br>
βΎ 02-36 : μΈν°νμ΄μ€(interface) μ€λ³΅ μ μ => λ³ν©λ νλμ μΈν°νμ΄μ€ <br>
βΎ 02-37 : μΈν°νμ΄μ€(interface) μμ(extends) <br>