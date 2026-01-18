import { faHouse } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "bootstrap/dist/css/bootstrap.min.css"

import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DashboardTemplate from './components/Dashboard/Dashboard';
import Qoshish from './components/Qoshish/Qoshish';
import { Arizalar, Yetkazilganlar, Statistika, Foydalanuvchilar } from './components/Qoshish/OthersComponents/OthersComponents';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DashboardTemplate />} >
          <Route index element={<Arizalar />} />
          <Route path="yetkazilganlar" element={<Yetkazilganlar />} />
          <Route path="statistika" element={<Statistika />} />
          <Route path="qoshish" element={<Qoshish />} />
          <Route path="foydalanuvchilar" element={<Foydalanuvchilar />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
