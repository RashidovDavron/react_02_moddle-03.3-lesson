import React from 'react'
import getData from '../data/data';
import YetkazilganlarPageWrapper from './YetkazilganlarPageWrapper';


const data = getData();

export default function YetkazilganlarPage() {
    return (
        <YetkazilganlarPageWrapper>
            <h2>Yetkazilganlar</h2>
            <p>Yetkazilgan taomlar ro'yxati bilan tanishing</p>
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
                        <th>Status</th>
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
                            <td>{item.status && "yetkazilgan" || "yetib bormagn"}</td>
                        </tr>
                    ))}

                    <tr className="fw-bold">
                        <td colSpan={7} >
                            Jami
                        </td>
                        <td >
                            {data
                                .reduce((sum, item) => sum + item.soni * item.narx, 0)
                                .toLocaleString("uz-UZ")} so'm
                        </td>
                    </tr>
                </tbody>
            </table>

        </YetkazilganlarPageWrapper>
    )
}
