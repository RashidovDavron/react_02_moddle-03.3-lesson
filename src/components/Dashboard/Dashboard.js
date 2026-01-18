import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import DashboardTemplateWrapper from './DashboardTemplateWrapper';
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faFileAlt, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faBars, faChartLine, faPlus, faUsers } from '@fortawesome/free-solid-svg-icons';


export default function DashboardTemplate() {
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
                            <NavLink to="/" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
                                <FontAwesomeIcon className="icon" icon={faFileAlt} /> Arizalar

                            </NavLink>
                        </ListGroup.Item>

                        <ListGroup.Item as="li">
                            <NavLink to="/yetkazilganlar" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
                                <FontAwesomeIcon icon={faCheckCircle} /> Yetkazilganlar
                            </NavLink>
                        </ListGroup.Item>

                        <ListGroup.Item as="li">
                            <NavLink to="/statistika" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
                                <FontAwesomeIcon icon={faChartLine} /> Statistika
                            </NavLink>
                        </ListGroup.Item>

                        <ListGroup.Item as="li">
                            <NavLink to="/qoshish" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
                                <FontAwesomeIcon icon={faPlus} /> Qo'shish
                            </NavLink>
                        </ListGroup.Item>

                        <ListGroup.Item as="li">
                            <NavLink to="/foydalanuvchilar" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
                                <FontAwesomeIcon icon={faUsers} /> Foydalanuvchilar
                            </NavLink>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </aside>

            <div className="rightSide">
                <header className="p-3 shadow d-flex justify-content-between ps-3 pe-5 align-items-center">
                    <FontAwesomeIcon icon={faBars} />
                    <span className="d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon icon={faUserCircle} /> Axror
                    </span>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </DashboardTemplateWrapper>
    );
}
