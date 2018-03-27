import store from '@/store';

/**
 * If maintenance active or smth bad happens on server
 * redirect to maintenance page
 * @param  {Route}   from source route
 * @param  {Route}   to   target route
 * @param  {Function} next callback to pass to target route
 */
export function onMaintenanceRedirectToMaintenancePage(from, to, next) {
  if (store.state.authentication.isMaintanance) {
    next('/maintenance');
  } else {
    next();
  }
}

/**
 * On unautherized state redirect to page-not-found
 * @param  {Route}   from source route
 * @param  {Route}   to   target route
 * @param  {Function} next callback to pass to target route
 */
export function onUnauthorizedRedirectToPageNotFound(from, to, next) {
  if (store.state.authentication.isAuthenticated) {
    next();
  } else {
    next({
      path: '/page-not-found',
      replace: true,
    });
  }
}

/**
 * If maintenance is not set anymore redirect to landing page
 * @param  {Route}   from source route
 * @param  {Route}   to   target route
 * @param  {Function} next callback to pass to target route
 */
export function onMaintenanceCompleteRedirectToHomePage(from, to, next) {
  if (store.state.authentication.isMaintanance) {
    next();
  } else {
    next({
      path: '/',
      replace: true,
    });
  }
}

/**
 * If access code exists exchange it and go to dashboard
 * @param  {Route}   from source route
 * @param  {Route}   to   target route
 * @param  {Function} next callback to pass to target route
 */
export function onOAuthLogin(source, target, next) {
  if (store.state.authentication.isMaintanance) {
    next('/maintenance');
  } else if (source.query.code) {
    store.dispatch('authentication/exchangeCodeForToken', source.query.code);
    next({
      path: '/',
      replace: true,
    });
  } else {
    next();
  }
}
