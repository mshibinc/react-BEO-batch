import { createSlice } from "@reduxjs/toolkit";
const initail_State = {
    users: [],
    singleUser: null
}

const userSlice = createSlice({
    name: "user",
    initialState: initail_State,
    reducers: {
        addUsers: (state, action) => {
            state.users = action.payload;
        },
        editUsers: (state, action) => {
            // state.users = action.payload;
        }
    }
})
export const { addUsers, editUsers } = userSlice.actions;
export default userSlice.reducer;