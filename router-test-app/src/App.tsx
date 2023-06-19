import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
// import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'
import Members from './pages/Members'
import SongList from './pages/SongList'
// import SongDetail from './pages/SongDetail'
// import SongDetail from './pages/SongDetail2'
import Player from './pages/songs/Player'
import SongIndex from './pages/songs/Index'
import NotFound from './components/NotFound'

export type MemberType = { name: string; photo: string };
export type SongType = { id: number; title: string; musician: string; youtube_link: string };

const App = () => {
  const [members] = useState<Array<MemberType>>([
    { name: "Maggie Adams", photo: "photos/Mag.png" },
    { name: "Sammie Purcell", photo: "photos/Sam.png" },
    { name: "Tim Purcell", photo: "photos/Tim.png" },
    { name: "Scott King", photo: "photos/King.png" },
    { name: "Johnny Pike", photo: "photos/JPike.jpg" },
    { name: "Toby", photo: "photos/Toby.jpg" }
  ]);

  const [songs] = useState<Array<SongType>>([
    { id: 1, title: "Fallin' for you", musician: "Colbie callet", youtube_link: "PABUl_EX_hw"},
    { id: 2, title: "Can't hurry love", musician: "The supremes", youtube_link: "EJDPhjQft04"},
    { id: 3, title: "Landslide", musician: "Dixie chicks", youtube_link: "V2N7gYom9-A" },
    { id: 4, title: "Can't let go", musician: "Linda ronstadt", youtube_link: "P-EpGKXmoe4" },
    { id: 5, title: "Doctor my eyes", musician: "Jackson Browne", youtube_link: "7JlFKS_1oZk" },
    { id: 6, title: "We gotta get you a woman", musician: "Todd Rundgren", youtube_link: "EyUjbBViAGE" },
    { id: 7, title: "Hip to my heart", musician: "Band Perry", youtube_link: "vpLCFnD9LFo" },
    { id: 8, title: "Rolling in the deep", musician: "Adele", youtube_link: "EvK8pDK6IQU" }
  ]);

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" /> } /> {/* 리디렉션 기능 추가 */}
          <Route path="/home" element={<Home />} /> {/* 리디렉션 기능 추가 */}
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/about" element={<About title={'여우와 늙다리들'} />} />
          {/* <Route path="/members" element={<Members />} /> */}
          <Route path="/members" element={<Members members={members} />} />
          {/* <Route path="/songs" element={<SongList />} /> */}
          {/* <Route path="/songs" element={<SongList songs={songs} />} /> */}
          {/* <Route path="/songs/:id" element={<SongDetail songs={songs} />} /> */}
          {/* <Route path="/songs" element={<SongList songs={songs} />}>
            <Route path=":id" element={<Player songs={songs} />} />
          </Route> */}
          {/* <Route path="/songs" element={<SongList songs={songs} />}>
            <Route index element={<SongIndex />} />
            <Route path=":id" element={<Player songs={songs} />} />
          </Route> */}
          <Route path="/songs" element={<SongList songs={songs} />}>
            <Route index element={<SongIndex />} />
            <Route path=":id" element={<Player />} /> {/* 속성을 전달하지 않도록 수정 */}
          </Route>
          <Route path="*" element={<NotFound />} /> {/* 404 라우트 */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;