import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

import { Button, Select,Message,Table,TableColumn} from 'element-ui';
Vue.use(Button)
Vue.use(Select)
Vue.use(Select)
Vue.use(Table)
Vue.use(TableColumn)
Vue.prototype.$message=Message;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
