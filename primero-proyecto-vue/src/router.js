import Vue from "vue";
import Router from "vue-router";

import Inicio from "./components/HelloWorld";
import Contacto from "./components/Contacto";
import Ecamp from "./components/Ecamp";
import Blog from "./components/Blog";
import Comentarios from "./components/Comentarios";
import NotFound from "./components/NotFound";
import Cliente from "./components/Cliente";
import ContactoNuevo from "./components/ContactoNuevo";
import Demo from "./components/Demo";
import Servicio from "./components/Servicio";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/demo",
      component: Demo,
      name: "demo",
      children: [
        {
          path: "",
          component: Servicio,
          name: "Servicio"
        }
      ]
    },
    {
      path: "/Hello*",
      component: Inicio
    },
    {
      path: "/contacto",
      component: Contacto,
      name: "contacto",
      alias: ["/contacto-2019", "/contacto-2020"],
      redirect: to => {
        console.log(to);
        //aplicar logica
        return { name: "contacto-nuevo" };
      }
    },
    {
      path: "/contacto-nuevo",
      component: ContactoNuevo,
      name: "contacto-nuevo"
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
      props: route => ({
        cliente: `${route.params.cliente} S.A`
      })
    },
    {
      path: "*",
      component: NotFound
    }
  ]
});
