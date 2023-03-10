# **chapter 06**  

## π‘ `React` 

--- 
#### [λ¦¬μ‘νΈ ν] 

<br>

- ν¨μ μ»΄ν¬λνΈμ λ¦¬μ‘νΈ ν <br>
  - λ¦¬μ‘νΈ 16.8λ²μ λΆν° λ¦¬μ‘νΈ ν(react-hook)μ΄ μΆκ°λκ³ , μν κ΄λ¦¬μ μ£Όμ μλͺμ£ΌκΈ° μ΄λ²€νΈ κΈ°λ₯μ μ¬μ©ν  μ μκ² λλ©΄μ λλΆλΆ ν¨μ μ»΄ν¬λνΈλ₯Ό μ¬μ© <br>

<br> β§ μλ‘μ΄ νλ‘μ νΈ μμ± <br>
```
cd ..
npm init vite hook-test-app -- --template react-ts
cd hook-test-app
npm install
```

- useState ν <br>
  - `μν`λ₯Ό μ΄μ©νκΈ° μν΄ μ¬μ©νλ ν <br>
```javascript
// getter: μ½κΈ° μ μ©μ μμ±
// setter: μνλ₯Ό λ³κ²½ν  λ μ¬μ©νλ ν¨μ
// StateType: μν λ°μ΄ν°μ νμ
// initialValue: μν μ΄κΉκ°
const [getter, setter] = useState<StateType>(initialValue);
```


βΎ 06-01 : src/main.tsx β src/App.tsxλ₯Ό App01.tsxλ‘ λ³κ²½ λ° App01 μΆκ°(μμ ) <br>
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App01'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

βΎ 06-02 : src/App01.tsx β μν κ΄λ¦¬ λ° λ³κ²½, λ°μΈλ© <br>
```javascript
import { ChangeEvent, useState } from 'react'

function App() {
  const [msg , setMsg] = useState<string>("");

  return (
    <div>
      <input type="text" value={msg} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => setMsg(e.target.value)} />
      <br />
      <span>μλ ₯ λ©μμ§ : {msg}</span>
    </div>
  );
};

export default App;
```

<img src="img/usestate.jpg" width="1000" height="250" /> <br>

- useEffect ν <br>
```javascript
// effectCallback : νμλ‘ μμ±ν΄μΌ νλ ν¨μλ‘, ν΄λ¦°μ ν¨μλ₯Ό λ¦¬ν΄ν  μ μμ΅λλ€.
// depsList : μ νμ μΌλ‘ μ λ¬νλ μμ‘΄ κ°μ²΄ λ°°μ΄ κ°
useEffect(effectCallback[, depsList]);
```
-   
  - effectCallback ν¨μλ useEffect νμ μ¬μ©ν  λ λ°λμ μμ± <br>
    - μ»΄ν¬λνΈκ° λ§μ΄νΈλκ±°λ depsList λ°°μ΄μ μ§μ ν μνλ μμ±μ΄ λ³κ²½λλ©΄ νΈμΆ <br>
      - ν΄λ¦°μ ν¨μλ₯Ό λ¦¬ν΄ν  μ μμΌλ©° ν΄λ¦°μ ν¨μλ μ»΄ν¬λνΈκ° μΈλ§μ΄νΈλ  λ μ€ν <br>

βΎ 06-03 : src/App02.tsx β μλ‘μ΄ μ»΄ν¬λνΈ μΆκ° λ° src/main.tsxμ App02 μΆκ° <br>
β· <u>μ»΄ν¬λνΈ</u>κ° `λ§μ΄νΈ`λκ±°λ `μλ°μ΄νΈ`λ  λ 'effectCallback' ν¨μκ° μ€νλλλ‘ μμ λ₯Ό μμ± <br>
```javascript
// src/main.tsx
Β·Β·Β·Β·Β·
// import App from './App01'
import App from './App02'
Β·Β·Β·Β·Β·
```

```javascript
// src/App02.tsx

import { ChangeEvent, useEffect, useState } from 'react'

const App = () => {
    const [count, setCount] = useState<number>(0);
    const [name, setName] = useState<string>("μμ΄μ ");

    useEffect(() => {
        console.log(`${name}λμ΄ ${count}λ² ν΄λ¦­νμ΅λλ€.`);
    });

    return (
        <div>
            μ΄λ¦ λ³κ²½ :
            <input type="text" value={name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
            <hr />
            <button onClick={() => setCount(count + 1)}>μΉ΄μ΄νΈ 1 μ¦κ°</button>
            <p>
                {name}λμ΄ {count}λ² ν΄λ¦­νμ΅λλ€.
            </p>
        </div>
    );
};

export default App;
```

