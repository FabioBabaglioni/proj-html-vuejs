import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartShopping, faCircleRight, faClock as fasClock, faBurger, faMobileScreenButton, faCar, faPlus, faEnvelope as fasEnvelope, faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faClock as farClock, faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons'

library.add(faCartShopping, faCircleRight, farClock, fasClock, faBurger, faMobileScreenButton, faCar, faPlus, fasEnvelope, farEnvelope, faTwitter, faFacebookF, faInstagram, faLinkedinIn, faYoutube, faCopyright)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')







