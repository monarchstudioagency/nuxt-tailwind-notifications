import VTNotification from "./components/VTNotification.vue";
import VTNotificationGroup from "./components/VTNotificationGroup.vue";
import NotificationsModel from "./components/notificationModel.vue";
import { methods } from './notifications.js';
import {join} from 'path';
import Vue from 'vue';

const fs = require("fs");
let installed = false;
const availableGroup = ['success', 'error', 'warning', 'info'];

if (typeof require.context === 'undefined') {
    require.context = (base = '.', scanSubDirectories = false, regularExpression = /\.js$/) => {
        const files = {};

        function readDirectory(directory) {
            fs.readdirSync(directory).forEach((file) => {
                const fullPath = join(directory, file);

                if (fs.statSync(fullPath).isDirectory()) {
                    if (scanSubDirectories) readDirectory(fullPath);

                    return;
                }

                if (!regularExpression.test(fullPath)) return;

                files[fullPath] = true;
            });
        }

        readDirectory(join(__dirname, 'components'));

        function Module(file) {
            return require(file);
        }

        Module.keys = () => Object.keys(files);

        return Module;
    };
}

export default {
    install(Vue) {
        if (installed) return
        Vue.component('notification', VTNotification)
        Vue.component('notificationGroup', VTNotificationGroup)
        Vue.prototype.$toast = (data, timeout) => methods.notify(data, timeout)
        availableGroup.forEach(group => {
            Vue.prototype.$toast[group] = (data, timeout) => methods.notifyGroup(data, timeout, group);
        })
        installed = true
    }
}

// Check if components directory exist for preventing generals bugs & Nuxt3 bugs
try {
    const components = require.context(
        '/components',
        false,
        /^(.*\.(?!(vue|js)$))?[^.]*$/i
    );
    if (components.keys().length) {
        if (components.keys().includes("./custom-toasts")) {
            const componentConfig = components("./custom-toasts")
            Vue.component("Notifications", componentConfig.default || componentConfig)
        } else {
            Vue.component("Notifications", NotificationsModel);
        }
    } else {
        Vue.component("Notifications", NotificationsModel);
    }
} catch (e) {
    Vue.component("Notifications", NotificationsModel);
    console.log("Dir. doesn't exist")
}
