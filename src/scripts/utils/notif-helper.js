const NotifHelper = {
    showNotification({ message, title, options }) {
        const serviceWorkerRegistration = navigator.serviceWorker.ready;
        if (Notification.permission === 'granted') {
            serviceWorkerRegistration.then((registration) => {
                registration.showNotification(title, options);
            });

            self.addEventListener('notificationclick', function(event) {
                event.notification.close();
                clients.openWindow("http://localhost:8080/#/favorite");
            });
        } else {
            console.error('Feature Notification Not Allowed');
        }
    }
}

export default NotifHelper;