import { createSlice } from "@reduxjs/toolkit";
const initail_State = {
    products: [],
    productsUser: null
}

const productSlice = createSlice({
    name: "user",
    initialState: initail_State,
    reducers: {
        addProducts: (state, action) => {
            state.users = action.payload;
        }
    }
})
export const { addProducts } = productSlice.actions;
export default productSlice.reducer;