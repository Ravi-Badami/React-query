import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import HomePage from './components/Home.page.tsx';
import SuperHero from './components/SuperHero.page.tsx';
import RQSuperHero from './components/RQSuperHero.page.tsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/super-hero'>SuperHero</Link>
        <Link to='/rq-super-hero'>RQSuperHero</Link>
      </nav>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/super-hero' element={<SuperHero />} />
        <Route path='/rq-super-hero' element={<RQSuperHero />} />
      </Routes>
    </div>
  );
}

export default App;
