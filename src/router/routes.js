import PageNotFound from '@/components/etc/page-not-found';
import OAuthPage from '@/components/oauth/oauth-page';
import LandingPage from '@/components/landing/landing-page';
import ProjectPage from '@/components/projects/project-page';
import ProjectsPage from '@/components/projects/projects-page';
import BuildPage from '@/components/builds/build-page';
import MaintenancePage from '@/components/maintenance/maintenance-page';
import BuildsPage from '@/components/builds/builds-page';
import ProjectSettingsPage from '@/components/settings/project-settings-page';
import DashboardPage from '@/components/dashboard/dashboard-page';
import {
  onMaintenanceRedirectToMaintenancePage,
  onUnauthorizedRedirectToPageNotFound,
} from './guards';

export default [
  {
    path: '/',
    component: LandingPage,
    beforeEnter: onMaintenanceRedirectToMaintenancePage,
  },
  {
    path: '/dashboard',
    component: DashboardPage,
    beforeEnter: onUnauthorizedRedirectToPageNotFound,
    children: [
      {
        path: '/projects',
        component: ProjectsPage,
      },
      {
        path: '/project/:project_id',
        component: ProjectPage,
        children: [
          {
            path: '',
            component: BuildsPage,
          },
          {
            path: 'settings',
            component: ProjectSettingsPage,
          },
        ],
      },
      {
        path: '/project/:project_id/build/:build_id',
        component: BuildPage,
      },
    ],
  },
  {
    path: '/login',
    component: OAuthPage,
    beforeEnter: onMaintenanceRedirectToMaintenancePage,
  },
  {
    path: '/maintenance',
    component: MaintenancePage,
  },
  {
    path: '*',
    component: PageNotFound,
    beforeEnter: onMaintenanceRedirectToMaintenancePage,
  },
];