<img src="img/useeffect.jpg" width="800" height="250" /> <br>
<img src="img/useeffect_2.jpg" width="800" height="250" /> <br>

βΎ 06-04 : src/App02.tsx β depsList μ§μ , countκ° λ°λ λλ§ effectCallbackμ΄ μ€νλλλ‘ μ§μ  <br>
```javascript

Β·Β·Β·Β·Β·

// mount, μΉ΄μ΄νΈκ° λ°λ λλ§
    useEffect(() => {
        console.log(`${name}λμ΄ ${count}λ² ν΄λ¦­νμ΅λλ€.`);
    }, [ count ]);


    Β·Β·Β·Β·Β·

    );
};

export default App;
```

<img src="img/useeffect_depslist.jpg" width="800" height="250" /> <br>
(countκ° λ°λ λλ§ effectCallback ν¨μκ° μ€ν, μ΄λ¦μ λ³κ²½νμμμλ effectcallback ν¨μλ μ€νλμ§ μλλ€.) <br>

βΎ 06-05 : src/App02.tsx β [ ] 'λΉ λ°°μ΄'μ μ λ¬νμ¬ effectCallback ν¨μλ `μ»΄ν¬λνΈκ° λ§μ΄νΈλ  λ`λ§ μ€ν <br>
```javascript

Β·Β·Β·Β·Β·

useEffect(() => {
        console.log(`${name}λμ΄ ${count}λ² ν΄λ¦­νμ΅λλ€.`);
    }, []);

    Β·Β·Β·Β·Β·

    );
};

export default App;
```
<img src="img/useeffect_null_array.jpg" width="800" height="160" /> <br>
(μΉ΄μ΄νΈ λ²νΌμ λλ¬λ μ»΄ν¬λνΈκ° λ§μ΄νΈλ  λλ§ effectCallback ν¨μ μ€ν)

- useEffectμ μ₯μ  <br>
  - ν μ»΄ν¬λνΈ λ΄λΆμ useEffect νμ μ¬λ¬ κ°λ₯Ό μ¬μ©ν  μ μμΌλ©°, μνμ μν κ΄λ ¨ λ‘μ§μ μ€μ¬μΌλ‘ useEffect νμ μμ±ν  μ μμ΄μ κ΄λ ¨λ μ½λλ€μ΄ ν¨κ» λͺ¨μ¬ μμΌλ―λ‘ μ½λλ₯Ό μ΄ν΄νκΈ°κ° νΈλ¦¬νλ€. <br>
  (ν΄λμ€ μ»΄ν¬λνΈ componentDidMount, componentWillUnmount μλͺμ£ΌκΈ° λ©μλλ νλμ©λ§ μμ± κ°λ₯) <br>

<br>

βΎ 06-08 : src/App03.tsx β useEffect μ¬λ¬ κ° μ¬μ© <br>
β src/App02.tsxλ₯Ό λ³΅μ¬ν΄ src/App03.tsxλ₯Ό μμ± <br>
βΆ useEffect νμ λ κ° μμ±νκ³  κ°κ° name, count μνκ° λ³κ²½λ  λμ μ²λ¦¬λ§μ μν <br>
```javascript
import { ChangeEvent, useEffect, useState } from 'react'

const App = () => {
    const [count, setCount] = useState<number>(0);
    const [name, setName] = useState<string>("μμ΄μ ");

    useEffect(() => {
        console.log(`μ΄λ¦ ${name}`);
    }, [name]);

    useEffect(() => {
        console.log(`μΉ΄μ΄νΈ : ${count}`);
    }, [count]);

    useEffect(() => {
        console.log(`${name}λμ΄ ${count}λ² ν΄λ¦­νμ΅λλ€.`);
    }, []);

    return (
        <div>
            μ΄λ¦ λ³κ²½ :
            <input type="text" value={name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
            <hr />
            <button onClick={() => setCount(count + 1)}>μΉ΄μ΄νΈ 1 μ¦κ°</button>
            <p>
                {name}λμ΄ {count}λ² ν΄λ¦­νμ΅λλ€.
            </p>
        </div>
    );
};

export default App;
```

```javascript
// main.tsx μμ 
import App from './App03'
```

<img src="img/useeffect2count.jpg" width="800" height="220" /> <br>

<br>

