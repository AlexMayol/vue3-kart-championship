import { createApp } from 'vue'


import App from './App.vue'
import '@animxyz/core'
import VueAnimXyz from '@animxyz/vue3'
import './style/base.css'

import './registerServiceWorker'

import router from './router'

// const app = createApp(App)
// app.use(router)
// app.use(VueAnimXyz)
// app.mount('#app')
createApp(App).use(router).mount('#app')
