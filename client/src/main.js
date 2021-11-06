import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import graphql from './graphql'
import urql from '@urql/vue'
import './index.css'

createApp(App)
  .use(router)
  .use(urql, graphql)
  .mount('#app')
