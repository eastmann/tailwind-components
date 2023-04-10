import { createApp } from 'vue'
import RTComponents from './index.js'
import App from './App.vue'

import './tailwind.css'

createApp(App).use(RTComponents).mount('#app')
