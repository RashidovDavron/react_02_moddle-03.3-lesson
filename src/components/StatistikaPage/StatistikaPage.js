import React from "react";
import getData from "../data/data";
import StatistikaPageWrapper from "./StatistikaPageWrapper";

const data = getData();

export default function StatistikaPage() {
    const jamiBuyurtmalar = data.length;

    const jamiSumma = data.reduce(
        (sum, item) => sum + item.soni * item.narx,
        0
    );

    const yetkazilganlar = data.filter(item => item.status).length;
    const yetkazilmaganlar = data.filter(item => !item.status).length;

    return (
        <StatistikaPageWrapper>
            <h2>Statistika</h2>
            <p>Tizim bo‘yicha umumiy ko‘rsatkichlar</p>

            <div className="row g-3">
                <div className="col-md-3">
                    <div className="card text-center shadow-sm">
                        <div className="card-body">
                            <h6>Jami buyurtmalar</h6>
                            <h4>{jamiBuyurtmalar}</h4>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card text-center shadow-sm">
                        <div className="card-body">
                            <h6>Yetkazilganlar</h6>
                            <h4 className="text-success">
                                {yetkazilganlar}
                            </h4>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card text-center shadow-sm">
                        <div className="card-body">
                            <h6>Yetkazilmaganlar</h6>
                            <h4 className="text-danger">
                                {yetkazilmaganlar}
                            </h4>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card text-center shadow-sm">
                        <div className="card-body">
                            <h6>Jami summa</h6>
                            <h4>
                                {jamiSumma.toLocaleString("uz-UZ")} so'm
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </StatistikaPageWrapper>
    );
}
