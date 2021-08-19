import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  
};


export const priceSlice = createSlice({
  name: 'price',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setPrice: (state, action) =>{
        state.price = action.payload;
    },
  },
  
});

export const { setPrice } = priceSlice.actions;

export const selectPrice = (state) => state.price.price;



export default priceSlice.reducer;
