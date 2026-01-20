import React, { useContext } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import DashboardTemplateWrapper from './DashboardTemplateWrapper';
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTruck, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faBars, faChartLine, faPlus, faSignOutAlt, faSync, faUsers } from '@fortawesome/free-solid-svg-icons';

import { LoginContext } from '../../App';

const links = [
    { to: "/dashboard/arizalar", name: "Arizalar", icon: faSync, title: "Yetib kelgan arizalarni kuzatishingiz mumkin" },
    { to: "/dashboard/yetkazilganlar", name: "Yetkazilganlar", icon: faCheckCircle, title: "Yetkazilgan taomlar ro’yxati bilan tanishing" },
    { to: "/dashboard/statistika", name: "Statistika", icon: faChartLine, title: "Diagrammalar bilan ishlangan statistika" },
    { to: "/dashboard/qoshish", name: "Qo'shish", icon: faPlus, title: "Yangi taom qo’shish " },
    { to: "/dashboard/foydalanuvchilar", name: "Foydalanuvchilar", icon: faUsers, title: "Rollarni biriktirishingiz mumkin" },
];



export default function DashboardTemplate() {
    const navigate = useNavigate();
    const { isLogin, setLogin } = useContext(LoginContext);
    return (
        <DashboardTemplateWrapper>
            <aside className="p-3 sidebar">
                <div className="d-flex justify-content-center flex-column ">
                    <a className="d-flex justify-content-center align-items-center">
                        <img
                            src="https://static.tildacdn.one/tild3763-3531-4631-a638-653263613536/noroot.png"
                            alt="logo"
                            className="d-block pb-4"
                        />
                    </a>

                    <ListGroup as="ul">
                        {links.map((link, index) => (
                            <ListGroup.Item as="li" key={index} className="p-0">
                                <NavLink
                                    to={link.to}
                                    className={({ isActive }) =>
                                        `nav-link p-2 ${isActive ? "active" : ""}`
                                    }
                                >
                                    <div className="d-flex align-items-center gap-3">
                                        <FontAwesomeIcon
                                            icon={link.icon}

                                        />

                                        <div className="d-flex flex-column">
                                            <span>
                                                {link.name}
                                            </span>
                                            <small className="text-muted">
                                                {link.title}
                                            </small>
                                        </div>
                                    </div>
                                </NavLink>
                            </ListGroup.Item>
                        ))}
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
