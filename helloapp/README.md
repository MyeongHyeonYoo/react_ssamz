# **chapter 03**  

## 💡 `React` 

--- 

#### [리액트 시작 & Vite]
- ### 리액트 시작 <br>
  - ES6 기반 <br>
    ```
    npx create-react-app [프로젝트명]
    ```
  - 타입스크립트 기반 <br>
    ```
    npx create-react-app [프로젝트명] --template typescript
    ```

> `src`: '자바스크립트'와 '타입스크립트' 코드를 작성하는 디렉터리. 진입(entry) 파일은 index.js 또는 index.tsx 파일이다. <br>
> `public`: 정적파일과 리소스를 이곳에 배치 <br>
> `build`: 빌드 후 생성된 산출물(artifact)이 저장되는 디렉터리. 이곳에 생성된 파일은 웹 서버에 배포 가능. <br>

<br>

- 실행/빌드 명령어 <br>
  - 개발 서버 실행 명령어 <br>
    ```
    npm run start 
    yarn start
    ```
  - 빌드 명령어 <br>
    ```
    npm run build
    yarn build
    ```
  - 테스트 명령어 <br>
    ```
    npm run test
    yarn test
    ```

- 'npx create-react-app [프로젝트명]' 오류 <br>
  ```
  "You are running 'create-react-app' x.x.x, which is behind the latest release
  (x.x.x). We no longer support global installation of Create React App."
  ```
  - 전역 설칠된 CRA(create-react-app)와 캐시를 삭제 후 프로젝트 생성 재시도 <br>
    ```
    npm uninstall -g create-react-app
    npm cache clean -force
    npm cache verify
    ``` 

> CRA는 내부적으로 webpack을 사용 <br>

<br>

- ### Vite <br>
> 프랑스어로 '빠르다'라는 뜻을 가진 단어 <br>

→ 차세대 프런트엔드 개발 도구 <br>
→ Vite가 내부적으로 사용하는 ESBuild는 '`Go`라는 네이티브 언어'로 만들어진 도구를 이용해 빌드하기 때문에 빌드 속도가 빠르다. (webpack, parcel과 비교하면 10배 이상 빠르다.) <br>
→ Vite는 `Native ESM`이라는 브러우저의 자체적인 모듈 기능을 사용(모듈 번들링 기능을 브라우저가 수행) <br>
```
cf)

기존 webpack과 같은 모듈 번들러를 이용할 때는 엔트리에서 여러 라우트와 여러 모듈을 통해 모듈 번들링을 끝낸 후 개발 서버를 구동하여 시간이 오래 걸리는 반면, Vite는 Native ESM이라는 브라우저의 자체적인 모듈 기능을 사용하여, Vite가 실행하는 개발 서버는 브라우저가 요청하는 모듈을 전송해주고, 모듈 번들링 기능을 브라우저가 수행하기 때문에 개발 서버의 구동이 빠르다.
```

- Vite 시작
  - ES6 기반
    ```
    npm init vite [프로젝트명] -- --template react
    yarn create vite [프로젝트명] -- --template react
    ```
  - 타입스크립트 기반
    ```
    npm init vite [프로젝트명] -- --template react-ts
    yarn create vite [프로젝트명] -- --template react-ts
    ```
    ```
    cf)

    npm init vite [프로젝트명] -- -- template react
    ```
    ▶ template 앞에 -- 띄고 template을 실행하면 다음과 같이 실행 된다. <br>
    <img src="img/select_framework.jpg" width="430" height="120"> <br>
    (프레임워크 선택 가능) <br>

<br>
    
> `src`: '자바스크립트'와 '타입스크립트' 코드를 작성하는 디렉터리. 진입(entry) 파일은 main.tsx 또는 main.jsx 파일이다. <br>
> `public`: 정적파일과 리소스를 이곳에 배치. 이 디렉터리는 자동으로 만들어지지 않으므로 직접 생성 <br>
> `build`: 빌드 후 생성된 산출물(artifact)이 저장되는 디렉터리 <br>

