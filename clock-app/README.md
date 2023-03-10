# **chapter 05**  

## π‘ `React` 

--- 
#### [λ¦¬μ‘νΈ ν΄λμ€ μ»΄ν¬λνΈ]
- ν΄λμ€ μ»΄ν¬λνΈλ ν¨μ μ»΄ν¬λνΈμμλ μ§μνμ§ μλ λ€μν `μλͺμ£ΌκΈ° μ΄λ²€νΈ ν`λ€μ μ κ³΅ <br>
- **λ¦¬μ‘νΈ**λ ν νλ‘μ νΈμμ `ν΄λμ€ μ»΄ν¬λνΈ`μ `ν¨μ μ»΄ν¬λνΈ`λ₯Ό νΌμ©νκΈ°λ νλ€. <br>
- λ¦¬μ‘νΈ ν΄λμ€ μ»΄ν¬λνΈλ React.Component<PropsType, StateType>μ μμλ°λλ‘ μμ± <br>
    - λ§μΌ μμ±μ΄λ μνλ₯Ό μ¬μ©νμ§ μλλ€λ©΄ μ λ€λ¦­ λ¬Έλ² λΆλΆμ μλ΅νκ±°λ { }μ κ°μ΄ λΉμ΄μλ κ°μ²΄λ‘ μ§μ ν  μ μλ€. <br>

```javascript
// [ React ν΄λμ€ μ»΄ν¬λνΈμ κΈ°λ³Έμ μΈ νν ]
import React, { Component } from 'react'

// μμ±μ νμ
type Props = {}

// μνμ νμ
type State = {}

export default class Test extends Component<Props, State> {
    state = {}
    render() {
        return (
            <div>Test</div>
        )
    }
}

// [ μμ±λ§ μ¬μ©νλ React ν΄λμ€ μ»΄ν¬λνΈ νν μ ]
import React, { Component } from 'react'

type TestProps = {
    name: string;
    age: number;
}

export default class Test extends Component<TestProps> {
    render() {
        return <div>{this.props.name}λμ λμ΄λ {this.props.age}μλλ€.</div>;
    }
}
```

<br>

- μ λ¬λ°μ 'μμ±'μ this.props.nameκ³Ό κ°μ΄ `this` μλ³μλ₯Ό μ΄μ©ν΄ μ»΄ν¬λνΈ μΈμ€ν΄μ€μ props μμ±μ μ΄μ© <br>
- 'μν'λ this.state.nameμ νμμΌλ‘ μ κ·Ό κ°λ₯ <br>

```javascript
// [ μνλ§ μ¬μ©νλ React ν΄λμ€ μ»΄ν¬λνΈ νν μ ]
import React, { Component } from 'react'

type TestState = {
    name: string;
};

export default class Test extends Component<{ }, TestState> {
    state: TestState = {
        name: "νκΈΈλ",
    };

    render() {
        return <div>μ΄λ¦μ {this.state.name}μλλ€.</div>;
    }
}
```

<br>

- μμ±μΌλ‘ ν¨μμ λ©μλλ₯Ό μ λ¬ν  λλ ν¨μ μ»΄ν¬λνΈμ μμ±μ μ μν  λμ λ§μ°¬κ°μ§λ‘ (format: string) => voidμ κ°μ ννλ₯Ό μ¬μ© <br>
    - λ§μΌ <u>μΈμ νμ</u>κ³Ό <u>λ¦¬ν΄κ°μ νμ</u>μ μ μ μλ€λ©΄ `Function`μ μ§μ  <br>

```javascript
// [ μμ±μΌλ‘ ν¨μ, λ©μλλ₯Ό μ λ¬νλ κ²½μ° ]
import React, { Component } from 'react'

type Props = {
    formatString: string;
    changeFormat: (format: string) => void;
    // changeFormat: Function;
};

export default class Test extends Component<Props> {
    render() {
        return (
            <div>
                <button onClick={(e) => this.props.changeFormat("HH:mm:ss")}>μ μ©</button>
            </div>
        );
    }
}
```

