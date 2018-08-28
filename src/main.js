// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui/'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VCharts from 'v-charts'//导入数据可视化工具

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VCharts)

Vue.prototype.$Ajax = axios;

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
 const role = localStorage.getItem('user');
  if (!role && to.path != '/login') { 
    next('/login');
  } else if (to.meta.permission) {
    //如果是管理员权限则可以兼顾，这里还是简单的模拟管理员权限而已
    role == 'admin' ? next() : next('/403');
  } else {
    if (navigator.userAgent.indexOf('MSIE') > -1 && to.path == '/editor') {
      Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
        confirmButtonText: '确定'
      })
    }else {
    next();
  } 
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
  render: h => h(App),
})
