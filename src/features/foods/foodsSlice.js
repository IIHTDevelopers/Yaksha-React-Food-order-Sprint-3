import { createSlice } from '@reduxjs/toolkit'

export const foodSlice = createSlice({
    name: 'foods',
    initialState: {
        value: [],
        success: true,
        message: ""
    },
    reducers: {
        loadFoods: (state, action) => {
            // console.log("loading");
            // console.log(action.payload)
            state.message = "";
            state.success = true;
            state.value = action.payload;
        },
        fetchingFoods: (state) => {
            // console.log("fetching");
            state.message = "Fetching data...";
            state.success = false;
        },
        errorFoods: (state, action)=>{
            // console.log("error dispatched");
            state.message = action.payload;
            state.success = false;
        }
    },
})


export const { loadFoods, fetchingFoods, errorFoods } = foodSlice.actions

export const selectFoods = (state) => state.foods

export default foodSlice.reducer