```
VSCodeμ νμ₯ν© [ES7+React/Redux/React-Native snippets] νμ©

β tsrafc, tsrafce: Typescript(ts) κΈ°λ°μ React Arrow Function Component(rafc) μ½λ μ‘°κ°μ μμ±
   (λμ eκ° λΆμ κ²μ export κ΅¬λ¬ΈκΉμ§ μμ±)

β tsrcc, tsrce: Typescript(ts) κΈ°λ°μ React Class Component(rcc) μ½λ μ‘°κ°μ μμ±
   (λμ eκ° λΆμ κ²μ export κ΅¬λ¬ΈκΉμ§ μμ±)

β tsrfc, tsrfce: Typescript(ts) κΈ°λ°μ React Function Component(rfc) μ½λ μ‘°κ°μ μμ±
   (λμ eκ° λΆμ κ²μ export κ΅¬λ¬ΈκΉμ§ μμ±)


[μ°Έκ³ ]
https://github.com/dsznajder/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md
```

<br>

β§ μ νλ‘μ νΈ μμ± <br>
``` javascript
cd ..
npm init vite clock-app -- --template react-ts
cd clock-app
npm install
npm install date-and-time // μκ°μ HH:mm:ss νμμΌλ‘ μΆλ ₯νκΈ° μν λΌμ΄λΈλ¬λ¦¬
```

β App μ»΄ν¬λνΈ <br>
- μν: formatString(μκ°μ λ³΄μ¬μ£Όλ νμ λ¬Έμμ΄) <br>

<br>

β Clock μ»΄ν¬λνΈ
- μν: currentTime(νμ¬ μκ°μ λνλ΄λ μ λ³΄) <br>
- μμ±: formatString(App μ»΄ν¬λνΈμ μνλ₯Ό μμ±μΌλ‘ μ λ¬ λ°μ) <br>
- κΈ°λ₯: 1μ΄λ§λ€ μκ°μ κ°±μ νλλ‘ componentDidMount μλͺμ£ΌκΈ° μ΄λ²€νΈλ₯Ό μ¬μ© <br>

<br>

βΎ 05-01 : src/Clock.tsx β μλ‘μ΄ μ»΄ν¬λνΈ μμ± <br>
- date-and-time λΌμ΄λΈλ¬λ¦¬ μ¬μ©(HH:mm:ss νμμΌλ‘ μκ° μ λ³΄ μΆλ ₯) <br>
- componentDidMount μλͺμ£ΌκΈ° λ©μλμμ μ»΄ν¬λνΈκ° λ§μ΄νΈλ νμ 1μ΄ κ°κ²©μΌλ‘ μκ° μνλ₯Ό λ³κ²½νλλ‘ setInterval ν¨μλ₯Ό νΈμΆ, μΈμλ‘ μ λ¬νλ ν¨μ λ΄μμ this.setState()λ©μλλ₯Ό μ¬μ©ν΄ μνλ₯Ό λ³κ²½ <br>

```javascript
import React, { Component } from 'react'
import DateAndTime from 'date-and-time'

type Props = {
    formatString: string;
};

type State = {
    currentTime: Date;
};

export default class Clock extends Component<Props, State> {
    state = {
        currentTime: new Date(),
    };

    componentDidMount = () => {
        setInterval(() => {
            this.setState({ currentTime: new Date() });
        }, 1000);
    };

    render() {
        return (
            <div className="boxStyle">
                <h3>{DateAndTime.format(this.state.currentTime, this.props.formatString)}</h3>
            </div>
        );
    }
}
```

βΎ 05-02 : src/App.tsx β Clock μ»΄ν¬λνΈμ formatString μμ±μ μ λ¬ <br>
```javascript
import { Component } from 'react'
import Clock from './Clock'

type State = {
  formatString: string;
};

export default class App extends Component<{}, State> {
  state = {
    // HH:mm:ss
    // Hμ mλΆ sμ΄
    formatString: "HH:mm:ss",
  };

  render() {
    return (
      <div className="boxStyle">
        <h2>κ°λ¨ν λμ§νΈ μκ³</h2>
        <hr />
        <Clock formatString={this.state.formatString} />
      </div>
    );
  }
}
```

βΎ 05-03 : src/index.css β μ€νμΌ μ§μ  <br> 
```css
.boxStyle {
  border: solid 1px gray;
  padding: 5px;
  margin: 5px;
}
```

<img src="img/clock.jpg" width="780" height="330"> <br>

<br>