- vite.config.js 설정
```
https://Vitejs.dev/config/#config-file
```

- helloapp <br>
Vite로 만든 프로젝트는 '의존 패키지'를 자동으로 다운로드하지 않으므로 `npm install` 명령어로 직접 다운로드 <br>
```
npm init vite helloapp -- --template react-ts
cd helloapp
npm install
```
> React/Redux/React-Native snippets ▷ VSCode 확장팩 도구 활용 <br>
>> 코드 편집 창에 tsrafce 입력 <br>
>> ▷ tsrafce: TypeScriptReactArrowFunctionComponentExport <br>
>>> 타입스크립트를 지원하는 컴포넌트는 대부분 `ts`로 시작 <br>

<br> 
코드 조각 참고

```
https://github.com/dsznajder/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md
```


◾ 03-01 : src/App.tsx → 코드 조각 작성(함수 컴포넌트) <br>
- 작성 코드 실행 <br>
  ```
  npm run dev
  ```
  Vite 3.x 버전 이상 default port (package.json: 현재 4.1.0 버전) <br>
  <img src="img/default_port.jpg" width="280" height="80"> <br>

  - 포트 설정 <br>
  scripts의 "dev": "vite"를 다음과 같이 설정 <br>
  <img src="img/port_setting.jpg" width="320" height="80"> <br>
  <img src="img/port_check.jpg" width="350" height="80"> <br>

  <br>
  main.tsx의 import './index.css' 주석 처리 <br>
  <img src="img/app.tsx_hello_world.jpg" width="150" height="80"> <br>

  <br>
  App.tsx 내용 수정 <br>
  <img src="img/app.tsx_modify.jpg" width="150" height="80"> <br>
  ▶ HMR(Hot Module Replacement): 수정된 내용을 반영하여 웹 브라우저 화면이 자동으로 갱신되는 것 <br>
     (코드를 수정하면 웹 브라우저는 변경된 모듈을 개발 서버로부터 다운로드해서 화면을 즉시 갱신) <br>


◾ 03-02 : src/main.tsx → 구조 확인('./App' 상대경로로부터 import) <br>
▶ './App'은 같은 경로상의 App 컴포넌트를 참조한다는 뜻 <br>

- 절대 경로 사용 방법 <br>
  1. tsconfig.json 파일 코드 추가(수정) <br>
  <img src="img/tsconfig.json_modify.jpg" width="220" height="120"> <br>
  2. npm install path 명령어를 수행하여 path 패키지 추가 <br>
  ```
  npm install path
  ```
  3. vite.config.ts 파일 코드 추가(수정) <br>
    - 변경 전 <br>
    <img src="img/vite.config.ts_original.jpg" width="250" height="150"> <br>
    - 변경 후 <br>
    <img src="img/vite.config.ts_modify.jpg" width="380" height="250"> <br>
  4. 절대 경로 사용 <br>
  ```
  // import App from './App'
  // @가 src 디렉터리를 나타낸다.
  import App from '@/App'
  ```

◾ 03-03 : index.html → id가 root인 요소 찾기 <br>
◾ 03-04 : src/App.tsx 변경 → JSX(JavaScript XML) 자바스크립트 확장 문법 활용 / { } 사용  <br>
  <img src="img/use_braces.jpg" width="140" height="90"> <br>
  ▶ { }는 보간법(interpolation)이라 한다. JSX의 { }에는 리턴값을 가지는 표현식(expression)이면 무엇이든 배치할 수 있다.
  ```
  보간법(補間法) 또는 내삽(內揷, interpolation)이란?
  알려진 데이터 지점의 고립점 내에서 새로운 데이터 지점을 구성하는 방식이다.
  https://ko.wikipedia.org/wiki/%EB%B3%B4%EA%B0%84%EB%B2%95 [위키백과]
  ```

  ◾ 03-05 : src/App.tsx 변경 → 함수 추가(addResult) & return 값 활용 <br>
  <img src="img/app.tsx_modify_jsx_braces_function.jpg" width="250" height="130"> <br>

