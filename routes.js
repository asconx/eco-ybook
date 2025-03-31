const routes = [
  // inne trasy
  {
    path: '/mapa',
    component: () => import('pages/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MapaPage.vue') }
    ],
  },
  // inne trasy
];

export default routes;