- μλͺμ£ΌκΈ° λ©μλ <br>
    - μλͺμ£ΌκΈ° λ©μλ(life cycle method)λ λ¦¬μ‘νΈ ν΄λμ€ μ»΄ν¬λνΈμμλ§ μ¬μ©. <br>
    β· ν¨μ μ»΄ν¬λνΈμμ useEffect()λΌλ λ¦¬μ‘νΈ νμ μ΄μ©ν΄ μ΄μ μ μ¬ν κΈ°λ₯μ κ΅¬ν. <br>

        - μ»΄ν¬λνΈ λ§μ΄νΈ(mounting)λ  λ <br>
            > λ¦¬μ‘νΈ μ»΄ν¬λνΈκ° μ νλ¦¬μΌμ΄μμ μ»΄ν¬λνΈ νΈλ¦¬μ μΆκ°λμ΄ λΈλΌμ°μ  νλ©΄μ λνλ  λμ λ¨κ³λ³ μλͺμ£ΌκΈ° λ©μλ <br>
        - μ»΄ν¬λνΈκ° μλ°μ΄νΈ(updating)λ  λ <br>
            > λ¦¬μ‘νΈ μ»΄ν¬λνΈμ μν, μμ±μ΄ λ³κ²½λμ΄ λΈλΌμ°μ  νλ©΄μ΄ κ°±μ λ  λμ λ¨κ³λ³ μλͺμ£ΌκΈ° λ©μλ <br>
        - μ»΄ν¬λνΈκ° μΈλ§μ΄νΈ(unmounting)λ  λ <br>
            > λ¦¬μ‘νΈ μ»΄ν¬λνΈκ° μ νλ¦¬μΌμ΄μμ μ»΄ν¬λνΈ νΈλ¦¬μμ μ κ±°λμ΄ λΈλΌμ°μ  νλ©΄μ μ¬λΌμ§ λμ μλͺμ£ΌκΈ° λ©μλ <br>

<img src="img/react_life_cycle_method.png" width="780" height="450"> <br>
(μλͺμ£ΌκΈ° λ€μ΄μ΄κ·Έλ¨) <br>

<br>

1. μ»΄ν¬λνΈκ° λ§μ΄νΈλ  λ <br>

- constructor(μμ±μ) <br>
    - μ»΄ν¬λνΈκ° μμ±λ  λ νΈμΆλλ μλͺμ£ΌκΈ° λ©μλ <br>
    - μμ±μμμλ λ°λμ super(props)λ₯Ό νΈμΆν΄μΌ νλ©°, κ·Έλ μ§ μμΌλ©΄ μ»΄ν¬λνΈμμ μμ±(props)μ μ¬μ©ν  μ μμΌλ―λ‘ μλ¬κ° λ°μνλ€. <br>
    - μμ±μλ this.stateμ κ°μ²΄λ₯Ό ν λΉνμ¬ μ»΄ν¬λνΈμ μν(state)λ₯Ό 'μ΄κΈ°ν'νκΈ° μν΄ μμ± <br>
        - this.setState() λ©μλλ₯Ό ν΅ν΄ μνλ₯Ό λ³κ²½ν΄μλ μ λλ€. <br>
        - μνλ₯Ό μ΄κΈ°νν  μΌμ΄ μλ€λ©΄ μμ±μλ₯Ό μμ±νμ§ μμλ λλ€. <br>
```javascript
constructor(props) {
    this.state = {name: "νκΈΈλ", age: 20}
}
```

`νμμ€ν¬λ¦½νΈ` μΈμ΄μμλ <u><b>constructor</b>λ₯Ό μ¬μ©νλ©΄ this.state μμ±μ νμμ μ§μ ν  μ μμ΄μ constructorλ₯Ό μ¬μ©νλλΌλ <b>any</b> νμμ μ¬μ©</u>ν΄μΌ νλ―λ‘ κΆμ₯νμ§ μλλ€. <br>
λ€λ§, λ€μμ λ°©λ²μΌλ‘ <u>ν΄λμ€ λ΄μ state μΈμ€ν΄μ€ λ©€λ²λ₯Ό μ§μ νλ λ°©λ²</u>μΌλ‘ μ¬μ©νλ κ²½μ°κ° λ§λ€. <br>

```javascript
import React, { Component } from 'react'

type StateType = {
    name: string;
    age: number;
};

export default class Test extends Component<{ }, StateType> {
    state: StateType = {name: "νκΈΈλ", age: 20 };

    render() {
        const { name, age } = this.state;
        return <div> {name}λμ λμ΄ : {age}</div>;
    }
}
```

