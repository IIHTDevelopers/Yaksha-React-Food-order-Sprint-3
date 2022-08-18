import { configureStore } from '@reduxjs/toolkit';
import foodsReducer from '../features/foods/foodsSlice';
import ordersReducer from '../features/orders/ordersSlice';

export default configureStore({
  reducer: {
    foods: foodsReducer,
    orders: ordersReducer
  }
});
