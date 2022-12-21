import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartShopping, faCircleRight, faClock as fasClock, faBurger, faMobileScreenButton, faCar, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faClock as farClock } from '@fortawesome/free-regular-svg-icons'

library.add(faCartShopping, faCircleRight, farClock, fasClock, faBurger, faMobileScreenButton, faCar, faPlus)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')


