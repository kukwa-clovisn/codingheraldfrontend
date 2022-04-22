import {
    createApp
} from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {
    library
} from "@fortawesome/fontawesome-svg-core";
import {
    FontAwesomeIcon
} from "@fortawesome/vue-fontawesome";
import {
    fas
} from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import {
    fab
} from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import {
    far
} from '@fortawesome/free-regular-svg-icons';
library.add(far);
import {
    dom
} from "@fortawesome/fontawesome-svg-core";
dom.watch();

import router from './router'

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router).mount('#app')