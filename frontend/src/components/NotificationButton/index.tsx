import axios from 'axios';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';


type Props = {
  vendasId: number;

}
function clickEnviar(id :number){
  axios(`${BASE_URL}/vendas/${id}/notificacao`)
  .then(Response => {
    console.log("sucesso");
  })
}

function NotificationButton({vendasId}: Props) {
  return (
    <div className="acad-red-btn" onClick={() => clickEnviar(vendasId)}>
      <img src={icon} alt="Notificação" />
    </div>
  )
}

export default NotificationButton;