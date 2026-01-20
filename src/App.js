import { faHouse } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "bootstrap/dist/css/bootstrap.min.css"

import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DashboardTemplate from './components/Dashboard/Dashboard';
import Qoshish from './components/Qoshish/Qoshish';
import { createContext, useState } from 'react';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import Page404 from './components/404Page/Page404';
import ArizalarPage from './components/ArizalarPage/ArizalarPage';
import YetkazilganlarPage from './components/YetkazilganlarPage/YetkazilganlarPage';
import StatistikaPage from './components/StatistikaPage/StatistikaPage';
import FoydalanuvchilarPage from './components/FoydalanuvchilarPage/FoydalanuvchilarPage';

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
              <Route index element={<h2 className='text-center'>“Xush kelibsiz, Admin paneliga!”</h2>}
              />
              <Route path="arizalar" element={<ArizalarPage />} />
              <Route path="yetkazilganlar" element={<YetkazilganlarPage />} />
              <Route path="statistika" element={<StatistikaPage />} />
              <Route path="qoshish" element={<Qoshish />} />
              <Route path="foydalanuvchilar" element={<FoydalanuvchilarPage />} />
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
