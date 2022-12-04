import NotificationButton from "../NotificationButton";
import "./styles.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/request";
import { Vendas } from "../../models/listavendas";
function SalesCardAcad() {

    const min = new Date(new Date().setDate(new Date().getDate() - 30));
    const max = new Date();
    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [vendas, setVendas] = useState<Vendas[]>([]);

    useEffect(() => {

            const datamin = minDate.toISOString().slice(0, 10);
            const datamax = maxDate.toISOString().slice(0, 10);

        axios.get(`${BASE_URL}/vendas?minDate=${datamin}&maxDate=${datamax}`)
            .then(response => {
                setVendas(response.data.content)
            })
    }, [minDate, maxDate]);


    return (

        <div className="acad-card">
            <h2 className="acad-sales-title">Vendas</h2>
            <div>
                <div className="acad-form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="acad-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="acad-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="acad-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
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
                        {vendas.map(venda => {
                            return (
                                <tr key={venda.id}>
                                    <td className="show992">#{venda.id}</td>
                                    <td className="show576">{new Date(venda.date).toLocaleDateString()}</td>
                                    <td>{venda.vendedorNome}</td>
                                    <td className="show992">{venda.visitado}</td>
                                    <td className="show992">{venda.venda}</td>
                                    <td>R$ {venda.total.toFixed(2)}</td>
                                    <td>
                                        <div className="acad-red-btn-container">
                                            <NotificationButton vendasId={venda.id} />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>
            </div>

        </div>

    )

}

export default SalesCardAcad;
