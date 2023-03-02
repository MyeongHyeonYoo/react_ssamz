# **chapter 05**  

## 💡 `React` 

--- 
#### [리액트 클래스 컴포넌트]
- 클래스 컴포넌트는 함수 컴포넌트에서는 지원하지 않는 다양한 `생명주기 이벤트 훅`들을 제공 <br>
- **리액트**는 한 프로젝트에서 `클래스 컴포넌트`와 `함수 컴포넌트`를 혼용하기도 한다. <br>
- 리액트 클래스 컴포넌트는 React.Component<PropsType, StateType>을 상속받도록 작성 <br>
    - 만일 속성이나 상태를 사용하지 않는다면 제네릭 문법 부분을 생략하거나 { }와 같이 비어있는 객체로 지정할 수 있다. <br>

```javascript
// [ React 클래스 컴포넌트의 기본적인 형태 ]
import React, { Component } from 'react'

// 속성의 타입
type Props = {}

// 상태의 타입
type State = {}

export default class Test extends Component<Props, State> {
    state = {}
    render() {
        return (
            <div>Test</div>
        )
    }
}

// [ 속성만 사용하는 React 클래스 컴포넌트 형태 예 ]
import React, { Component } from 'react'

type TestProps = {
    name: string;
    age: number;
}

export default class Test extends Component<TestProps> {
    render() {
        return <div>{this.props.name}님의 나이는 {this.props.age}입니다.</div>;
    }
}
```

<br>

- 전달받은 '속성'은 this.props.name과 같이 `this` 식별자를 이용해 컴포넌트 인스턴스의 props 속성을 이용 <br>
- '상태'는 this.state.name의 형식으로 접근 가능 <br>

```javascript
// [ 상태만 사용하는 React 클래스 컴포넌트 형태 예 ]
import React, { Component } from 'react'

type TestState = {
    name: string;
};

export default class Test extends Component<{ }, TestState> {
    state: TestState = {
        name: "홍길동",
    };

    render() {
        return <div>이름은 {this.state.name}입니다.</div>;
    }
}
```

<br>

- 속성으로 함수와 메서드를 전달할 때는 함수 컴포넌트의 속성을 정의할 때와 마찬가지로 (format: string) => void와 같은 형태를 사용 <br>
    - 만일 <u>인자 형식</u>과 <u>리턴값의 형식</u>을 알 수 없다면 `Function`을 지정 <br>

```javascript
// [ 속성으로 함수, 메서드를 전달하는 경우 ]
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
                <button onClick={(e) => this.props.changeFormat("HH:mm:ss")}>적용</button>
            </div>
        );
    }
}
```

```
VSCode의 확장팩 [ES7+React/Redux/React-Native snippets] 활용

◈ tsrafc, tsrafce: Typescript(ts) 기반의 React Arrow Function Component(rafc) 코드 조각을 생성
   (끝에 e가 붙은 것은 export 구문까지 생성)

◈ tsrcc, tsrce: Typescript(ts) 기반의 React Class Component(rcc) 코드 조각을 생성
   (끝에 e가 붙은 것은 export 구문까지 생성)

◈ tsrfc, tsrfce: Typescript(ts) 기반의 React Function Component(rfc) 코드 조각을 생성
   (끝에 e가 붙은 것은 export 구문까지 생성)


[참고]
https://github.com/dsznajder/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md
```

<br>

♧ 새 프로젝트 생성 <br>
``` javascript
cd ..
npm init vite clock-app -- --template react-ts
cd clock-app
npm install
npm install date-and-time // 시간을 HH:mm:ss 형식으로 출력하기 위한 라이브러리
```

☆ App 컴포넌트 <br>
- 상태: formatString(시간을 보여주는 형식 문자열) <br>

<br>

☆ Clock 컴포넌트
- 상태: currentTime(현재 시각을 나타내는 정보) <br>
- 속성: formatString(App 컴포넌트의 상태를 속성으로 전달 받음) <br>
- 기능: 1초마다 시간을 갱신하도록 componentDidMount 생명주기 이벤트를 사용 <br>

<br>

◾ 05-01 : src/Clock.tsx → 새로운 컴포넌트 작성 <br>
- date-and-time 라이브러리 사용(HH:mm:ss 형식으로 시간 정보 출력) <br>
- componentDidMount 생명주기 메서드에서 컴포넌트가 마운트된 후에 1초 간격으로 시간 상태를 변경하도록 setInterval 함수를 호출, 인자로 전달하는 함수 내에서 this.setState()메서드를 사용해 상태를 변경 <br>

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

◾ 05-02 : src/App.tsx → Clock 컴포넌트에 formatString 속성을 전달 <br>
```javascript
import { Component } from 'react'
import Clock from './Clock'

type State = {
  formatString: string;
};

export default class App extends Component<{}, State> {
  state = {
    // HH:mm:ss
    // H시 m분 s초
    formatString: "HH:mm:ss",
  };

  render() {
    return (
      <div className="boxStyle">
        <h2>간단한 디지털 시계</h2>
        <hr />
        <Clock formatString={this.state.formatString} />
      </div>
    );
  }
}
```

◾ 05-03 : src/index.css → 스타일 지정 <br> 
```css
.boxStyle {
  border: solid 1px gray;
  padding: 5px;
  margin: 5px;
}
```

<img src="img/clock.jpg" width="780" height="330"> <br>