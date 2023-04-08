# **chapter 09**  

## 💡 `React` 

--- 
#### [리액트 라우터] 

<br>

- 리액트 라우터란? <br>
    - `리액트 라우터`는 리액트 기반의 강력한 라우팅 라이브러리로서 화면에 렌더링하는 컴포넌트와 URI 경로를 동기화하면서 새로운 화면과 흐름을 애플리케이션에 빠르게 추가할 수 있는 기능을 제공한다. <br>
    - `리액트 라우터`를 이용하면 **SPA(Single Page Application)** 를 손쉽게 작성할 수 있다. <br>
        - `SPA`는 하나의 HTML 페이지로 여러 개의 화면을 전환할 수 있는 내비게이션 기법이다. <br>
        - `SPA`는 하나의 HTML 페이지에서 요청된 URI 경로를 이용해 화면을 전환하기 때문에 화면의 전환을 위해 웹 서버로부터 새로운 페이지를 로딩하지 않는다. <br>
            - **★ 화면 전환에 필요한 모든 코드는 첫 화면을 로딩할 때 한꺼번에 서버에서 로딩한다.**

```
[리액트 라우터를 사용하기 위해 필요한 패키지(2개)]

npm install react-router react-router-dom


[리액트 라우터 명시적 설치]

npm install react-router@6.x.x react-router-dom@6.x.x → 명시적으로 6버전 설치
```

```
리액트 라우터는 버전별로 적용 방법이 많이 다르기 때문에 버전을 꼭 확인

5.x 버전으로부터 마이그레이션하는 방법 홈페이지 참조
■ https://reactrouter.com/en/6.10.0
```

```
URI(Uniform Resource Identifier) → '식별자(Identifier)'를 의미
URL(Uniform Resource Locator) → 이 식별자 중 하나인 '위치 표시자'를 의미
▷ URL은 URI의 서브셋이다.

리액트 애플리케이션에서 사용하는 경로는 HTML 문서와 같은 리소스가 위치하지 않는다. 즉, 위치 표시자의 의미가 아니라 어떤 컴포넌트를 화면에 렌더링할지 구분하기 위한 식별자로써 경로가 사용된다.
```

<br> ♧ 새로운 프로젝트 생성 <br>
```
cd ..
npm init vite router-test-app -- --template react-ts
cd router-test-app
npm install bootstrap

[명시적 설치]
npm install bootstrap@5.x.x react-router@6.x.x react-router.dom@6.x.x
```
- 컴포넌트 계층 구조 <br>
    - App <br>
        - Header <br>
            - Home <br>
                - About <br>
                    - Members <br>
                        - SongList <br>

                        <br>

- 리액트 라우터가 제공하는 컴포넌트 <br>   
    - Router <br>
        - Routes <br>
            - Route <br>

```
◎ Router: 자식 컴포넌트로 URI 경로 정보를 처리하는 Routes, Route 컴포넌트를 배치할 수 있으며 라우팅하는 방법을 결정한다.
◎ Routes: Route 컴포넌트들을 묶어서 배치하는 역할을 한다. 
◎ Route: 직접적으로 URI 경로와 렌더링할 컴포넌트나 요소를 지정하는 기능을 제공한다.
```

- BrowserRouter 사용 <br>
(BrowserRouter, HashRouter, MemoryRouter, NativeRouter 존재)

```javascript
<Router>
    ······
    <Routes>
        <Route path="/" element={<Home />}>
        ······
    </Routes>
    ······    
</Router>
```

◾ 09-01 : src/pages/Home.tsx → URI 경로별로 보여줄 컴포넌트 작성 <br>

```javascript
import React from 'react'

type Props = {};

const Home = (props: Props) => {
    return (
        <div className="card card-body">
            <h2>Home</h2>
        </div>
    );
};

export default Home;
```

◾ 09-01 : src/pages/About.tsx → URI 경로별로 보여줄 컴포넌트 작성 <br>

```javascript
import React from 'react'

type Props = {};

const About = (props: Props) => {
    return (
        <div className="card card-body">
            <h2>About</h2>
        </div>
    );
};

export default About;
```
◾ 09-01 : src/pages/Members.tsx → URI 경로별로 보여줄 컴포넌트 작성 <br>

```javascript
import React from 'react'

type Props = {};

const Members = (props: Props) => {
    return (
        <div className="card card-body">
            <h2>Members</h2>
        </div>
    );
};

export default Members;
```
◾ 09-01 : src/pages/SongList.tsx → URI 경로별로 보여줄 컴포넌트 작성 <br>

```javascript
import React from 'react'

type Props = {};

const SongList = (props: Props) => {
    return (
        <div className="card card-body">
            <h2>SongList</h2>
        </div>
    );
};

export default SongList;
```
▶ 각 컴포넌트들의 라우팅 여부를 확인하기 위해 자기 자신의 컴포넌트 이름을 출력 <br>

◾ 09-02 : src/components/Header.tsx → Link 컴포넌트 사용 <br>
→ Link: &lt;Link &nbsp;&#47;&gt; 컴포넌트는 내비게이션을 위한 링크를 생성해준다. <br>

```javascript
<Link to={이동시킬 경로}>링크를 보여줄 요소</Link>
```

```javascript
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div className="card bg-light">
            <div className="card-heading">
                <h2 className="text-center m-3">Foxes and Fossils</h2>
                <p>
                    <a href="http://foxesandfossils.com">http://foxesandfossils.com</a>
                </p>
                <div className="row">
                    <div className="col-12">
                        <Link className="btn btn-success menu" to="/">Home</Link>
                        <Link className="btn btn-success menu" to="/about">About</Link>
                        <Link className="btn btn-success menu" to="/members">Members</Link>
                        <Link className="btn btn-success menu" to="/songs">Songs</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
```

◾ 09-03 : src/App.tsx → 라우팅 컴포넌트(Router, Routes, Route) 배치 <br>
→ Router, Routes, Route 컴포넌트를 이용해 요청된 URI 경로에 따라 각기 다른 컴포넌트가 렌더링되도록 구성 <br>

```javascript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import SongList from './pages/SongList'
import Members from './pages/Members'

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/members" element={<Members />} />
          <Route path="/songs" element={<SongList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
```

◾ 09-04 : src/index.css → 메뉴, 화면의 일부 요소가 사용하는 스타일 작성 <br>

```css
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.container {
  text-align: center;
  margin-top: 20px;
}

.menu {
  width: 25%;
  border-radius: 0 !important;
}
```

◾ 09-05 : src/main.tsx → index.css와 bootstrap.css 참조 <br>

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

<img src="img/router_link_component_home.jpg" width="780" height="320"> <br>
<img src="img/router_link_component_songs.jpg" width="780" height="320"> <br>
▶ 메뉴 탭을 선택할 때마다 주소창의 URL과 Route.Provider의 자식 내용이 바뀌는 것을 확인 <br>