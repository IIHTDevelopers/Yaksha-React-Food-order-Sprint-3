import React, { useEffect } from 'react';
import styles from './OrderList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadOrders, fetchingOrders, errorOrders, selectOrders } from './../../features/orders/ordersSlice';
// import { fetchAllOrders } from './../../utils/orders'
import { fetchAll } from './../../utils/apiUtils'

const OrderList = () => {
  const orders = useSelector(selectOrders);

  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(fetchingOrders());

    fetchAll("orders", (errMessage, data) => {
      
    });
  }, [dispatch])

  return (
    <div>
    </div>

  );
}

export default OrderList;
