import './NotificationPopup.css'


export function NotificationPopup({ onClose }) {
    return (
        <div className="notification-popup-card">
            <div className="notification-popup">
                <div className="notification-popup-top">
                    <div className="notification-popup-header">
                        NOTIFICATIONS
                    </div>

                    <button className="notification-close-button" onClick={onClose}>Close</button>
                </div>

                <ul className="notification-popup-list">
                    <li>
                        <div className = "notification-info">
                            <div className="notification-type">
                                notification type
                            </div>

                            <div className="notification-time">
                                time passed
                            </div>
                        </div>

                        <div className="notification-content">
                            notification content
                        </div>
                    </li>

                    <li>
                        <div className = "notification-info">
                            <div className="notification-type">
                                notification type
                            </div>

                            <div className="notification-time">
                                time passed
                            </div>
                        </div>

                        <div className="notification-content">
                            notification content
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}