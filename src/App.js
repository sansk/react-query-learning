import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { HomePage } from './components/Home.page'
import { RQHeroesPage } from './components/RQHeroes.page'
import { HeroesPage } from './components/Heroes.page'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/heroes'>Traditional Heroes</Link>
            </li>
            <li>
              <Link to='/rq-heroes'>RQ Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/heroes' element={<HeroesPage />} />
          <Route path='/rq-heroes' element={<RQHeroesPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App