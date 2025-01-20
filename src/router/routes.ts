import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/MainLayout.vue') }],
  },
  {
    path: '/offers',
    component: () => import('pages/OffersPage.vue')
  },
  {
    path: '/offers/:offerId',
    component: () => import('pages/DetailsPage.vue')
  },
  {
    path: '/offers/:offerId/:term',
    component: () => import('pages/ConfirmationPage.vue')
  },
  {
    path: '/login',
    component: () => import('pages/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/LoginPage.vue') }],
  },
  {
    path: '/register',
    component: () => import('pages/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/RegisterPage.vue') }],
  },
  {
    path: '/reset-password',
    component: () => import('pages/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ResetPasswordPage.vue') }],
  },
  {
    path: '/panel',
    component: () => import('pages/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/PanelPage.vue') }],
  },
  {
    path: '/place/:slug',
    component: () => import('pages/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/PlacePage.vue') }],
  },
  {
    path: '/initiative-for-conscious-tourism',
    component: () => import('pages/ConsciousTourism.vue'),
    children: [{ path: '', component: () => import('pages/ConsciousTourism.vue') }],
  },
  {
    path: '/travel-voucher',
    component: () => import('pages/VoucherPage.vue'),
    children: [{ path: '', component: () => import('pages/VoucherPage.vue') }],
  },
  {
    path: '/about-us',
    component: () => import('pages/AboutUsPage.vue'),
    children: [{ path: '', component: () => import('pages/AboutUsPage.vue') }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
