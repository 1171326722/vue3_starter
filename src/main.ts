import { createApp } from 'vue'
import App from './App.vue'
import router from './router/config'
import Antd from 'ant-design-vue'
import store from './store/index'
import i18n from './locale/index'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)
app.use(Antd)
app.use(router)
app.use(store)
app.use(i18n)
app.mount('#app')
