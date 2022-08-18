import { createSlice } from '@reduxjs/toolkit'

export const orderSlice = createSlice({
    name: 'orders',
    initialState: {
        value: [],
        success: true,
        message: ""
    },
    reducers: {
        loadOrders: (state, action) => {
            // console.log("loading orders");
            state.message = "";
            state.success = true;
            state.value = action.payload;
        },
        fetchingOrders: (state) => {
            // console.log("fetching orders");
            state.message = "Fetching data...";
            state.success = false;
        },
        errorOrders: (state, action) => {
            // console.log("error while load orders");
            state.message = action.payload;
            state.success = false;
        }
    },
})


export const { loadOrders, fetchingOrders, errorOrders } = orderSlice.actions

export const selectOrders = (state) => state.orders

export default orderSlice.reducer