- getDerivedStateFromProps μ μ  λ©μλ <br>
    - μ΄ μλͺμ£ΌκΈ° λ©μλλ μ»΄ν¬λνΈμ μνκ° 'λΆλͺ¨ μ»΄ν¬λνΈ'λ‘λΆν° μ λ¬λ°μ `μμ±`μ μν΄ λ¬λΌμ§λ κ²½μ°μ μ¬μ©.
    - μ΄ λ©μλλ `μ μ  λ©μλ`μ΄λ―λ‘ λ°λμ `static`ν€μλλ₯Ό μ§μ ν΄μΌ νλ©°, <u>props</u>μ <u>state</u> λ κ°μ μΈμλ₯Ό μ λ¬ λ°λλ€.
        - `props`λ μ λ¬λ°μ <u>μμ± κ°μ²΄</u> <br>
        - `state`λ μ»΄ν¬λνΈμ <u>κΈ°μ‘΄ μν</u> <br>
            β· propsλ₯Ό μ΄μ©ν΄ μλ‘μ΄ μνλ₯Ό λ§λ€μ΄μ λ¦¬ν΄ <br>
```javascript
import { Component } from 'react'

type Props = { level: string };

type State = { discountRate: number; customerName: string };

export default class Child extends Component<Props, State> {
    state: State = { discountRate: 0, customerName: "νκΈΈλ" };

    static getDerivedStateFromProps(props: Props, state: State) {
        let tempRate = 0;
        if (props.level === "GOLD") tempRate = 0.15;
        else if (props.level === "SILVER") tempRate = 0.1;
        else if (props.level === "BRONZE") tempRate = 0.05;
        else tempRate = 0.02;

        // μμ±μΌλ‘ μ λ¬λ°μ level κ°μ λ°λΌμ discountRate μν κ°μ΄ λ¬λΌμ§λ€.
        // κΈ°μ‘΄ μνλ λ³κ²½νμ§ μμμΌ νλ―λ‘ μ κ° μ°μ°μλ₯Ό μ¬μ©.
        return { ...state, discountRate: tempRate };

        render() {
            return (
                <div>
                    {this.state.customerName}λμ ν μΈμ¨μ {this.state.discountRate * 100}% μλλ€.
                </div>
            );
        }
    }
}
```

- render λ©μλ <br>
    - <b>μ»΄ν¬λνΈ</b>λ₯Ό `'κ°μ DOM'μΌλ‘ λ λλ§`νλ λ©μλ <br>
        - <u>μν</u>μ <u>μμ±</u>μ μ΄μ©ν΄ 'λ¦¬μ‘νΈ μλ¦¬λ¨ΌνΈ' λ±μΌλ‘ λ λλ§νλ©°, <u>ν¨μ μ»΄ν¬λνΈμ λ¦¬ν΄λ¬Έ</u> λΆλΆμ ν΄λΉ <br>
        (μ΄ ν¨μλ μνμ μμ±μ΄ λ³κ²½λμ§ μμλ€λ©΄ κ°μ κ²°κ³Όλ₯Ό λ¦¬ν΄ν΄μΌ νλ€. [μ μμ render() λ©μλ μ°Έμ‘°)] <br>

- componentDidMount λ©μλ <br>
    - μ»΄ν¬λνΈμ λ§μ΄νΈκ° μλ£λκ³  λμ λΈλΌμ°μ  DOMμ νΈλ¦¬μκΉμ§ λ°μμ΄ λ ν νΈμΆλλ λ©μλ <br>
    - <b>λΈλΌμ°μ  DOMμ΄ μμ±λ νμ μ€νν΄μΌ νλ 'μ΄κΈ°ν' μμμ νκΈ°μ μ ν©</b>
        - ex) HTTPλ‘ λ°±μλ APIλ₯Ό νΈμΆνμ¬ κ·Έ κ²°κ³Όλ₯Ό λ°μμ this.setState()λ©μλλ‘ μνλ₯Ό λ³κ²½νκ³  λΈλΌμ°μ  DOMμ μΆλ ₯ν΄μΌ νλ μ΄κΈ°ν μμμ΄ νμνλ€λ©΄ μ΄ μλͺμ£ΌκΈ° λ©μλλ₯Ό μ΄μ© <br>

