import Vue from "vue";
import Router from "vue-router";

import Inicio from "./components/HelloWorld";
import Contacto from "./components/Contacto";
import Ecamp from "./components/Ecamp";
import Blog from "./components/Blog";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/HelloWorld",
      component: Inicio
    },
    {
      path: "/contacto",
      component: Contacto
    },
    {
      path: "/ecamp",
      component: Ecamp
    },
    {
      path: "/blog/:entrada",
      component: Blog
    }
  ]
});