import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-info',
  templateUrl: './sidebar-info.component.html',
  styleUrls: ['./sidebar-info.component.scss'],
})
export class SidebarInfoComponent {
  sidebarItems: {
    routerLink?: string;
    icon: any;
    title: string;
    'data-testid'?: string;
    children?: {
      routerLink: string;
      permission?: string;
      title: string;
      'data-testid'?: string;
    }[];
  }[] = [
    {
      title: 'Home',
      icon: 'dashboard',
      routerLink: '/dashboard',
    },
    {
      title: 'User Management',
      icon: 'people',
      children: [
        {
          permission: 'internal.get.users.by.merchant.id',
          routerLink: '/dashboard/role-management/users',
          title: 'Users',
        },
        {
          permission: 'external.get.external.roles',
          routerLink: '/dashboard/role-management/roles',
          title: 'Roles',
        },

        {
          permission: 'internal.get.users.permission.by.id',
          routerLink: '/dashboard/role-management/designations',
          title: 'Permissions',
        },

        {
          permission: 'external.get.external.designations',
          routerLink: '/dashboard/role-management/roles',
          title: 'Designations',
        },
      ],
    },
    {
      title: 'Settings',
      icon: 'settings',
      children: [
        {
          routerLink: '/dashboard/settings/profile',
          title: 'Profile',
        },
        {
          permission: 'external.get.merchant.accounts',
          routerLink: '/dashboard/settings/accounts',
          title: 'Accounts',
        },
        { routerLink: '/dashboard/settings/account-alerts', title: 'Alerts' },
        {
          permission: 'external.get.wallets.MerchantWalletsList',
          routerLink: '/dashboard/settings/wallets-collection',
          title: 'Collection Wallets',
        },
        {
          permission: 'external.get.wallets.MerchantWalletsList',
          routerLink: '/dashboard/settings/wallets-topup',
          title: 'Topup Wallets',
        },
        {
          permission: 'external.get.ipns',
          routerLink: '/dashboard/settings/ipn',
          title: 'IPN',
        },
        {
          permission: 'get.credentials',
          routerLink: '/dashboard/settings/api-keys',
          title: 'Api Keys',
        },
        {
          permission: 'external.get.getSubscriptions',
          routerLink: '/dashboard/settings/subscriptions',
          title: 'Subscriptions',
        },
      ],
    },
    {
      title: 'Payments',
      icon: 'payments',
      children: [
        {
          permission: 'external.get.paymentLink',
          routerLink: '/dashboard/payments/payment-links',
          title: 'Payment Links',
        },
        {
          permission: 'external.get.chargebacks',
          routerLink: '/dashboard/payments/chargebacks',
          title: 'Chargebacks',
        },
        {
          permission: 'external.get.retrieval.requests',
          routerLink: '/dashboard/payments/retrievals',
          title: 'Retrievals',
        },
        {
          permission: 'external.post.create.refunds',
          routerLink: '/dashboard/payments/refunds',
          title: 'Refunds',
        },
      ],
    },
    {
      title: 'Settlements',
      icon: 'pie_chart',
      children: [
        {
          permission: 'external.get.getWalletTransactions.actual',
          routerLink: '/dashboard/settlement/actual-balance',
          title: 'Cleared Amount',
        },
        {
          permission: 'external.get.getWalletTransactions.available',
          routerLink: '/dashboard/settlement/available-balance',
          title: 'Cleared/Uncleared Amount',
        },
        {
          permission: 'external.get.getWalletTransactions.pending',
          routerLink: '/dashboard/settlement/pending-balance',
          title: 'Pending Amount',
        },
        {
          permission: 'external.get.getWalletTransactions.locked',
          routerLink: '/dashboard/settlement/locked-balance',
          title: 'Locked Amount',
        },
        {
          permission: 'internal.post.settle.merchant',
          routerLink: '/dashboard/settlement/make-settlement',
          title: 'Make Settlement',
        },
      ],
    },
    {
      title: 'Reports',
      icon: 'description',
      children: [
        {
          permission: 'external.get.merchant.orders',
          routerLink: '/dashboard/reports/orders',
          title: 'Orders',
        },
        {
          permission: 'external.get.transactions',
          routerLink: '/dashboard/reports/transactions',
          title: 'Transactions',
        },
        {
          permission: 'get.user.activity',
          routerLink: '/dashboard/reports/audit',
          title: 'Audit Trail',
        },
        {
          routerLink: '/dashboard/reports/account-alerts',
          title: 'Account Alerts',
        },
        {
          permission: 'external.get.getSettlementTransactions',
          routerLink: '/dashboard/reports/settlements-reports',
          title: 'Settlements',
        },
        {
          routerLink: '/dashboard/reports/direct-integration',
          title: 'MPGS Direct Integration',
        },
        {
          routerLink: '/dashboard/reports/v2-transactions',
          title: 'V2 Transactions',
        },
        {
          routerLink: '/dashboard/reports/v2-settlements',
          title: 'V2 Settlements',
        },
      ],
    },
    {
      title: 'API Reports',
      icon: 'description',
      children: [
        {
          routerLink: '/dashboard/api-reports/request-transactions',
          title: 'Request Transactions',
        },
        {
          routerLink: '/dashboard/api-reports/finacle-charge-transactions',
          title: 'Finacle Charge',
        },
        {
          routerLink: '/dashboard/api-reports/mobile-money-transactions',
          title: 'Mobile Money',
        },
        {
          routerLink: '/dashboard/api-reports/mpesa-stk-push-transactions',
          title: 'Mpesa STK Push',
        },
        {
          routerLink: '/dashboard/api-reports/eazzy-pay-push-transactions',
          title: 'Eazzy Pay Push',
        },
        {
          routerLink: '/dashboard/api-reports/statistics',
          title: 'Api Statistics',
        },
      ],
    },
    {
      title: 'Resources',
      icon: 'stream',
      children: [
        {
          permission: 'external.get.goLiveManual',
          routerLink: '/dashboard/resources/go-live',
          title: 'Go live',
        },
        {
          permission: 'external.get.pgwManual',
          routerLink: '/dashboard/resources/pgw-manual',
          title: 'PGW Manual',
        },
        {
          routerLink: '/dashboard/resources/training-manuals',
          title: 'Training Manuals',
        },
      ],
    },
    {
      title: 'Help Center',
      icon: 'help',
      routerLink: '/dashboard/help-center',
    },
  ];
}
