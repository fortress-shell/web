import Vue from 'vue';
import Router from 'vue-router';
import PageNotFound from '@/components/etc/page-not-found';
import OAuthPage from '@/components/oauth/oauth-page';
import LandingPage from '@/components/landing/landing-page';
import ProjectPage from '@/components/projects/project-page';
import ProjectsPage from '@/components/projects/projects-page';
import BuildPage from '@/components/builds/build-page';
import BuildsPage from '@/components/builds/builds-page';
import ProjectSettingsPage from '@/components/settings/project-settings-page';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/oauth',
      name: 'OAuthPage',
      component: OAuthPage,
    },
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage,
    },
    {
      path: '/projects',
      name: 'ProjectsPage',
      component: ProjectsPage,
    },
    {
      path: '/project/:id',
      name: 'ProjectPage',
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
      path: '/project/:id/build/:id',
      name: 'BuildPage',
      component: BuildPage,
    },
    {
      path: '*',
      component: PageNotFound,
    },
  ],
});