2. μ»΄ν¬λνΈκ° μλ°μ΄νΈλ  λ <br>

- getDerivedStateFromProps μ μ  λ©μλ <br>
    - μ»΄ν¬λνΈκ° λ§μ΄νΈλ  λμ λμΌ <br>

- shouldComponentUpdate λ©μλ <br>
    - λλλ§ μ±λ₯μ μ΅μ νν  λ μμ£Ό μ¬μ© <br>
    - μ΄ λ©μλμ μ λ¬λλ μΈμλ μλ‘­κ² μ λ¬λλ μμ±(nextProps)κ³Ό μν(nextState)μ΄λ©°, λ¦¬ν΄κ°μ boolean value(true/false)μ΄λ€. <br>
        - μ΄ λ©μλμ λ¦¬ν΄κ°μ΄ trueλ©΄ λ€μ λ¨κ³μ μλͺμ£ΌκΈ° λ©μλ(render)κ° νΈμΆλλ©°, falseλ©΄ λ€μ λ¨κ³μ μλͺμ£ΌκΈ°λ‘ λμ΄κ°μ§ μλλ€.  <br>
        β· μ΄ λ©μλμμλ μλ‘­κ² μ λ¬λ μμ±κ³Ό μνλ₯Ό κΈ°μ‘΄μ μμ±(this.props)κ³Ό μν(this.state)μ λΉκ΅νμ¬ λ€μ λ λλ§ν μ§λ₯Ό κ²°μ  <br>
```javascript
shouldComponentUpdate(nextProps: Props, nextState: State): boolean {

}
```
β  μ΄λ λ©μλμμ 'κΉμ λΉκ΅'λ₯Ό μννλ©΄ λ§μ μμ€ν λ¦¬μμ€κ° μ¬μ©λλ―λ‘ λ λλ§ μ±λ₯ μ΅μ νκ° νλ€μ΄μ§λ€. <br>
β μ΄ λ¬Έμ λ₯Ό ν΄κ²°νκΈ° μν΄ <u>immer λΌμ΄λΈλ¬λ¦¬</u>, <u>μ κ° μ°μ°μ</u>λ₯Ό μ΄μ©ν΄ `λΆλ³μ±`μ κ°μ§λ λ³κ²½ μμμ μνν΄μΌ νλ€. <br>

- getSnapshotBeforeUpdate λ©μλ <br>
    - μ΄ λ©μλκ° μ€νλλ μμ μ render() λ©μλκ° νΈμΆλμ΄ κ°μ DOMμΌλ‘ μ°κΈ° μμμ΄ μλ£λ ν, λΈλΌμ°μ  DOMμ μλ°μ΄νΈλκΈ° μ μ΄λ€. (μ΄ λ©μλλ₯Ό λ§μ΄ μ¬μ©νλ νΈμ μλλ€.) <br>
        - λ³κ²½ μ μ DOM μν μ λ³΄λ₯Ό νλνμ¬ `μ€λμ· κ°`μΌλ‘ λ¦¬ν΄ν΄μ componentDidUpdate()λ©μλμ μΈ λ²μ§Έ μΈμ(snapshot)λ‘ λ°μλΌ λ μ΄μ© <br>
```javascript
getSnapshotBeforeUpdate(prevProps, prevState) {
    // μ΄ λ©μλμ λ¦¬ν΄κ°μ΄ componentDidUpdate λ©μλμ μΈ λ²μ§Έ μΈμλ‘ μ λ¬λλ€.
}
```

- componentDidUpdate λ©μλ <br>
    - μ΄ λ©μλκ° μ€νλλ μμ μ λΈλΌμ°μ  DOMκΉμ§ μλ°μ΄νΈκ° μλ£λ νμ΄λ€. <br>
    - μ΄ λ©μλλ μ»΄ν¬λνΈκ° μλ°μ΄νΈλκ³  <u>DOMμ λ³κ²½νκ³ μ ν  λ</u> μ¬μ© <br>
    β· νμ¬μ μμ±(this.props)κ³Ό μν(this.state)λ₯Ό μ΄μ μ μμ±, μνμ λΉκ΅νμ¬ μ°¨μ΄κ° μλ€λ©΄ <u>μΈλΆ APIλ₯Ό μμ²­</u>νλ λ±μ μμμ μννλλ‘ νμ©ν  μ μλ€. <br>
        - getSnapshotBeforeUpdate()λ©μλμμ λ¦¬ν΄ν κ°μ μ΄ λ©μλμ μΈ λ²μ§Έ μΈμμΈ snapshotμΌλ‘ μ λ¬λλ―λ‘, getSnapshotBeforeUpdate()λ©μλμ componentDidUpdate()λ©μλλ ν¨κ» μ¬μ©λλ κ²½μ°κ° λ§λ€. <br>
