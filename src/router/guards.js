/**
 * [onMaintenanceRedirectToMaintenancePage description]
 * @param  {[type]}   from [description]
 * @param  {[type]}   to   [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
export function onMaintenanceRedirectToMaintenancePage(from, to, next) {
  if (!window.SESSION_SCRIPT_LOADED) {
    next('/maintenance');
  } else {
    next();
  }
}

/**
 * [onMaintenanceRedirectToMaintenancePage description]
 * @param  {[type]}   from [description]
 * @param  {[type]}   to   [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
export function onUnauthorizedRedirectToPageNotFound(from, to, next) {
  if (!window.SESSION) {
    next('/page-not-found');
  } else {
    next();
  }
}
