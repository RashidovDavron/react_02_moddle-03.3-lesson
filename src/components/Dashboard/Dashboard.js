import React, { useContext } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import DashboardTemplateWrapper from './DashboardTemplateWrapper';
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faBars, faChartLine, faPlus, faSignOutAlt, faSync, faUsers } from '@fortawesome/free-solid-svg-icons';
import { LoginContext } from '../../App';


export default function DashboardTemplate() {
    const navigate = useNavigate();
    const { isLogin, setLogin } = useContext(LoginContext);
    return (
        <DashboardTemplateWrapper>
            <aside className="p-3 sidebar">
                <div className="d-flex justify-content-center flex-column ">
                    <img
                        src="https://static.tildacdn.one/tild3763-3531-4631-a638-653263613536/noroot.png"
                        alt="logo"
                        className="d-block pb-4"
                    />

                    <ListGroup as="ul">
                        <ListGroup.Item as="li">
                            <NavLink to="/dashboard/arizalar" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
                                <FontAwesomeIcon className="icon" icon={faSync} /> Arizalar
                            </NavLink>
                        </ListGroup.Item>

                        <ListGroup.Item as="li">
                            <NavLink to="/dashboard/yetkazilganlar" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
                                <FontAwesomeIcon icon={faCheckCircle} /> Yetkazilganlar
                            </NavLink>
                        </ListGroup.Item>

                        <ListGroup.Item as="li">
                            <NavLink to="/dashboard/statistika" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
                                <FontAwesomeIcon icon={faChartLine} /> Statistika
                            </NavLink>
                        </ListGroup.Item>

                        <ListGroup.Item as="li">
                            <NavLink to="/dashboard/qoshish" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
                                <FontAwesomeIcon icon={faPlus} /> Qo'shish
                            </NavLink>
                        </ListGroup.Item>

                        <ListGroup.Item as="li">
                            <NavLink to="/dashboard/foydalanuvchilar" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
                                <FontAwesomeIcon icon={faUsers} /> Foydalanuvchilar
                            </NavLink>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </aside>

            <div className="rightSide">
                <header className="p-3 shadow d-flex justify-content-between px-3 align-items-center">
                    <FontAwesomeIcon icon={faBars} />
                    <span className="d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon icon={faUserCircle} /> Axror
                        <button className='btn'
                            onClick={() => {
                                setLogin(false);
                                navigate("/")
                            }}
                        >
                            <FontAwesomeIcon icon={faSignOutAlt} /> Chiqish
                        </button>
                    </span>

                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </DashboardTemplateWrapper>
    );
}
