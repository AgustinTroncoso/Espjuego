import { createRouter, createWebHistory } from 'vue-router'

//Vistas
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Records from '@/views/Records.vue'
import GameView from '@/views/GameView.vue'

//Rutas
const routes = [

{ name: 'Home', path: '/', component: Home, meta: { isPrivate: false } },
{ name: 'Login', path: '/Login', component: Login, meta: { isPrivate: false } },
{ name: 'Records', path: '/Records', component: Records, meta: { isPrivate: true } },
{ name: 'GameView', path: '/GameView', component: GameView, meta: { isPrivate: true } }


]

//Router
const router = createRouter({ history: createWebHistory(), routes })

router.beforeEach((to, from, next) => {
    const isPrivate = to.meta.isPrivate; 
    const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";
    console.log("Privado?", isPrivate, "Autenticado?", isAuthenticated, "Ruta:", to.name);
    if (isPrivate && !isAuthenticated) {
      next({ path: '/Login' }); 
    } else {
      next(); 
    }
  })

export default router;