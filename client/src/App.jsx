import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Searchform from './components/Searchform'
import LandingPage from './components/LandingPage'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './styles/lp.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<LandingPage />}></Route>
        <Route exact path='/createPlan' element={<Searchform />}></Route>
      </Routes>
      
    </Router>

  );
}

export default App;