```javascript
componentDidUpdate(prevProps, prevState, snapshot) {

}
```

3. μ»΄ν¬λνΈκ° μΈλ§μ΄νΈλ  λ

- componentWillUnmount λ©μλ <br>
    - μ΄ λ©μλλ μ»΄ν¬λνΈκ° μ νλ¦¬μΌμ΄μμ μ»΄ν¬λνΈ νΈλ¦¬μμ μ­μ λκΈ° μ§μ μ μ€νλκ³ , μ£Όλ‘ componentDidMount μλͺμ£ΌκΈ° λ©μλμ μ§μ μ΄λ£¨μ΄ μ¬μ© <br>
        - ex) μΉμμΌμ μ΄μ©ν΄ μλ²μ μ°κ²°νλ κ²½μ°, μ»΄ν¬λνΈκ° λ§μ΄νΈλ  λ componentDidMount λ©μλμμ μΈλΆ μλ²λ λ¦¬μμ€μ μ°κ²°νλ©΄ μ»΄ν¬λνΈκ° μΈλ§μ΄νΈλ  λλ componentWillUnmount λ©μλμμ μλ²μμ μ°κ²°μ ν΄μ  νλ€. <br>
            - μΈλΆ λ¦¬μμ€μ μ°κ²°ν κ²½μ°μλ λ°λμ componentWillUnmountμμ κΉ¨λνκ² μ°κ²°μ ν΄μ ν΄μΌ νλ€. κ·Έλ μ§ μμΌλ©΄ λ©λͺ¨λ¦¬ λμ(memory leak)κ° λ°μν  μ μκ³ , λΆνμν μΈλΆ λ¦¬μμ€ μ°κ²°μ΄ λ¨μμκ² λλ€.<br>

<br>

β£ μλͺμ£ΌκΈ° λ©μλ μμ  1 <br>

βΎ 05-04 : src/App.tsx λ³κ²½ β componentDidMount, componentWillUnmount μλͺμ£ΌκΈ° λ©μλλ₯Ό μ΄μ©ν΄ λ¦¬μμ€λ₯Ό μ°κ²°νκ³  ν΄μ  <br> 
```javascript
import { Component } from 'react'
import Clock from './Clock'

type State = {
  formatString: string;
  clockVisible: boolean; 
};

export default class App extends Component<{}, State> {
  state = {
    // HH:mm:ss
    // Hμ mλΆ sμ΄
    formatString: "HH:mm:ss",
    clockVisible: false, // μν μΆκ°
    // -> μ΄ κ°μ΄ trueμΈμ§ falseμΈμ§μ λ°λΌ Clock μ»΄ν¬λνΈκ° λ§μ΄νΈ/μΈλ§μ΄νΈλλλ‘ μμ±
  };

  changeFormat = (format: string) => {
    this.setState({ formatString: format });
  };

  render() {
    return (
      <div className="boxStyle">
        <h2>κ°λ¨ν λμ§νΈ μκ³</h2>
        <button onClick={() => this.setState({ clockVisible: !this.state.clockVisible })}>μκ³ ν κΈνκΈ°</button>
        <hr />
        {this.state.clockVisible ? <Clock formatString={this.state.formatString} /> : ""}
        
      </div>
    );
  }
}
```

βΎ 05-05 : src/Clock.tsx λ³κ²½ β componentDidMount μλͺμ£ΌκΈ° λ©μλμ μΆκ°(1μ΄ κ°κ²©μΌλ‘ μκ°μ΄ λ°λ λλ§λ€ μ½μμ '## tick!'μ μΆλ ₯) <br>
```javascript

Β·Β·Β·Β·Β·

export default class Clock extends Component<Props, State> {
    state = {
        currentTime: new Date(),
    };

    componentDidMount = () => {
        setInterval(() => {
            console.log("## tick!");
            this.setState({ currentTime: new Date() });
        }, 1000);
    };

Β·Β·Β·Β·Β·

}
```

