import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Books from "../views/Books.vue";
import Tutors from "../views/Tutors.vue";
import Explore from "../views/Explore.vue";
import Company from "../views/Company.vue";
import CompanyHome from "../components/CompanyHome.vue";
import CompanyPost from "../components/CompanyPost.vue";
import CompanyFaq from "../components/CompanyFaq.vue";
import CompanyOther from "../components/CompanyOther.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/books",
    name: "Books",
    component: Books
  },
  {
    path: "/tutors",
    name: "Tutors",
    component: Tutors
  },
  {
    path: "/explore",
    name: "Explore",
    component: Explore
  },
  {
    path: "/explore/:id",
    name: "Busines",
    component: Company,
    children: [
      {
        path: "home",
        component: CompanyHome
      },
      {
        path: "faq",
        component: CompanyFaq
      },
      {
        path: "posts",
        component: CompanyPost
      },
      {
        path: "other",
        component: CompanyOther
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
