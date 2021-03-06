import Vue from 'vue';
import router from '../router'
// проверим авторизирован ли пользователь
router.beforeEach( (to, from, next) => {
  let is_authenticated  =  Vue.prototype.$auth.check();

  if (to.matched.some(record => record.meta.requiresAuth) && ! is_authenticated) {
    // next({ name: 'login' });
      // window.location.href = '/login/';
      window.location.replace(window.location.origin+"/#/pages/login");
      window.location.reload();
  } else {
    next();
  }
});

// запускается при загрузке страницы
router.onReady( (route) => {
  let auth = route.matched.some(record => { return record.meta.requiresAuth || false });
  let is_authenticated = Vue.prototype.$auth.check();

  if ( auth && ! is_authenticated && route.name !== 'login') {
    // router.push({ name: 'login' });
      // window.location.href = '/login/';
      window.location.replace(window.location.origin+"/#/pages/login");
      window.location.reload();
  } else if ( auth && is_authenticated && route.name === 'login') {
    // router.push({ name: 'MainPage' });
  }
});
