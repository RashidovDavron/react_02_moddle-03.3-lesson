import React from 'react'
import DashboardTemplateWrapper from './DashboardTemplateWrapper'
import { ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faFileAlt, faTruck, faUser, faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { faBars, faChartLine, faPlus, faUsers } from '@fortawesome/free-solid-svg-icons'

export default function DashboardTemplate() {
    return (
        <DashboardTemplateWrapper>
            <aside className="p-3 sidebar">
                <div className="d-flex justify-content-center flex-column ">
                    <img
                        src="https://static.tildacdn.one/tild3763-3531-4631-a638-653263613536/noroot.png"
                        alt="logo"
                        className='d-block pb-4'
                    />

                    <ListGroup as="ul">
                        <ListGroup.Item as="li" active>
                            <FontAwesomeIcon className='icon' icon={faFileAlt} />
                            <div className='d-flex flex-column justify-content-center'>
                                <a href="#">Arizalar</a>
                                <span>Yetib kelgan arizalarni kuzatishingiz mumkin</span>
                            </div>
                        </ListGroup.Item>

                        <ListGroup.Item as="li" >
                            <FontAwesomeIcon icon={faCheckCircle} />
                            <div className='d-flex flex-column justify-content-center'>
                                <a href="#">Yetkazilgan</a>
                                <span>yetkazilgan taomlar ro'yxati bilan tanishing</span>
                            </div>
                        </ListGroup.Item>

                        <ListGroup.Item as="li" >
                            <FontAwesomeIcon icon={faChartLine} />
                            <div className='d-flex flex-column justify-content-center'>
                                <a href="#">Statistika</a>
                                <span>Diagramma bilan ishlangan statistika</span>
                            </div>
                        </ListGroup.Item>

                        <ListGroup.Item as="li" >
                            <FontAwesomeIcon icon={faPlus} />
                            <div className='d-flex flex-column justify-content-center'>
                                <a href="#">Qo'shish</a>
                                <span>Yangi katergoriya / taom qo'shish</span>
                            </div>
                        </ListGroup.Item>

                        <ListGroup.Item as="li" >
                            <FontAwesomeIcon icon={faUsers} />
                            <div className='d-flex flex-column justify-content-center'>
                                <a href="#">Foydalanuvchilar</a>
                                <span className='text-warning'>Rollarni biriktirishingiz mumkin</span>
                            </div>
                        </ListGroup.Item>

                    </ListGroup>
                </div>

            </aside>

            <div className="rightSide">
                <header className='p-3 shadow d-flex justify-content-between px-4'>
                    <FontAwesomeIcon icon={faBars} />
                    <span>
                        <FontAwesomeIcon icon={faUserCircle} /> Axror
                    </span>
                </header>
                <main>main</main>
            </div>
        </DashboardTemplateWrapper>
    )
}
