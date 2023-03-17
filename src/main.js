import { library } from '@fortawesome/fontawesome-svg-core'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronDown, faHouse } from '@fortawesome/free-solid-svg-icons'

import 'vuetify/styles'
import App from './App.vue'
import './assets/tailwind.css'

const vuetify = createVuetify({
  components,
  directives
})
library.add(faChevronDown, faHouse)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(vuetify)
  .mount('#app')
