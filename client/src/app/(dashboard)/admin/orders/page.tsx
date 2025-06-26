// import OrderList from '@/components/modules/admin/orders';
// import { getAllOrders } from '@/services/order';
import React from 'react'

const AdminOrdersPage = async () => {
    // const { data: ordersData } = await getAllOrders();
    // const orders = ordersData?.data || [];
    // console.log(orders)

  return (
    <div className='max-w-7xl mx-auto'>
      {/* <h3 className='text-2xl mb-6'>Orders</h3>
      {orders.length > 0 ? (
        <OrderList
          orders={orders}
        />
      ) : (
        <div className='text-center text-3xl font-bold text-red-500'>
          Orders Are Not Available
        </div>
      )} */}
      Order Page
    </div>
  );
}

export default AdminOrdersPage
