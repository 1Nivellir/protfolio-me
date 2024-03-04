import './assets/style.css'

import { gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
import { Flip } from "gsap/Flip"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

gsap.registerPlugin(CSSPlugin, Flip, ScrollTrigger)

const app = createApp(App)

app.use(router)

app.mount('#app')
