export const state = {
    notifications: [
    ],
};

let count = 0;
const generateId = () => {
    count = count + 1;
    return count
}
export const methods = {
    notify(notification, timeout) {
        notification.id = generateId()
        notification.group = notification.group || "";
        state.notifications.push(notification);
        setTimeout(() => {
            this.removeNotification(notification.id)
        }, timeout || 3000)
    },
    notifyGroup(notification, timeout, group) {
        const newNotification = typeof notification === "object" ? notification : {title: notification};

        newNotification.id = generateId()
        newNotification.group = group || "";

        state.notifications.push(newNotification);
        setTimeout(() => {
            this.removeNotification(newNotification.id)
        }, timeout || 3000)
    },
    removeNotification(id) {
        state.notifications.splice(state.notifications.findIndex(n => n.id === id), 1)
    }
};