import React from 'react'
import getData from '../data/data';
import FoydalanuvchilarPagePageWrapper from './FoydalanuvchilarPageWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPenAlt, faTrash } from '@fortawesome/free-solid-svg-icons';


const data = getData();

export default function FoydalanuvchilarPage() {
    return (
        <FoydalanuvchilarPagePageWrapper>
            <h2>Foydalanuvchilar</h2>
            <p>Rollarni biriktirishingiz mumkin</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Ism</th>
                        <th>Telefon raqami</th>
                        <th>Roli</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <th>{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.telefon}</td>
                            <td>{item.rol}</td>
                            <td>
                                <span>
                                    <FontAwesomeIcon icon={faPenAlt} />
                                    <FontAwesomeIcon icon={faTrash} />
                                </span>
                            </td>
                        </tr>
                    ))}

                    <tr className="fw-bold">
                        <td colSpan={3} >
                            Jami
                        </td>
                        <td colSpan={2} >
                            {data.length} ta accaunt
                        </td>
                    </tr>
                </tbody>
            </table>

        </FoydalanuvchilarPagePageWrapper>
    )
}
