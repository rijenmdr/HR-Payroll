import {
  Briefcase03Icon,
  Calendar03Icon,
  DashboardSquare03Icon,
  DollarCircleIcon,
  Moon02Icon,
  Note01Icon,
  Settings02Icon,
  Sun03Icon,
  Task01Icon,
  UserMultiple02Icon,
  UserMultipleIcon,
  UserSwitchIcon,
} from 'hugeicons-react';

export const sidebarLinks = {
  navMain: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: DashboardSquare03Icon,
    },
    {
      title: 'All Employees',
      url: '/employees',
      icon: UserMultiple02Icon,
    },
    {
      title: 'All Departments',
      url: '/departments',
      icon: UserSwitchIcon,
    },
    {
      title: 'Attendance',
      url: '/attendance',
      icon: Calendar03Icon,
    },
    {
      title: 'Payroll',
      url: '/payroll',
      icon: DollarCircleIcon,
    },
    {
      title: 'Jobs',
      url: '/jobs',
      icon: Briefcase03Icon,
    },
    {
      title: 'Candidates',
      url: '/candidates',
      icon: UserMultipleIcon,
    },
    {
      title: 'Leaves',
      url: '/leaves',
      icon: Task01Icon,
    },
    {
      title: 'Holidays',
      url: '/holidays',
      icon: Note01Icon,
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: Settings02Icon,
    },
  ],
};

export const themeSwitch = [
  {
    label: 'Dark',
    icon: Sun03Icon,
    id: 'dark',
  },
  {
    label: 'Light',
    icon: Moon02Icon,
    id: 'light',
  },
];
