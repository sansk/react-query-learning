import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { HomePage } from './components/Home.page'
import { RQHeroesPage } from './components/RQHeroes.page'
import { HeroesPage } from './components/Heroes.page'
import { RQHeroPage } from "./components/RQHero.page";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
            <Route path='/rq-heroes/:id' element={<RQHeroPage />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  )
}

export default App