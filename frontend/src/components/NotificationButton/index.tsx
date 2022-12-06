import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/notification-icon2.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';


type Props = {
  vendasId: number;

}
function clickEnviar(id :number){
  axios(`${BASE_URL}/vendas/${id}/notificacao`)
  .then(Response => {
   toast.info("sms enviado ");
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