import Vue from "vue"
import VueRouter from "vue-router"

import Authentication from "../layouts/Authentication/Authentication"
import Admin from "../layouts/Admin/"

Vue.use(VueRouter)

const routes = [
  {
    path: "*",
    redirect: "/not-found",
    name: "redirect"
  },
  {
    path: "/auth",
    redirect: "/login",
    name: "authentication",
    component: Authentication,
    children: [
      {
        path: "/login",
        name: "login",
        component: () => import("../views/Login/Login.vue")
      },
      {
        path: "/signup",
        name: "signup",
        component: () => import("../views/SignUp/SignUp.vue")
      },
      {
        path: "/recovery",
        name: "pass-recovery",
        component: () => import("../views/PasswordRecovery/PasswordRecovery.vue")
      }
    ]
  },
  {
    path: "/",
    redirect: "/familiar",
    name: "admin-layout",
    component: Admin,
    children: [
      {
        path: "/familiar",
        name: "familiar",
        component: () => import("../views/Familiar")
      },
      {
        path: "/municipal",
        redirect: "/municipal/identificacao",
        name: "municipal",
        component: () => import("../views/Municipal"),
        children: [
          {
            path: "/municipal/identificacao",
            name: "identificacao",
            component: () => import("../views/Municipal/Identificacao")
          },
          {
            path: "/municipal/dados",
            name: "dados-municipio",
            component: () => import("../views/Municipal/Dados")
          }
        ]
      },
      {
        path: "/not-found",
        name: "not-found",
        component: () => import("../views/Error/NotFound")
      }
    ]
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // const tokenExists = window.$cookies.isKey("USERTOKEN")
  // const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  // if (requiresAuth && !tokenExists) next("/login")
  // else if (!requiresAuth && tokenExists) next("/")
  // else next()
  next()
})

export default router
