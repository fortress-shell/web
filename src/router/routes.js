import PageNotFound from '@/components/etc/page-not-found';
import LandingPage from '@/components/landing/landing-page';
import ProjectPage from '@/components/projects/project-page';
import ProjectsPage from '@/components/projects/projects-page';
import BuildPage from '@/components/builds/build-page';
import MaintenancePage from '@/components/etc/maintenance-page';
import BuildsPage from '@/components/builds/builds-page';
import DashboardPage from '@/components/dashboard/dashboard-page';
import SubscriptionsPage from '@/components/subscriptions/subscriptions-page';
import {
  onMaintenanceRedirectToMaintenancePage,
  onUnauthorizedRedirectToPageNotFound,
  onMaintenanceCompleteRedirectToHomePage,
  onOAuthLogin,
} from '@/router/guards';

export default [
  {
    path: '/',
    component: LandingPage,
    beforeEnter: onOAuthLogin,
  },
  {
    path: '/dashboard',
    component: DashboardPage,
    beforeEnter: onUnauthorizedRedirectToPageNotFound,
    children: [
      {
        path: '',
        component: ProjectsPage,
      },
      {
        path: 'subscriptions',
        component: SubscriptionsPage,
      },
      {
        path: 'projects/:project_id',
        component: ProjectPage,
        children: [
          {
            path: '',
            name: 'project',
            component: BuildsPage,
          },
          {
            path: 'builds/:id',
            name: 'build',
            component: BuildPage,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    component: PageNotFound,
    beforeEnter: onMaintenanceRedirectToMaintenancePage,
  },
  {
    path: '/maintenance',
    component: MaintenancePage,
    beforeEnter: onMaintenanceCompleteRedirectToHomePage,
  },
];
