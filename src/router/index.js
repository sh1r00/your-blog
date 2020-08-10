import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import ForgotInfo from '@/components/user/forgotInfo'
import SignUp from '@/components/user/signUp'
import UserInfo from '@/components/user/userInfo'
import VueTopics from '@/components/vuejs/topics'
import About from '@/components/about'
import CreateArticle from '@/components/vuejs/articles/create'
import ViewArticle from '@/components/vuejs/articles/view'
import EditArticle from '@/components/vuejs/articles/edit'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {Auth: false}
    },
    {
      path: '/forgotInfo',
      name: 'forgot_info',
      component: ForgotInfo,
      meta: {Auth: false}
    },
    {
      path: '/signUp',
      name: 'sign_up',
      component: SignUp,
      meta: {Auth: false}
    },
    {
      path: '/userInfo',
      name: 'user_info',
      component: UserInfo,
      meta: {Auth: false}
    },
    {
      path: '/topics',
      name: 'topics',
      component: VueTopics,
      meta: {Auth: false}
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {Auth: false}
    },
    {
      path: '/article/create',
      name: 'create_article',
      component: CreateArticle,
      meta: {Auth: false}
    },
    {
      path: '/article/edit/:id',
      name: 'edit_article',
      component: EditArticle,
      meta: {Auth: false}
    },
    {
      path: '/article/:id',
      name: 'view_article',
      component: ViewArticle,
      meta: {Auth: false}
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.store.commit('SET_ERROR', null)
  if (to.matched.some(record => record.meta.Auth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    window.store.dispatch('checkAuth')
    if (!window.store.getters.isUserAuthenticated) {
      next({
        path: '/signin'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
