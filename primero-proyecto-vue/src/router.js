import Vue from "vue";
import Router from "vue-router";

import Inicio from "./components/HelloWorld";
import Contacto from "./components/Contacto";
import Ecamp from "./components/Ecamp";
import Blog from "./components/Blog";
import Comentarios from "./components/Comentarios";
import NotFound from "./components/NotFound";
import Cliente from "./components/Cliente";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/Hello*",
      component: Inicio
    },
    {
      path: "/contacto",
      component: Contacto,
      name: "contacto"
    },
    {
      path: "/ecamp",
      component: Ecamp
    },
    {
      path: "/blog/:entrada",
      component: Blog,
      children: [
        {
          component: Comentarios,
          path: "/comentarios/:user",
          name: "comentarios"
        }
      ]
    },
    {
      path: "/cliente/:cliente",
      component: Cliente,
      name: "cliente",
      props: true
    },
    {
      path: "*",
      component: NotFound
    }
  ]
});
