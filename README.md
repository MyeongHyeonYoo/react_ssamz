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