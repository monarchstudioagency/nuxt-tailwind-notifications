import VTNotification from "./VTNotification.vue";
import VTNotificationGroup from "./VTNotificationGroup.vue";
import { methods } from './notifications.js';

let installed = false;
const availableGroup = ['success', 'error', 'warning', 'info'];

export default {
    install(Vue) {
        if (installed) return
        Vue.component('notification', VTNotification)
        Vue.component('notificationGroup', VTNotificationGroup)
        Vue.prototype.$notify = (data, timeout) => methods.notify(data, timeout)
        availableGroup.forEach(group => {
            Vue.prototype.$notify[group] = (data, timeout) => methods.notifyGroup(data, timeout, group);
        })
        installed = true
    }
}