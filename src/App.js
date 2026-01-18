import { faHouse } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "bootstrap/dist/css/bootstrap.min.css"

import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DashboardTemplate from './components/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DashboardTemplate />} />
      </Routes>
    </Router>
  );
}

export default App;