<img src="img/clock_start.jpg" width="780" height="280"> <br>
<img src="img/clock_toggle.jpg" width="780" height="280"> <br>
β· `μκ³ ν κΈνκΈ°`λ₯Ό κ³μ λ²κ°μ ν΄λ¦­νλ©΄ '## tick!'μ΄ μ μ  λΉ λ₯΄κ² μ¦κ°νλ κ²μ λ³Ό μ μλ€. μ΄λ Clock μ»΄ν¬λνΈκ° λ§μ΄νΈ λ  λλ§λ€ setInterval() λ©μλλ‘ 1μ΄λ§λ€ μ€νλλ ν¨μλ₯Ό κ³μν΄μ λ±λ‘νλ©΄μ 1μ΄μ ν λ²λ§ μ€νλΌμΌ ν  ν¨μκ° μμ­ λ²μ© μ€νλκ³  μλ κ²μ΄λ€. <br>

βΎ 05-06 : src/Clock.tsx λ³κ²½ β μ 05-05 λ¬Έμ  ν΄κ²°[componentWillUnmountμ clearInterval() μ¬μ©] <br>
```javascript

Β·Β·Β·Β·Β·

export default class Clock extends Component<Props, State> {
    state = {
        currentTime: new Date(),
    };

    handle: number = 0;

    componentDidMount = () => {
        this.handle = setInterval(() => {
            console.log("## tick!");
            this.setState({ currentTime: new Date() });
        }, 1000);
    };

    componentWillUnmount = () => {
        clearInterval(this.handle);
    };

Β·Β·Β·Β·Β·

}
```

<img src="img/clock_end.jpg" width="780" height="220"> <br>
β· `μκ³ ν κΈνκΈ°` λ²νΌμ μ¬λ¬ λ² ν΄λ¦­ν΄λ ##tick! λ©μμ§λ μκ³κ° λνλ  λ(λ§μ΄νΈλ  λ)λ§ 1μ΄μ ν λ²μ© μΆλ ₯νλ€.
(μκ³κ° μ¬λΌμ§λ©΄ ##tick! λ©μμ§λ μΆλ ₯νμ§ μλλ€.( μ½μμ°½ λ©μμ§ μ μ¦κ°x )) <br>

---
---
---

# **chapter 06**  

## π‘ `React` 

- ν΄λ¦°μ ν¨μ <br>

```javascript
// src/main.tsxμμ App2λ₯Ό μ°Έμ‘°νλλ‘ λ³κ²½
import App from './App2'
```

βΎ 06-06 : Clock2.tsx β useEffectμ setInterval(), clearInterval() μ¬μ© <br>
```javascript
import { useEffect, useState } from 'react'
import DateAndTime from 'date-and-time'

type Props = {
    formatString: string;
};

const Clock2 = (props: Props) => {
    const [currentTime, setCurrentTime] = useState<Date>(new Date());
    useEffect(() => {
        const handle = setInterval(() => {
            console.log("## tick!");
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(handle);
        }
    }, []);

    return (
        <div className="boxStyle">
            <h3>{DateAndTime.format(currentTime, props.formatString)}</h3>
        </div>
    );
};

export default Clock2;
```

βΎ 06-07 : App2.tsx β ClockVisibleμ λΆλ¦¬μΈ μν κ°(true/false)μΌλ‘ λ§μ΄νΈ, μΈλ§μ΄νΈ λ°λ³΅ <br> 

```javascript
import { useState } from 'react'
import Clock2 from './clock2'

const App2 = () => {
    const [formatString, setFomatString] = useState<string>("HH:mm:ss");
    const [clockVisible, setClockVisible] = useState<boolean>(false);

    return (
        <div className="boxStyle">
            <h2>κ°λ¨ν μκ³</h2>
            <button onClick={() => setClockVisible(!clockVisible)}>μκ³ ν κΈνκΈ°</button>
            <hr />
            {clockVisible ? <Clock2 formatString={formatString} /> : ""}
        </div>
    );
};

export default App2;
```

<img src="img/clock2.jpg" width="780" height="180"> <br>
β· Clock2 μ»΄ν¬λνΈκ° λ³΄μ΄μ§ μλ λμμ μ½μμ '## tick!'μ΄ μΆλ ₯λμ§ μλλ€. <br>