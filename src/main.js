// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import the vue instance
import Vue from 'vue'
//import the App component
import App from './App'
//import the vue router
import VueRouter from 'vue-router'
//tell vue to use the router
Vue.use(VueRouter)
/* eslint-disable no-new */
//import the hello component
import Hello from './components/Hello'
//import the about component
import About from './components/About'
//import the param component
import Param from './components/Param'
//import paramdetails component
import paramdetails from './components/paramdetails'
//define your routes
const routes = [
	//route for the home route of the webpage
	{ path: '/', component: Hello },
	//route for the about route of the webpage
	{ path: '/about', component: About }, 
  //route for the param route of the webpage
  { path: '/param', component: Param },
  //route for the paramdetails passing in params
  { path: '/Paramdetails/:id', component: paramdetails, name: 'Paramdetails' }
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})

//place the router guard
router.beforeEach((to, from, next) => {
  if(to.path == '/param'){
    if(localStorage.getItem('user')==undefined){
      var user = prompt('please enter your username');
      var pass = prompt('please enter your password');
      console.log(user);
      console.log(pass);
      if (user == 'username' && pass == 'password'){
        localStorage.setItem('user', user);
        next();
      }else{
        alert('Wrong username and password, you do not have permission to access that route');
        return;
      }
      
    }
    
  }
   next()
})
//instatinat the vue instance
new Vue({
	//define the selector for the root component
  el: '#app',
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App },
  //pass in the router to the vue instance
  router
}).$mount('#app')//mount the router on the app
