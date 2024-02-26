import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  // {
  //   name: 'ORDER MANAGEMENT',
  //   title: true,
  // },
  // {
  //   name: 'Orders',
  //   url: '/base',
  //   iconComponent: { name: 'cil-puzzle' },
  //   // children: [
  //   //   {
  //   //     name: 'All',
  //   //     url: '/base/accordion'
  //   //   },
  //   // ]
  // },
  {
    name: 'Order Management',
    title: true,
  },
  {
    name: 'Orders',
    url: '/inv',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'All',
        url: '/admin/all-order-list',
      },
      {
        name: 'Scheduled',
        url: '/admin/schedule-order-list',
      },
      {
        name: 'Pending',
        url: '/admin/pending-order-list',
      },
      {
        name: 'Accepted',
        url: '/admin/accepted-order-list',
      },
      {
        name: 'Processing',
        url: '/admin/processing-order-list',
      },
      {
        name: 'Order On The Way',
        url: '/admin/on-the-way-order-list',
      },
      {
        name: 'Delivered',
        url: '/admin/delivered-order-list',
      },
      {
        name: 'Cancelled',
        url: '/admin/cancelled-order-list',
      },
      {
        name: 'Payment Failed',
        url: '/admin/payment-failed-order-list',
      },
      {
        name: 'Refunded',
        url: '/admin/refunded-order-list',
      },
      // {
      //   name: 'Offline Payments',
      //   url: '/admin/offline-order-list',
      // },
    ],
  },
  {
    name: 'Order Refunds',
    url: '/inv',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Refund Requests',
        url: '/admin/order-refund-requests',
      },
    ],
  },
  {
    name: 'Flash Sales',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
  },
  {
    name: 'Promotion Management',
    title: true,
  },
  // {
  //   name: 'Campaigns',
  //   url: '/inv',
  //   iconComponent: { name: 'cil-puzzle' },
  //   children: [
  //     {
  //       name: 'Basic Campaigns',
  //       url: '/base/accordion',
  //     },
  //     {
  //       name: 'Items Campaigns',
  //       url: '/base/accordion',
  //     },
  //   ],
  // },
  {
    name: 'Banners ',
    url: '/inv',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Add Banner',
        url: '/admin/add-banner',
      },
      {
        name: 'Banners',
        url: '/admin/banner-list',
      },
    ],
  },
  {
    name: 'Push Notifications',
    url: '/inv',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Add Push Notification',
        url: '/admin/add-push-notification',
      },
      {
        name: 'Push Notification List',
        url: '/admin/push-notification-list',
      },
    ],
  },

  {
    name: 'Product Management',
    title: true,
  },
  // {
  //   name: 'Categories',
  //   url: '/inv',
  //   iconComponent: { name: 'cil-puzzle' },
  //   children: [
  //     {
  //       name: 'Category',
  //       url: '/base/accordion',
  //     },
  //     {
  //       name: 'Sub Category',
  //       url: '/base/accordion',
  //     },
  //     {
  //       name: 'Bulk Import',
  //       url: '/base/accordion',
  //     },
  //     {
  //       name: 'Bulk Export',
  //       url: '/base/accordion',
  //     },
  //   ],
  // },
  {
    name: 'Attributes',
    url: '/admin/attribute-list',
    iconComponent: { name: 'cil-drop' },
  },
  {
    name: 'Units',
    url: '/admin/unit-list',
    iconComponent: { name: 'cil-drop' },
  },
  {
    name: 'Product Setup',
    url: '/inv',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Add Product',
        url: '/admin/add-product',
      },
      {
        name: 'Products',
        url: '/admin/product-list',
      },
      {
        name: 'Products Gallery',
        url: '/admin/product-gallery',
      },
      {
        name: 'Products Request',
        url: '/admin/product-request-list',
      },
  //     {
  //       name: 'Product Gallery',
  //       url: '/base/accordion',
  //     },
  //     {
  //       name: 'New Item Request',
  //       url: '/base/accordion',
  //     },
  //     {
  //       name: 'Review',
  //       url: '/base/accordion',
  //     },
  //     {
  //       name: 'Bulk Import',
  //       url: '/base/accordion',
  //     },
  //     {
  //       name: 'Bulk Export',
  //       url: '/base/accordion',
  //     },
    ],
  },

  {
    name: 'Delivery Management',
    title: true,
  },

  {
    name: 'Vehicle Category',
    url: '/admin/vehicle-category-list',
    iconComponent: { name: 'cil-puzzle' },
  },
  {
    name: 'Deliverymans',
    url: '/inv',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Add Delivery Man',
        url: '/admin/add-deliveryman',
      },
      {
        name: 'Joining Requests',
        url: '/admin/deliveryman-request-list',
      },
      {
        name: 'Deliveryman List',
        url: '/admin/deliveryman-list',
      },
    ],
  },
  {
    name: 'Reviews',
    url: '/admin/review-list',
    iconComponent: { name: 'cil-puzzle' },
  },

  {
    name: 'Settings',
    title: true,
  },
  {
    name: 'User Type',
    url: '/admin/user-type-list',
    iconComponent: { name: 'cil-puzzle' },
  },
  {
    name: 'User Type Access',
    url: '/admin/user-type-access',
    iconComponent: { name: 'cil-puzzle' },
  },















  // ==========================================================================================================
  // {
  //   name: 'Dashboard',
  //   url: '/dashboard',
  //   iconComponent: { name: 'cil-speedometer' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW'
  //   }
  // },

  // {
  //   title: true,
  //   name: 'Theme'
  // },
  // {
  //   name: 'Colors',
  //   url: '/theme/colors',
  //   iconComponent: { name: 'cil-drop' }
  // },
  // {
  //   name: 'Typography',
  //   url: '/theme/typography',
  //   linkProps: { fragment: 'someAnchor' },
  //   iconComponent: { name: 'cil-pencil' }
  // },
  // {
  //   name: 'Components',
  //   title: true
  // },
  // {
  //   name: 'Base',
  //   url: '/base',
  //   iconComponent: { name: 'cil-puzzle' },
  //   children: [
  //     {
  //       name: 'Accordion',
  //       url: '/base/accordion'
  //     },
  //     {
  //       name: 'Breadcrumbs',
  //       url: '/base/breadcrumbs'
  //     },
  //     {
  //       name: 'Cards',
  //       url: '/base/cards'
  //     },
  //     {
  //       name: 'Carousel',
  //       url: '/base/carousel'
  //     },
  //     {
  //       name: 'Collapse',
  //       url: '/base/collapse'
  //     },
  //     {
  //       name: 'List Group',
  //       url: '/base/list-group'
  //     },
  //     {
  //       name: 'Navs & Tabs',
  //       url: '/base/navs'
  //     },
  //     {
  //       name: 'Pagination',
  //       url: '/base/pagination'
  //     },
  //     {
  //       name: 'Placeholder',
  //       url: '/base/placeholder'
  //     },
  //     {
  //       name: 'Popovers',
  //       url: '/base/popovers'
  //     },
  //     {
  //       name: 'Progress',
  //       url: '/base/progress'
  //     },
  //     {
  //       name: 'Spinners',
  //       url: '/base/spinners'
  //     },
  //     {
  //       name: 'Tables',
  //       url: '/base/tables'
  //     },
  //     {
  //       name: 'Tabs',
  //       url: '/base/tabs'
  //     },
  //     {
  //       name: 'Tooltips',
  //       url: '/base/tooltips'
  //     }
  //   ]
  // },
  // {
  //   name: 'Buttons',
  //   url: '/buttons',
  //   iconComponent: { name: 'cil-cursor' },
  //   children: [
  //     {
  //       name: 'Buttons',
  //       url: '/buttons/buttons'
  //     },
  //     {
  //       name: 'Button groups',
  //       url: '/buttons/button-groups'
  //     },
  //     {
  //       name: 'Dropdowns',
  //       url: '/buttons/dropdowns'
  //     }
  //   ]
  // },
  // {
  //   name: 'Forms',
  //   url: '/forms',
  //   iconComponent: { name: 'cil-notes' },
  //   children: [
  //     {
  //       name: 'Form Control',
  //       url: '/forms/form-control'
  //     },
  //     {
  //       name: 'Select',
  //       url: '/forms/select'
  //     },
  //     {
  //       name: 'Checks & Radios',
  //       url: '/forms/checks-radios'
  //     },
  //     {
  //       name: 'Range',
  //       url: '/forms/range'
  //     },
  //     {
  //       name: 'Input Group',
  //       url: '/forms/input-group'
  //     },
  //     {
  //       name: 'Floating Labels',
  //       url: '/forms/floating-labels'
  //     },
  //     {
  //       name: 'Layout',
  //       url: '/forms/layout'
  //     },
  //     {
  //       name: 'Validation',
  //       url: '/forms/validation'
  //     }
  //   ]
  // },
  // {
  //   name: 'Charts',
  //   url: '/charts',
  //   iconComponent: { name: 'cil-chart-pie' }
  // },
  // {
  //   name: 'Icons',
  //   iconComponent: { name: 'cil-star' },
  //   url: '/icons',
  //   children: [
  //     {
  //       name: 'CoreUI Free',
  //       url: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'FREE'
  //       }
  //     },
  //     {
  //       name: 'CoreUI Flags',
  //       url: '/icons/flags'
  //     },
  //     {
  //       name: 'CoreUI Brands',
  //       url: '/icons/brands'
  //     }
  //   ]
  // },
  // {
  //   name: 'Notifications',
  //   url: '/notifications',
  //   iconComponent: { name: 'cil-bell' },
  //   children: [
  //     {
  //       name: 'Alerts',
  //       url: '/notifications/alerts'
  //     },
  //     {
  //       name: 'Badges',
  //       url: '/notifications/badges'
  //     },
  //     {
  //       name: 'Modal',
  //       url: '/notifications/modal'
  //     },
  //     {
  //       name: 'Toast',
  //       url: '/notifications/toasts'
  //     }
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   iconComponent: { name: 'cil-calculator' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   title: true,
  //   name: 'Extras'
  // },
  // {
  //   name: 'Pages',
  //   url: '/login',
  //   iconComponent: { name: 'cil-star' },
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500'
  //     }
  //   ]
  // },
  // {
  //   title: true,
  //   name: 'Links',
  //   class: 'py-0'
  // },
  // {
  //   name: 'Docs',
  //   url: 'https://coreui.io/angular/docs/templates/installation',
  //   iconComponent: { name: 'cil-description' },
  //   attributes: { target: '_blank', class: '-text-dark' },
  //   class: 'mt-auto'
  // },
  // {
  //   name: 'Try CoreUI PRO',
  //   url: 'https://coreui.io/product/angular-dashboard-template/',
  //   iconComponent: { name: 'cil-layers' },
  //   attributes: { target: '_blank' }
  // }
];
