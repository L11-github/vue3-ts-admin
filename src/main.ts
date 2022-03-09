import { createApp } from 'vue'
import { globalRegister } from './global'
import 'normalize.css'
import './assets/css/index.less'
// import hyRequest from './service'

import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'

const app = createApp(App)

app.use(globalRegister)
// registerE(app)

// registerI(app)
// app.use(registerE)

setupStore()

app.use(store).use(router).mount('#app')
