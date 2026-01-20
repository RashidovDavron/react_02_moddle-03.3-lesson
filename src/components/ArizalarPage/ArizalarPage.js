import React from 'react'
import ArizalarPageWrapper from './ArizalarPageWrapper';
import getData from '../data/data';

const data = getData();

export default function ArizalarPage() {
    return (
        <ArizalarPageWrapper>
            <h2>Arizalar</h2>
            <p>Yetib kelgan arizalarni kuzatishingiz mumkin</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Ism</th>
                        <th>Taom</th>
                        <th>Narx</th>
                        <th>Soni</th>
                        <th>Jami</th>
                        <th>Telefon</th>
                        <th>Izoh</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <th>{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.taom}</td>
                            <td>{item.narx.toLocaleString("uz-UZ")} so'm</td>
                            <td>{item.soni}</td>
                            <td>{(item.soni * item.narx).toLocaleString("uz-UZ")} so'm</td>
                            <td>{item.telefon}</td>
                            <td>{item.izoh || "..."}</td>
                        </tr>
                    ))}

                    <tr className="fw-bold">
                        <td colSpan={7}>
                            Jami
                        </td>
                        <td>
                            {data
                                .reduce((sum, item) => sum + item.soni * item.narx, 0)
                                .toLocaleString("uz-UZ")} so'm
                        </td>
                    </tr>
                </tbody>
            </table>

        </ArizalarPageWrapper>
    )
}
