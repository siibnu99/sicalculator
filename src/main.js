import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './assets/tailwind.css'
import './assets/scss/index.scss'

createApp(App).mount('#app')
localStorage.theme === "light" || !localStorage.theme
? document.querySelector("html").classList.remove("dark")
: document.querySelector("html").classList.add("dark");