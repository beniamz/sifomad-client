import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/vendor/fonts/boxicons.css'
import './assets/vendor/css/core.css'
import './assets/vendor/css/theme-default.css'
import './assets/css/demo.css'
import './assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css'
import './assets/vendor/js/helpers.js'
import './assets/js/config.js'

import './assets/vendor/libs/jquery/jquery.js'
import './assets/vendor/libs/popper/popper.js'
import './assets/vendor/js/bootstrap.js'
import './assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js'
import './assets/vendor/js/menu.js'
import './assets/js/main.js'


const app = createApp(App)

app.use(router)

app.mount('#app')
