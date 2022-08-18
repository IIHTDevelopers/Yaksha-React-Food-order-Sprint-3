import React, { useState } from 'react';
import styles from './PlaceOrder.module.css'

import { useDispatch } from 'react-redux';
import { loadOrders, errorOrders } from './../../features/orders/ordersSlice';

import { save } from './../../utils/apiUtils'

const PlaceOrder = () => {
  const search = window.location?.search ?? ''
  const params = new URLSearchParams(search)
  const price = params.get('price')
  const foodId = params.get('id')
  const [totalPrice, setTotalPrice] = useState(params.get('price'))
  const [paymentForm, setPaymentForm] = useState({
    email: '',
    phone: '',
    quantity: 1
  })
  const { quantity, email, phone } = paymentForm

  const dispatch = useDispatch()

  const handleOnChange = (e) => {
    
  }

  const handleOnSubmit = () => {
    
  }

  return (
    <div>
    </div>
  )
}

export default PlaceOrder
