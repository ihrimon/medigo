/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
import CustomerList from '@/components/modules/admin/customers';
import { getAllCustomers } from '@/services/customer';

const AdminCustomerPage = () => {
  const [customers, setCustomers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await getAllCustomers();
        setCustomers(response.data ?? []);
      } catch (err: any) {
        setError('Failed to load customers');
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div className='max-w-7xl mx-auto py-10'>
      <h3 className='text-2xl font-bold mb-6'>Customers</h3>

      {loading ? (
        <p className='text-gray-500 text-center'>Loading...</p>
      ) : error ? (
        <p className='text-red-500 text-center'>{error}</p>
      ) : customers.length > 0 ? (
        <CustomerList customers={customers} />
      ) : (
        <p className='text-gray-400 text-center'>No customers found.</p>
      )}
    </div>
  );
};

export default AdminCustomerPage;
