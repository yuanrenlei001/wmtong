import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index/index'
import about from '@/components/about/index'
import project from '@/components/project/index'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'index', component: index, meta: {title: '万美通'}},
    {path: '/about', name: 'about', component: about, meta: {title: '关于我们'}},
    {path: '/project', name: 'project', component: project, meta: {title: '产品中心'}},
  ]
})
