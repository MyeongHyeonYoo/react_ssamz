# **chapter 04**  

## π‘ `React` 

--- 
#### [λ¦¬μ‘νΈ μ»΄ν¬λνΈ]
- ### μμ±μ μ ν¨μ± κ²μ¦
  - νμμ€ν¬λ¦½νΈμ μ μ  νμ μ§μ κΈ°λ₯ μ΄μ© <br>
    - μ»΄νμΌ(λΉλ)μμ νμμ κ²μ¬
  - propTypes - λ¦¬μ‘νΈ μ§μ κΈ°λ₯
    - μ»΄νμΌν  λκ° μλ 'μ€ν μ€'μ `μμ±`μ λν μ ν¨μ± κ²μ¦ - μμ±μΌλ‘ μ λ¬νλ κ°κ³Ό νμμ λ°λΌ κ²½κ³  λ°μ

**βΆ [νμμ€ν¬λ¦½νΈ + propTypes]λ₯Ό μ¬μ©νλ©΄ μκ²©ν μμ± μ ν¨μ± κ²μ¦ κ°λ₯**

<br> β§ μλ‘μ΄ νλ‘μ νΈ μμ± <br>

```
cd ..
npm init vite proptypes-test -- --template react-ts
cd proptypes-test
npm install
```
(src/App.css νμΌ μ­μ )

βΎ 04-10 : src/Calc.tsx β νμμ€ν¬λ¦½νΈλ‘ μ μ  νμμ μμ±μ μ λ¬ <br>
```javascript
import React from 'react'

type CalcPropsTypes = {
    x: number;
    y: number;
    oper: string;
};

const Calc = (props: CalcPropsTypes) => {
    let result: number = 0;
    switch (props.oper) {
        case "+":
            result = props.x + props.y;
            break;
        case "-":
            result = props.x - props.y;
            break;
        case "*":
            result = props.x * props.y;
            break;
        case "/":
            result = props.x / props.y;
            break;
        case "%":
            result = props.x % props.y;
            break;
        default:
            result = 0;
    };

    return (
        <div>
            <h3>μ°μ° λ°©μ : {props.oper}</h3>
            <hr />
            <div>
                {props.x} {props.oper} {props.y} = {result}
            </div>
        </div>
    );
};

export default Calc;
```

βΎ 04-11 : src/App.tsx β Calc μ¬μ© <br>
```javascript
import { useState } from 'react'
import Calc from './Calc'

// function App() {
const App = () => {
  const [x, setX] = useState<number>(100);
  const [y, setY] = useState<number>(200);
  const [oper, setOper] = useState<string>("+");

  return (
    <div>
      <Calc x={x} y={y} oper={oper} />
    </div>
  );
};

export default App
```

<img src="img/props_plus.jpg" width="150" height="100">
<img src="img/props_minus.jpg" width="150" height="100">
<img src="img/props_multiply.jpg" width="150" height="100">
<img src="img/props_divide.jpg" width="150" height="100"> 
<img src="img/props_remain.jpg" width="150" height="100">
<img src="img/props_default.jpg" width="150" height="100"> <br>

βΎ 04-12 : src/Calc.tsx λ³κ²½ β propTypes μ μ©, propTypes μ μ  λ©€λ² μΆκ° <br>

ν¨ν€μ§ μ€μΉ <br>
```
npm install prop-types
```

```javascript
import React from 'react'
import PropTypes from 'prop-types'
Β·Β·Β·Β·Β·
// κΈ°μ‘΄ ν¨μ μ»΄ν¬λνΈ μ½λλ λ³κ²½νμ§ μμ
const Calc = (props: CalcPropsTypes) => {
Β·Β·Β·Β·Β·
};

const calcChecker = (props: any, propName: string, componentName: string) => {
    if (propName === "oper") {
        if (props[propName] !== "+" && props[propName] !== "-" && props[propName] !== "*" && props[propName] !== "/" && props[propName] !== "%") {
            return new Error(`${propName}μμ±μ κ°μ
                λ°λμ '+', '-', '*', '/', '%'λ§ νμ©ν©λλ€(at ${componentName}).`);
        };
    };
};

Calc.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    oper: calcChecker
};

export default Calc;
```
(μ¬μ©μ μ μ μ ν¨μ± κ²μ¦ - ν¨μ μ μ μ¬μ©)

βΎ 04-13 : src/App.tsx λ³κ²½ β state κ° λ³κ²½νμ¬ νμΈ (oper -> "&") <br>
```javascript
import { useState } from 'react'
import Calc from './Calc'

const App = () => {
  const [x, setX] = useState<number>(100);
  const [y, setY] = useState<number>("ab"); // κ° λ³κ²½
  const [oper, setOper] = useState<string>("&"); // κ° λ³κ²½

  return (
    <div className="App">
      <Calc x={x} y={y} oper={oper} />
    </div>
  );
};

export default App
```

μμ±μ νμλ‘ μ λ¬ ν  λ <br>
> - isRequiredλ‘ μ λ¬ <br>
> β PropTypesλ μ¬λ¬ κ°μ§ νμμ λν κΈ°λ³Έμ μΈ μ€μ μ ν  μ μλλ‘ number, string, booleanκ³Ό κ°μ νμ μ λ³΄λ₯Ό μ κ³΅ <br>
```javascript
Calc.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    oper: calcChecker
};
```
<img src="img/props_warning_oper.jpg" width="800" height="220"> <br>
<img src="img/tpye_error.jpg" width="450" height="320"> <br>
<img src="img/valid_oper.jpg" width="800" height="200"> <br>


