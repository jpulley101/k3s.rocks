import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '89e'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '4d2'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '611'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '5b7'),
            routes: [
              {
                path: '/Argocd',
                component: ComponentCreator('/Argocd', 'cd5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Auto-healing',
                component: ComponentCreator('/Auto-healing', '108'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Basic-auth',
                component: ComponentCreator('/Basic-auth', '827'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Erpnext',
                component: ComponentCreator('/Erpnext', '21c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/External-load-balancer',
                component: ComponentCreator('/External-load-balancer', 'a55'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Faq',
                component: ComponentCreator('/Faq', '19a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/First-deploy',
                component: ComponentCreator('/First-deploy', '206'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/https-cert-manager-letsencrypt',
                component: ComponentCreator('/https-cert-manager-letsencrypt', '8f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/install-setup',
                component: ComponentCreator('/install-setup', '916'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/keel',
                component: ComponentCreator('/keel', '4da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/logging',
                component: ComponentCreator('/logging', '3be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/metrics',
                component: ComponentCreator('/metrics', 'e50'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Persistent-Storage-Longhorn',
                component: ComponentCreator('/Persistent-Storage-Longhorn', '492'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plausible-analytics',
                component: ComponentCreator('/plausible-analytics', '9f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Private-registry',
                component: ComponentCreator('/Private-registry', '3f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/technitium-dns',
                component: ComponentCreator('/technitium-dns', '923'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/traefik-dashboard',
                component: ComponentCreator('/traefik-dashboard', '973'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uptime-kuma',
                component: ComponentCreator('/uptime-kuma', 'b27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '984'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
