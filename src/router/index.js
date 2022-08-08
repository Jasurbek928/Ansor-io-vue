import * as VueRouter from "vue-router";
import HomePage from "@/components/HomePage.vue";
import IndustryPage from "@/components/IndustryPage.vue";
import PortfolioPage from "@/components/PortfolioPage.vue";
import AboutPage from "@/components/AboutPage.vue";

// layout
import defaultLayout from "@/layouts/defaultLayout.vue";

const routes = [
  {
    path: "/",
    component: defaultLayout,
    children: [
      { path: "/", component: HomePage },
      { path: "/industry", component: IndustryPage },
      { path: "/portfolio", component: PortfolioPage },
      { path: "/about", component: AboutPage },
    ],
  },
];
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
  linkActiveClass: 'active-link',
  // linkExactActiveClass: 'exact-active-link',
});

export default router;
