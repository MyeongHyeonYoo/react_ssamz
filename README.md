# **원쌤의 리액트 퀵스타트 with 타입스크립트** 

## 💡 `React` 

--- 

## ◾ **chapter 01**  
#### [example]
◾ sample1 : Hello World!!! <br>
◾ sample2 : App 컴포넌트의 자식 컴포넌트 - Title, TodoList <br>

## ◾ **chapter 02**  

#### [ES6 문법]
◾ 02-01 : Hello John!! <br>
◾ 02-02 : let 키워드 <br>
◾ 02-03 : const 키워드 - 속성 변경 허용 <br>
◾ 02-04 : const 키워드 - 재할당 허용하지 않는다. (메모리 주소의 변경 불가) <br>
◾ 02-05 : 기본 파라미터(default parameter) <br>
◾ 02-06 : 가변 파라미터(rest parameter) <br>
◾ 02-07 : 구조 분해 할당(destructuring assignment) <br>
◾ 02-08 : 구조 분해 할당(destructuring assignment) - 함수 파라미터 <br>
◾ 02-09 : 화살표 함수(arrow function) <br>
◾ 02-10 : this 객체 <br>
◾ 02-11 : this 객체2 <br>
◾ 02-12 : bind(), apply(), call() 메서드 활용 <br>
◾ 02-13 : 중첩 함수에서의 this <br>
◾ 02-14 : 중첩 함수에서의 this (bind(), apply(), call() 이용) <br>
◾ 02-15 : 화살표 함수의 this <br>
◾ 02-16 : 객체 리터럴 <br>
◾ 02-17 : 새로운 메서드 표기법 <br>
◾ 02-18 : 탬플릿 리터럴(template literal) [역따옴표 == backquoto: `] <br>
◾ 02-19 : 모듈(modules) - export / export default 구문 <br>
◾ 02-20 : 모듈(modules) 사용 - import <br>
◾ 02-21 : 프로미스(promise) <br>
◾ 02-22 : 프로미스(promise) 체인 <br>
◾ 02-23 : 얕은 복사(Shallow Copy)와 전개 연산자(spread operator) <br>
◾ 02-24 : 클래스(class) <br>

#### [타입스크립트]
◾ sample : test <br>
◾ 02-27 : any[] 타입 [배열] <br>
◾ 02-28 : 제네릭 타입 <br>
◾ 02-29 : 타입 별칭(type alias) <br>
◾ 02-30 : 타입 별칭 안 타입 별칭 <br>
◾ 02-31 : 유니온(union type) 타입 ( | ) - 단일 <br>
◾ 02-32 : 유니온(union type) 타입 ( | ) - 복수 <br>
◾ 02-33 : 인터섹션(intersection type) 타입 ( & ) <br>
◾ 02-34 : 열거형(enum) <br>
◾ 02-35 : 인터페이스(interface) <br>
◾ 02-36 : 인터페이스(interface) 중복 정의 => 병합된 하나의 인터페이스 <br>
◾ 02-37 : 인터페이스(interface) 상속(extends) <br>

## ◾ **chapter 03**  - <i>helloapp</i>

#### [리액트 시작하기 & Vite]
◾ 03-01 : src/App.tsx → 코드 조각 작성(함수 컴포넌트) <br>
◾ 03-02 : src/main.tsx → 구조 확인('./App' 상대경로로부터 import) <br>
◾ 03-03 : index.html → id가 root인 요소 찾기 <br>
◾ 03-04 : src/App.tsx 변경 → JSX(JavaScript XML) 자바스크립트 확장 문법 활용 / { } 사용  <br>
◾ 03-05 : src/App.tsx 변경 → 함수 추가(addResult) & return 값 활용 <br>
◾ 03-06 : src/index.css → css 코드 추가 <br>
◾ 03-07 : src/main.tsx 변경 → 볼드체 추가 <br>
◾ 03-08 : src/App.tsx 변경 → CSS 클래스 지정 <br>
◾ 03-09 : src/App.tsx 변경 → { } 내에 보간된 HTML '문자열'은 인코딩 된다. <br>
◾ 03-10 : src/CountryList.tsx → 컴포넌트 추가 <br>
◾ 03-11 : src/App.tsx 변경 → CountryList 컴포넌트 추가 <br>
◾ 03-12 : src/App.tsx 변경 → App 컴포넌트에 CountryList의 데이터 선언, 속성을 이용해 CountryList로 전달 <br>
◾ 03-13 : src/CountryList.tsx 변경 → countries 속성으로 (부모)데이터 전달 <br>
◾ 03-14 : src/CountryItem → CountryList 세분화 <br>
◾ 03-15 : src/CountryList.tsx 변경 → CountryItem 컴포넌트 렌더링 / 컴포넌트 세분화 <br>
◾ 03-16 : src/App.tsx 변경 → 상태 정의, 상태를 속성으로 전달 <br>

## ◾ **chapter 04**  - <i>helloapp</i>

#### [리액트 컴포넌트]
◾ 04-01 : src/styles.ts → 스타일 정보를 지정하는 소스 코드 파일 추가(인라인 스타일 적용) <br>
◾ 04-02 : src/App.tsx 변경 → App 컴포넌트에 styles(CSS) 적용  <br>
◾ 04-03 : src/CountryItem.tsx 변경 → CountryItem컴포넌트에 styles(CSS) 적용 <br>
◾ 04-04 : src/App.module.css → CSS 모듈 추가 <br>
◾ 04-05 : src/App.tsx → App 컴포넌트 변경(모듈 적용) <br>
◾ 04-06 : src/Footer.tsx → styled-components 사용 <br>
◾ 04-07 : src/App.tsx 변경 → Footer 사용 <br>
◾ 04-08 : src/Buttons.tsx → styled-components로 작성한 컴포넌트 스타일 확장 <br>
◾ 04-09 : src/App.tsx 변경 → Buttons 사용 <br>

## ◾ **chapter 04**  - <i>proptypes-test</i>

#### [리액트 컴포넌트]
◾ 04-10 : src/Calc.tsx → 타입스크립트로 정적 타입의 속성을 전달 <br>
◾ 04-11 : src/App.tsx → Calc 사용 <br>
◾ 04-12 : src/Calc.tsx 변경 → propTypes 적용, propTypes 정적 멤버 추가 <br>
◾ 04-13 : src/App.tsx 변경 → state 값 변경하여 확인 <br>
◾ 04-14 : src/Calc.tsx 변경 → calcChecker 함수에 추가(사용자 정의 유효성 검증 추가) <br>
◾ 04-15 : src/App.tsx 변경 → state 값 변경하여 확인 <br>
◾ 04-16 : src/Calc.tsx 변경 → 속성의 기본값 설정(default props) <br>
◾ 04-17 : src/App.tsx 변경 → y와 oper 속성 사용하지 않도록 코드 변경(x속성만 전달) <br>

## ◾ **chapter 04**  - <i>events-test</i>

#### [리액트 컴포넌트]
◾ 04-18 : src/App1.tsx → 이벤트 적용 예제 작성 <br>
◾ 04-19 : src/main.tsx → App1 import <br>
◾ 04-20 : src/App1.tsx 변경 → 같은 state를 여러 번 변경하면 생기는 문제점 확인 <br>
◾ 04-21 : src/App2.tsx → 제어 컴포넌트 확인 <br>
◾ 04-22 : src/main.tsx 변경 → App2 사용 <br>
◾ 04-23 : src/App2.tsx 변경 → 이벤트 핸들러 사용 <br>
◾ 04-24 : src/App3.tsx → HTML DOM 요소에 직접 접근(defaultValue, ref 바인딩) <br>
◾ 04-25 : src/main.tsx → App3 사용 <br>

## ◾ **chapter 04**  - <i>immutables-test</i>

#### [리액트 컴포넌트]
◾ 04-26 : src/main.tsx → 복잡한 트리 구조 객체를 정의 <br>

## ◾ **chapter 04**  - <i>todolist-app</i>

#### [리액트 컴포넌트]
◾ 04-27 : src/AppContainer.tsx → 상태 정의, 메서드(상태 변경 메서드) 정의 / 상태를 변경할 때 immer를 통한 불변성 사용 <br>
◾ 04-28 : src/components/App.tsx → AppContainer의 Type import 및 속성 타입 정의, InputTodo, TodoList 컴포넌트 정보를 속성으로 전달 <br>
◾ 04-29 : src/components/InputTodo.tsx → 속성으로 addTodo 메서드 전달 받아 속성의 타입 정의, <br>
사용자의 입력 값을 받아내기 위해 자체적인 todo 상태 보유(제어 컴포넌트 구조 구현) <br>
◾ 04-30 : src/components/TodoList.tsx → 속성으로 전달 받은 todoList 배열 데이터를 이용해 TodoListItem 컴포넌트를 반복 렌더링 <br>
속성으로 전달받은 deleteTodo, toggleDone 메서드를 다시 TodoListItem 컴포넌트로 전달 <br>
◾ 04-31 : src/components/TodoListItem.tsx → todoList의 아이템 한 건(todoItem)을 속성으로 전달받아 렌더링. <br>
삭제 버튼, todo 항목 클릭 시 이벤트 발생하면 속성으로 전달 받은 deleteTodo, toggleDone 메서드 호출 <br>
◾ 04-32 : src/index.css → 기본 스타일 지정 <br>
◾ 04-33 : src/main.tsx → AppContainer Import <br>

## ◾ **chapter 05**  - <i>clock-app</i>

#### [리액트 클래스 컴포넌트]
◾ 05-01 : src/Clock.tsx → date-and-time 라이브러리 사용, componentDidMount 생명주기 메서드 사용 <br>
◾ 05-02 : src/App.tsx → Clock 컴포넌트에 formatString 속성을 전달 <br>
◾ 05-03 : src/index.css → 스타일 지정 <br> 
◾ 05-04 : src/App.tsx 변경 → componentDidMount, componentWillUnmount 생명주기 메서드를 이용해 리소스를 연결하고 해제 <br> 
◾ 05-05 : src/Clock.tsx 변경 → componentDidMount 생명주기 메서드에 추가(1초 간격으로 시간이 바뀔 때마다 콘솔에 '## tick!'을 출력) <br>
◾ 05-06 : src/Clock.tsx 변경 → 위 05-05 문제 해결[componentWillUnmount에 clearInterval() 사용] <br>

## ◾ **chapter 05**  - <i>chatting-app</i>

#### [리액트 클래스 컴포넌트]
◾ 05-07 : src/Chatting.tsx → 컴포넌트 추가 <br>
◾ 05-08 : src/App.tsx → Chatting 컴포넌트 임포트하여 렌더링 <br>
◾ 05-09 : src/ErrorBoundary.tsx → 에러 처리 <br>
◾ 05-10 : src/UserList.tsx → users라는 속성으로 전달 받아 목록으로 출력(users 속성이 배열이 아닌 값이 전달되면 props.users.map에서 에러 발생) <br>
◾ 05-11 : src/App.tsx → ErrorBoundary 컴포넌트와 UserList 컴포넌트를 사용하도록 App 컴포넌트에 추가 <br>

## ◾ **chapter 05**  - <i>todolist-app-class</i>

#### [리액트 클래스 컴포넌트]
◾ 05-12 : src/components/TodoList.tsx / src/components/TodoListItem.tsx / src/components/InputTodo.tsx <br>
 → 컴포넌트마다 render()메서드의 첫 줄에 console.log() 코드 추가 <br>
◾ 05-13 : src/main.tsx 변경 → &lt;React.StrictMode&gt;&lt;/React.StrictMode&gt;를 렌더링하지 않도록 변경 <br>
◾ 05-14 : src/components/TodoList.tsx 변경 → shouldComponentUpdate() 생명주기 메서드를 이용해 최적화 <br>
◾ 05-15 : src/components/TodoListItem.tsx 변경 → shouldComponentUpdate() 생명주기 메서드를 이용해 최적화 <br>
◾ 05-16 : src/components/TodoList.tsx 변경 → PureComponent 상속(shouldComponentUpdate 메서드 주석 처리) <br>
◾ 05-17 : src/components/TodoListItem.tsx 변경 → PureComponent 상속(shouldComponentUpdate 메서드 주석 처리) <br>

## ◾  **chapter 06** - <i>hook-test-app</i>

#### [리액트 훅] 
◾ 06-01 : src/main.tsx → src/App.tsx를 App01.tsx로 변경 및 App01 추가(수정) <br>
◾ 06-02 : src/App01.tsx → 상태 관리 및 변경, 바인딩 <br>
◾ 06-03 : src/App02.tsx → 새로운 컴포넌트 추가 및 src/main.tsx에 App02 추가 <br>
◾ 06-04 : src/App02.tsx 변경 → depsList 지정, count가 바뀔 때만 effectCallback이 실행되도록 지정 <br>
◾ 06-05 : src/App02.tsx → [ ] 빈 배열을 전달하여 effectCallback 함수는 컴포넌트가 마운트될 때만 실행 <br>

## ◾  **chapter 06** - <i>clock-app</i>

#### [리액트 훅] 
◾ 06-06 : Clock2.tsx → useEffect에 setInterval(), clearInterval() 사용 <br>
◾ 06-07 : App2.tsx → ClockVisible의 불리언 상태 값(true/false)으로 마운트, 언마운트 반복 <br> 

## ◾  **chapter 06** - <i>hook-test-app</i>

#### [리액트 훅] 
◾ 06-08 : src/App03.tsx → useEffect 여러 개 사용 <br>
◾ 06-09 : Typescript Playground에 작성 → reduce(reducer) 함수 사용 <br>
◾ 06-10 : src/TodoReducer.ts → 리듀서 함수와 관련된 타입 작성 <br>
◾ 06-11 : src/App04.tsx → TodoReducer.ts 사용 <br> 
◾ 06-12 : src/main.tsx 변경 → App04 임포트 <br> 
◾ 06-13 : src/App05.tsx → useRef 훅을 이용해 상태와 달리 다시 렌더링되지 않는 데이터 관리 <br> 
◾ 06-14 : src/App06.tsx → useRef 훅을 이용해 브라우저 DOM에 접근 <br> 
◾ 06-15 : src/App07.tsx → 렌더링할 때마다 함수 호출 <br> 
◾ 06-16 : src/main.tsx 변경 → App07.tsx 컴포넌트 참조 <br> 
◾ 06-17 : src/App07.tsx 변경 → useMemo 훅 적용 <br> 
◾ 06-18 : src/App07.tsx 변경 → addTodo 함수와 deleteTodo 함수에 useCallback 훅 적용 <br> 
◾ 06-19 : src/App08.tsx → 디지털 시계를 출력하는 컴포넌트 생성(date-and-time) <br> 
◾ 06-20 : src/hooks/useClockTime.ts → 사용자 정의 훅 : 시간 간격(interval) + 시간을 출력하는 포맷을 열거형(TimeFormatEnum) 설정<br> 
◾ 06-21 : src/App09.tsx → 사용자 정의 훅을 사용하는 컴포넌트 작성 <br> 

## ◾  **chapter 07** - <i>hof-test-app</i>

#### [고차 함수와 렌더링 최적화] 
◾ 07-01 : src/connectClockTime.tsx → 컴포넌트를 인자로 전달 받는 고차 함수 작성 <br>
◾ 07-02 : src/connectMousePos.tsx → 마우스 위치를 획득하는 고차 함수 작성 <br>
◾ 07-03 : src/Child.tsx → connectClockTime, connectMousePos 두 고차 함수를 사용 <br>
◾ 07-04 : src/App.tsx → Child 컴포넌트 임포트 <br>

## ◾  **chapter 07** - <i>todolist-app2</i>

#### [고차 함수와 렌더링 최적화] 
◾ 07-05 : src/App.tsx → todoList, todo, addTodo 작성과 props 전달 <br>
◾ 07-06 : src/TodoList.tsx → 컴포넌트 렌더링 여부 체크 <br>
◾ 07-07 : src/TodoListItem.tsx → 컴포넌트 렌더링 여부 체크 <br>
◾ 07-08 : src/App.tsx 변경 → deleteTodo 함수 추가 및 TodoList 컴포넌트로 전달 <br>
◾ 07-09 : src/TodoList.tsx 변경 → deleteTodo 속성 타입 지정 및 TodoListItem 컴포넌트로 전달 <br>
◾ 07-10 : src/TodoListItem.tsx 변경 → 속성으로 전달받은 deleteTodo 호출 <br>
◾ 07-11 : src/App.tsx 변경 → addTodo, deleteTodo 함수에 useCallback 적용 <br>
◾ 07-12 : src/TodoListItem.tsx 변경 → React.memo의 두 번째 인자 함수를 TodoListItem 컴포넌트에 적용 <br>
◾ 07-13 : src/TodoListItemBody.tsx → TodoListItem 컴포넌트 분리 ① <br>
◾ 07-14 : src/TodoListItemDeleteButton.tsx → TodoListItem 컴포넌트 분리 ② <br>
◾ 07-15 : src/TodoListItem.tsx 변경 → TodoListItemBody, TodoListItemDeleteButton 임포트 <br>

## ◾  **chapter 08** - <i>context-api-todolist-app</i>

#### [Context API] 
◾ 08-01 : src/TodoContext.tsx → Context 객체로 관리할 데이터의 타입과 Context 객체, 상태와 상태 변경 함수를 포함하는 TodoProvider 컴포넌트 작성 <br>
◾ 08-02 : src/main.tsx → TodoProvider컴포넌트 사용(App 컴포넌트를 자식으로 포함(컴포넌트 중첩 구조)) <br>
◾ 08-03 : src/App.tsx → 속성을 이용하지 않고, 단지 자식 컴포넌트를 임포트하여 구성하고 조합하는 기능 제공 <br>
◾ 08-04 : src/InputTodo.tsx → useContext 훅을 이용해 value를 리턴받아 사용 <br>
◾ 08-05 : src/TodoList.tsx → useContext 훅을 이용해 value 값에 접근 <br>