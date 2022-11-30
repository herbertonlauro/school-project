import icon from '../../assets/img/notification-icon.svg';
import './styles.css';

function NotificationButton() {
  return (
    <div className="acad-red-btn">
      <img src={icon} alt="Notificação" />
    </div>
  )
}

export default NotificationButton;