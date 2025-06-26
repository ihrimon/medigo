'use client';

import * as React from 'react';
import { Dice5, LayoutDashboard, ListTodo, Logs, ShoppingBasket, UserPlus } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '@/components/ui/sidebar';
import Image from 'next/image';
import Link from 'next/link';
import { DashboardItems } from './DashboardItems';
import { DashboardUser } from './DashboardUser';
import { useUser } from '@/context/UserContext';

const sidebarItems = {
  adminItems: [
    {
      title: 'Dashboard',
      url: '/admin/dashboard',
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: 'Products',
      url: '/admin/products',
      icon: ShoppingBasket,
    },
    {
      title: 'Categories',
      url: '/admin/categories',
      icon: ListTodo,
    },
    {
      title: 'Brands',
      url: '/admin/brands',
      icon: Dice5,
    },
    {
      title: 'Orders',
      url: '/admin/orders',
      icon: Logs,
    },
    {
      title: 'Customers',
      url: '/admin/customers',
      icon: UserPlus,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser();

  return (
    <Sidebar collapsible='icon' {...props}>
      {/* Logo Header */}
      <SidebarHeader>
        <div className='my-6 flex flex-col items-center'>
          <Link href='/'>
            <Image
              width={80}
              height={80}
              alt='logo'
              src={'/assets/logo.png'}
              className='rounded-md'
            />
          </Link>
        </div>
      </SidebarHeader>

      {/* Sidebar Menu */}
      <SidebarContent className='px-2'>
        <DashboardItems items={sidebarItems.adminItems} />
      </SidebarContent>

      {/* Footer User Info */}
      <SidebarFooter className='px-2 pb-4'>
        {user && (
          <DashboardUser
            user={{
              name: user.name,
              email: user.email,
              avatar: 'https://res.cloudinary.com/do6tvtff8/image/upload/v1742644477/images.jpg.jpg',
            }}
          />
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
