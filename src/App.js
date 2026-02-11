import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/MainPage/Main';
import AboutMe from './components/AboutMe/AboutMe';
import Home from './components/MainPage/Home';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={AboutMe} />
      </Routes>
    </HashRouter>
  );
}

export default App;
