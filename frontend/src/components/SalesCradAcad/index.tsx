import NotificationButton from "../NotificationButton";
import "./styles.css"
function SalesCardAcad() {

    return (
        <>
            <div className="acad-card">
                <h2 className="acad-sales-title">Vendas</h2>
                <div>
                    <div className="acad-form-control-container">
                        <input className="acad-form-control" type="text" />
                    </div>
                    <div className="acad-form-control-container">
                        <input className="acad-form-control" type="text" />
                    </div>
                </div>

                <div>
                    <table className="acad-sales-table">
                        <thead>
                            <tr>
                                <th className="show992">ID</th>
                                <th className="show576">Data</th>
                                <th>Vendedor</th>
                                <th className="show992">Visitas</th>
                                <th className="show992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="show992">#341</td>
                                <td className="show576">08/07/2022</td>
                                <td>Anakin</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="acad-red-btn-container">
                                    <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#341</td>
                                <td className="show576">08/07/2022</td>
                                <td>Anakin</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="acad-red-btn-container">
                                    <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#341</td>
                                <td className="show576">08/07/2022</td>
                                <td>Anakin</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="acad-red-btn-container">
                                    <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>

            </div>
        </>
    )

}

export default SalesCardAcad;
