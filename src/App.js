import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/MainPage/Main';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Main} />
        <Route path='/about' Component={AboutMe} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
