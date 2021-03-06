// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill')
  },
  {
    title: 'Operações Concluídas',
    path: '/dashboard/operacoesconcluidas',
    // icon: getIcon('eva:people-fill')
    icon: getIcon('eva:file-text-fill')
  },
  {
    title: 'Acessos',
    path: '/dashboard/operacoesnaoconcluidas',
    icon: getIcon('eva:file-text-fill')
    // icon: getIcon('eva:shopping-bag-fill')
  },
  {
    title: 'Pagamentos Diarios',
    path: '/dashboard/mercados',
    icon: getIcon('eva:file-text-fill')
    // icon: getIcon('eva:shopping-bag-fill')
  },
  // {
  //   title: 'Relatórios',
  //   path: '/dashboard/relatorios',
  //   icon: getIcon('eva:file-text-fill')
  // }
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: getIcon('eva:lock-fill')
  // },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon('eva:person-add-fill')
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon('eva:alert-triangle-fill')
  // }
];

export default sidebarConfig;
