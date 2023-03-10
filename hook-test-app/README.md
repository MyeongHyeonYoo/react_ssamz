# **chapter 06**  

## 💡 `React` 

--- 
#### [리액트 훅] 

<br>

- 함수 컴포넌트와 리액트 훅 <br>
  - 리액트 16.8버전부터 리액트 훅(react-hook)이 추가됐고, 상태 관리와 주요 생명주기 이벤트 기능을 사용할 수 있게 되면서 대부분 함수 컴포넌트를 사용 <br>

<br> ♧ 새로운 프로젝트 생성 <br>
```
cd ..
npm init vite hook-test-app -- --template react-ts
cd hook-test-app
npm install
```

- useState 훅 <br>
  - `상태`를 이용하기 위해 사용하는 훅 <br>
```javascript
// getter: 읽기 전용의 속성
// setter: 상태를 변경할 때 사용하는 함수
// StateType: 상태 데이터의 타입
// initialValue: 상태 초깃값
const [getter, setter] = useState<StateType>(initialValue);
```


◾ 06-01 : src/main.tsx → src/App.tsx를 App01.tsx로 변경 및 App01 추가(수정) <br>
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

◾ 06-02 : src/App01.tsx → 상태 관리 및 변경, 바인딩 <br>
```javascript
import { ChangeEvent, useState } from 'react'

function App() {
  const [msg , setMsg] = useState<string>("");

  return (
    <div>
      <input type="text" value={msg} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => setMsg(e.target.value)} />
      <br />
      <span>입력 메시지 : {msg}</span>
    </div>
  );
};

export default App;
```

<img src="img/usestate.jpg" width="1000" height="250" /> <br>
<video src="img/usestate_video.mp4" preload autoplay muted loop></video> <br>

- useEffect 훅 <br>
```javascript
// effectCallback : 필수로 작성해야 하는 함수로, 클린업 함수를 리턴할 수 있습니다.
// depsList : 선택적으로 전달하는 의존 객체 배열 값
useEffect(effectCallback[, depsList]);
```
-   
  - effectCallback 함수는 useEffect 훅을 사용할 때 반드시 작성 <br>
    - 컴포넌트가 마운트되거나 depsList 배열에 지정한 상태나 속성이 변경되면 호출 <br>
      - 클린업 함수를 리턴할 수 있으며 클린업 함수는 컴포넌트가 언마운트될 때 실행 <br>

◾ 06-03 : src/App02.tsx → 새로운 컴포넌트 추가 및 src/main.tsx에 App02 추가 <br>
▷ <u>컴포넌트</u>가 `마운트`되거나 `업데이트`될 때 'effectCallback' 함수가 실행되도록 예제를 작성 <br>
```javascript
// src/main.tsx
·····
// import App from './App01'
import App from './App02'
·····
```

```javascript
// src/App02.tsx

import { ChangeEvent, useEffect, useState } from 'react'

const App = () => {
    const [count, setCount] = useState<number>(0);
    const [name, setName] = useState<string>("아이유");

    useEffect(() => {
        console.log(`${name}님이 ${count}번 클릭했습니다.`);
    });

    return (
        <div>
            이름 변경 :
            <input type="text" value={name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
            <hr />
            <button onClick={() => setCount(count + 1)}>카운트 1 증가</button>
            <p>
                {name}님이 {count}번 클릭했습니다.
            </p>
        </div>
    );
};

export default App;
```

<img src="img/useeffect.jpg" width="800" height="250" /> <br>
<img src="img/useeffect_2.jpg" width="800" height="250" /> <br>

◾ 06-04 : src/App02.tsx → depsList 지정, count가 바뀔 때만 effectCallback이 실행되도록 지정 <br>
```javascript

·····

// mount, 카운트가 바뀔 때만
    useEffect(() => {
        console.log(`${name}님이 ${count}번 클릭했습니다.`);
    }, [ count ]);


    ·····

    );
};

export default App;
```

<img src="img/useeffect_depslist.jpg" width="800" height="250" /> <br>
(count가 바뀔 때만 effectCallback 함수가 실행, 이름을 변경하였음에도 effectcallback 함수는 실행되지 않는다.) <br>

◾ 06-05 : src/App02.tsx → [] '빈 배열'을 전달하여 effectCallback 함수는 `컴포넌트가 마운트될 때`만 실행 <br>
```javascript

·····

useEffect(() => {
        console.log(`${name}님이 ${count}번 클릭했습니다.`);
    }, []);

    ·····

    );
};

export default App;
```
<img src="img/useeffect_null_array.jpg" width="800" height="160" /> <br>
(카운트 버튼을 눌러도 컴포넌트가 마운트될 때만 effectCallback 함수 실행)