- λ¦¬μ‘νΈ νμ μλͺμ£ΌκΈ° <br>
βΆ ν΄λμ€ μ»΄ν¬λνΈμ²λΌ ν¨μ μ»΄ν¬λνΈλ λλ¦μ μλͺμ£ΌκΈ°λ₯Ό κ°μ§κ³  μμ§λ§, κ΅¬μ‘°μ μΈ μ°¨μ΄ λλ¬Έμ ν΄λμ€ μ»΄ν¬λνΈμ μλͺμ£ΌκΈ°μλ λΆλͺν λ€λ₯΄λ€. <br>
  - μ»΄ν¬λνΈκ° λ§μ΄νΈλ  λ <br>
    - λ μ΄μ§ μ΄κΈ°ν: λ μ΄μ§ μ΄κΈ°ν(lazy initializer)λ₯Ό μ€ννλ€. λ μ΄μ§ μ΄κΈ°νλ useState()λ useReducerμ μ λ¬νλ ν¨μμ΄λ€. μ΄ ν¨μλ <u>'λΉλκΈ°'λ‘ μ§μ°λμ΄ νΈμΆ</u> <br>
      - μΌλ°μ μΈ μ΄κΈ°ν
      ```javascript
      const count = useState<number>(0);
      ```
      - λ μ΄μ§ μ΄κΈ°ν
      ```javascript
      const count2 = useState<number>(() => { return 0; })
      ```
      β μ΄ λ¨κ³λ μ»΄ν¬λνΈκ° λ§μ΄νΈλ  λλ§ μ€ν. νΉν λ μ΄μ§ μ΄κΈ°νλ₯Ό μ€νν  λ μΈμλ‘ μ λ¬λλ ν¨μ λ΄λΆμμ μ€νλλ μ½λλ λ§μ΄νΈλ  λλ§ μ€ν. <br>
      β μνλ‘ μ¬μ©ν  λ°μ΄ν°λ₯Ό λμΆνκΈ° μν΄ λ³΅μ‘ν λ‘μ§μ΄ νμν κ²½μ°μ λ μ΄μ§ μ΄κΈ°νκ° μ μ©νλ€. <br>
    - λ λλ§: ν¨μ μ»΄ν¬λνΈμ λ΄λΆ μ½λκ° μ€ν. μ΄λ κ°μ DOMμ λν μ°κΈ° μμμ μννλ€. <br>
    - κ°μ DOM μλ°μ΄νΈ: κ°μ DOM νΈλ¦¬λ₯Ό μλ°μ΄νΈνλ€. <br>
    - LayoutEffects μ€ν: useLayoutEffect νμ μ§μ ν ν¨μλ₯Ό μ€ννλ€. (useLayoutEffect νμ λ€μ νμ΄μ§μ Noteμμ μμΈν μ€λͺ) <br>
    - λΈλΌμ°μ  DOM μλ°μ΄νΈ: λΈλΌμ°μ  DOMμ μλ°μ΄νΈ. μ΄ λ¨κ³κ° μλ£λλ©΄ λΈλΌμ°μ  νλ©΄μ κ°±μ μ΄ μλ£λ μνκ° λλ€. <br>
    - Effects μ€ν: useEffect νμ μ§μ ν ν¨μκ° νΈμΆ <br>
  - μ»΄ν¬λνΈκ° μλ°μ΄νΈλ  λ <br>
  βΆ μ΄ λ¨κ³λ λΆλͺ¨ μ»΄ν¬λνΈκ° λ€μ λ λλ§λκ±°λ μ»΄ν¬λνΈ μμ μ μν, μμ±μ΄ λ°λ λ μΌμ΄λλ€. <br>
    - λ λλ§: μ»΄ν¬λνΈκ° λ§μ΄νΈλ  λμ κ°λ€. <br>
    - κ°μ DOM μλ°μ΄νΈ: μ»΄ν¬λνΈκ° λ§μ΄νΈλ  λμ κ°λ€. <br>
    - LayoutEffect ν΄λ¦°μ: useLayoutEffect νμ λ λ²μ§Έ μΈμ(μμ‘΄ κ°μ²΄ λ°°μ΄: depsList) μ λ¬ μ¬λΆμ λ°λΌ λ¦¬ν΄ν ν΄λ¦°μ ν¨μκ° νΈμΆ. <br>
    - LayoutEffects μ€ν: useLayoutEffect νμ λ λ²μ§Έ μΈμ μ λ¬ μ¬λΆμ λ°λΌ μ§μ ν ν¨μλ₯Ό μ€ν <br>
    - λΈλΌμ°μ  DOM μλ°μ΄νΈ: μ»΄ν¬λνΈκ° λ§μ΄νΈλ  λμ κ°λ€. <br>
    - Effects ν΄λ¦°μ: useEffect νμ λ λ²μ§Έ μΈμ μ λ¬ μ¬λΆμ λ°λΌ λ¦¬ν΄ν ν΄λ¦°μ ν¨μκ° νΈμΆ <br>
    - Effects μ€ν: useEffect νμ λ λ²μ§Έ μΈμ μ λ¬ μ¬λΆμ λ°λΌ μ§μ ν ν¨μλ₯Ό μ€ν <br>
  - μ»΄ν¬λνΈκ° μΈλ§μ΄νΈλ  λ <br>
    - LayoutEffects ν΄λ¦°μ: useLayoutEffect νμ΄ λ¦¬ν΄νλ ν΄λ¦°μ ν¨μκ° νΈμΆ <br>
    - Effects ν΄λ¦°μ: useEffect νμ΄ λ¦¬ν΄νλ ν΄λ¦°μ ν¨μκ° νΈμΆ <br>

  οΌ useLayoutEffect νμ΄λ? <br>
  β useEffectμ μ μ¬ν μ΄λ¦μ useLayoutEffectλΌλ νμ΄ μλ€. LayoutEffectλ useLayoutEffect νμ μν΄ μ€νλλ μ½λ°± ν¨μμ΄λ€. useEffect νμ μ½λ°± ν¨μλ μ»΄ν¬λνΈκ° μμ ν λ§μ΄νΈλ μν©, μ¦ λΈλΌμ°μ κ° DOMμ λ λλ§ μμ(paint)μ΄ μλ£λ νμ μ€νλλ λ°λ©΄ useLayoutEffect νμ μ½λ°± ν¨μλ μ»΄ν¬λνΈκ° λ λλ§λκ³  λΈλΌμ°μ  DOMμμμ λ λλ§μ΄ μ€νλκΈ° μ μ νΈμΆλλ©° `λκΈ°μ μΌλ‘λ§ μ€ν`νλ€. <br>
  β λ°λΌμ λ³΅μ‘ν μ²λ¦¬ κ³Όμ μ΄λ μΈλΆ λ°±μλ APIλ₯Ό μ½μ΄μ€λ λ± λλΆλΆμ μμμ useEffect νμ μ¬μ©ν  κ²μ κΆμ₯νλ©°, κ°λ¨ν μμμ΄λ©΄μ λ€μ λ λλ§μΌλ‘ μΈν νλ©΄μ κΉλΉ‘μμ μ¬μ©μμκ² λ³΄μ¬μ£Όκ³  μΆμ§ μμ λλ useLayoutEffect νμ μ¬μ©νλ€. <br>

  ```javascript
  useEffect(() => {
    //-----------
    // μμ­ 1
    //-----------

  // ν΄λ¦°μ ν¨μ
  return () => {
    //----------
    // μμ­ 2
    //----------
    };
  }, depsList);
  ```
  β μ»΄ν¬λνΈκ° λ§μ΄νΈλ  λ: μμ­1μ΄ ν­μ μ€ν <br>
  β μ»΄ν¬λνΈκ° μΈλ§μ΄νΈλ  λ: μμ­2κ° ν­μ μ€ν <br>
  β μ»΄ν¬λνΈκ° μλ°μ΄νΈλ  λ: λ€μ λ€μμ μΈ κ°μ§ κ²½μ°λ‘ λλλ€. <br>
    - λ λ²μ§Έ μΈμμΈ depsListλ₯Ό μ λ¬νμ§ μμ λ <br>
      - μ»΄ν¬λνΈκ° μλ°μ΄νΈλ  λλ§λ€ μμ­2μμ μμ­1μμΌλ‘ μ€ν <br>
    - λ λ²μ§Έ μΈμλ‘ λΉ λ°°μ΄([ ])μ μ λ¬ν  λ <br>
      - μμ­1, μμ­2 λͺ¨λ μ€νλμ§ μμ <br>
    - λ λ²μ§Έ μΈμλ‘ [dep1, dep2]μ κ°μ΄ μμ‘΄ κ°μ²΄ λ°°μ΄μ μ§μ νμ¬ μ λ¬ν  λ <br>
      - μ§μ ν μμ‘΄ κ°μ²΄(dep1 λλ dep2)κ° λ°λ λλ§ μμ­2μμ μμ­1μμΌλ‘ μ€ν <br>