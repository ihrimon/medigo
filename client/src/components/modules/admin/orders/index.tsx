'use client';

import React from 'react';
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { IOrder } from '@/types';

const OrderList = ({ orders }: { orders: IOrder[] }) => {
  return (
    <div className='border border-gray-100'>
      <CardHeader className='flex flex-row items-center justify-between pb-2 pt-6 px-6 mb-6'>
        <CardTitle className='text-xl font-medium text-gray-900'>
          Orders Listing
        </CardTitle>
      </CardHeader>
      <CardContent className='pb-0'>
        <div className='overflow-x-auto'>
          <Table>
            <TableHeader className='bg-green-50 py-6'>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Delivery Charge</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order._id} className='hover:bg-gray-50'>
                  <TableCell>#{order._id?.slice(-5)}</TableCell>
                  <TableCell>
                    <div>
                      {order.user?.name} <br />
                      {order.user?.email}
                    </div>
                  </TableCell>
                  <TableCell>
                    {order.products.map((item) => (
                      <div key={item._id}>{item.product?.name}</div>
                    ))}
                  </TableCell>
                  <TableCell>
                    {order.products.map((item) => (
                      <div key={item._id}>{item.quantity}</div>
                    ))}
                  </TableCell>
                  <TableCell>{order.deliveryCharge}</TableCell>
                  <TableCell>{order.finalAmount}</TableCell>
                  <TableCell>{order.paymentMethod}</TableCell>
                  <TableCell>
                    {new Date(order.createdAt).toLocaleString()}
                  </TableCell>
                  <TableCell>{order.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </div>
  );
};

export default OrderList;
