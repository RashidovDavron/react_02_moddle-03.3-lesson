import { faHouse } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "bootstrap/dist/css/bootstrap.min.css"

import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DashboardTemplate from './components/Dashboard/Dashboard';
import Qoshish from './components/Qoshish/Qoshish';
import { Arizalar, Yetkazilganlar, Statistika, Foydalanuvchilar } from './components/Qoshish/OthersComponents/OthersComponents';
import { createContext, useState } from 'react';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import Page404 from './components/404Page/Page404';

const LoginContext = createContext({ isLogin: false, setLogin: () => { } });


function App() {
  const [isLogin, setLogin] = useState(false);
  console.log(isLogin);

  return (
    <Router>

      <LoginContext.Provider value={{ isLogin, setLogin }}>
        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          {isLogin &&
            <Route path='dashboard/' element={<DashboardTemplate />} >
              <Route path="arizalar" element={<Arizalar />} />
              <Route path="yetkazilganlar" element={<Yetkazilganlar />} />
              <Route path="statistika" element={<Statistika />} />
              <Route path="qoshish" element={<Qoshish />} />
              <Route path="foydalanuvchilar" element={<Foydalanuvchilar />} />
            </Route>
          }

          <Route path="*" element={<Page404 />} />
        </Routes>
      </LoginContext.Provider>

    </Router>
  );
}

export { LoginContext };
export default App;