<br>

- μ§μ  κ°λ₯ν μ ν¨μ± νμ <br>

    - λ¨μ νμ <br>

    > - PropTypes.array: λ°°μ΄ νμ <br> 
    > - PropTypes.bool: true/falsedμ λΆλ¦¬μΈ νμ <br>
    > - PropTypes.func: μμ±μ μ΄μ©ν΄ ν¨μμ λ©μλλ₯Ό μ λ¬νλ ν¨μ νμ <br>
    > - PropTypes.number: μ«μ νμ <br>
    > - PropTypes.object: κ°μ²΄ νμ <br>
    > - PropTypes.string: λ¬Έμμ΄ νμ <br>

    - μ ν¨μ± κ²μ¦ νμ <br>
    > - PropTypes.instanceOf(Customer): Customer ν΄λμ€μ μΈμ€ν΄μ€μΈμ§λ₯Ό κ²μ¦ <br>
    > - PropTypes.oneOf(['+', '*']): [ ]μ ν¬ν¨λ κ° μ€μ νλμΈμ§λ₯Ό κ²μ¦ <br>
    > - PropTypes.oneOfType([PropTypes.number, PropTypes.string]): [ ]μ ν¬ν¨λ νμμ κ°μΈμ§λ₯Ό κ²μ¦ <br>
    > - PropTypes.arrayOf(PropTypes.object): κ°μ²΄μ λ°°μ΄μΈμ§λ₯Ό κ²μ¦ <br>

<br>
β λ³΅μ‘ν κ°μ²΄ μμ± κ²μ¦

```javascript
PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number
});
```
##### β· λ¬Έμμ΄μ νμ μ λ³΄μΈ nameκ³Ό μ«μ νμμ age μμ±μ κ°μ§ κ°μ²΄μΈμ§λ₯Ό κ²μ¦

<br>

βΎ 04-14 : src/Calc.tsx λ³κ²½ β calcChecker ν¨μμ μΆκ°(μ¬μ©μ μ μ μ ν¨μ± κ²μ¦ μΆκ°) <br>
```javascript
Β·Β·Β·Β·Β·

const calcChecker = (props: any, propName: string, componentName: string) => {

    Β·Β·Β·Β·Β·

    if (propName === "y") {
        let y = props[propName];
        if (y > 100 || y < 0 || y % 2 !== 0) {
            return new Error(`${propName}μμ±μ κ°μ
                0 μ΄μ 100 μ΄νμ μ§μλ§ νμ©ν©λλ€.(at ${componentName}).`);
        };
    };
};

Calc.propTypes = {
    x: PropTypes.number.isRequired,
    y: calcChecker,
    oper: calcChecker
};

export default Calc;
```

βΎ 04-15 : src/App.tsx λ³κ²½ β state κ° λ³κ²½νμ¬ νμΈ[y -> (0 < y < 100) && (y % 2 == 0)] <br>
(yκ° μ¬λ°λ₯΄μ§ μμ κ°μ΄ μ λ¬λλλ‘ λ³κ²½)
```javascript
import { useState } from 'react'
import Calc from './Calc'

// function App() {
const App = () => {
  const [x, setX] = useState<number>(100);
  const [y, setY] = useState<number>(200); // μ ν¨νμ§ μλ κ° (0 < y < 100 μ¬μ΄μ κ° + μ§μ)
  const [oper, setOper] = useState<string>("+");

  return (
    <div>
      <Calc x={x} y={y} oper={oper} />
    </div>
  );
};

export default App

```
<img src="img/props_warning_y.jpg" width="800" height="200"> <br>
<img src="img/props_warning_y_2.jpg" width="800" height="200"> <br>
<img src="img/props_warning_y_3.jpg" width="800" height="200"> <br>
<img src="img/valid_y.jpg" width="800" height="200"> <br>


- μμ±μ κΈ°λ³Έκ° μ§μ (default κ° μ§μ )

βΎ 04-16 : src/Calc.tsx λ³κ²½ β μμ±μ κΈ°λ³Έκ° μ€μ (default props) <br>
(μμ±μ κΈ°λ³Έκ°μ΄ μ€μ λλ©΄ isRequiredλ₯Ό μ¬μ©νμ§ μμλ λλ€.)
```javascript
Β·Β·Β·Β·Β·

Calc.proptypes = {
    x: PropTypes.number,
    y: calcChecker,
    oper: calcChecker
};

Calc.defaultProps = {
    x: 100,
    y: 20,
    oper: "+"
}

export default Calc;
```

βΎ 04-17 : src/App.tsx λ³κ²½ β yμ oper μμ± μ¬μ©νμ§ μλλ‘ μ½λ λ³κ²½(xμμ±λ§ μ λ¬) <br>
```javascript
import { useState } from 'react'
import Calc from './Calc'

const App = () => {
  const [x, setX] = useState<number>(100);
  // const [y, setY] = useState<number>(200);
  // const [oper, setOper] = useState<string>("&");

  return (
    <div>
      <Calc x={x} />
    </div>
  );
};

export default App
```
<img src="img/default_props.jpg" width="450" height="200"> <br>
xλ μ§μ λ κ°, yμ operμ κ°μ κΈ°λ³Έκ°(default value)μ΄ μ λ¬λ κ²μ νμΈν  μ μλ€. <br>
