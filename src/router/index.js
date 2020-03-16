import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index/index'
import about from '@/components/about/index'
import project from '@/components/project/index'
import application from '@/components/application/index'
import service from '@/components/service/index'
import news from '@/components/news/index'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'index', component: index, meta: {title: '万美通'}},
    {path: '/about', name: 'about', component: about, meta: {title: '关于我们'}},
    {path: '/project', name: 'project', component: project, meta: {title: '产品中心'}},
    {path: '/application', name: 'application', component: application, meta: {title: '应用领域'}},
    {path: '/service', name: 'service', component: service, meta: {title: '技术服务'}},
    {path: '/news', name: 'news', component: news, meta: {title: '新闻资讯'}},
  ]
})
