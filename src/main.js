import {
    createApp
} from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import router from './router'

import './interceptors/axios'

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router).mount('#app')