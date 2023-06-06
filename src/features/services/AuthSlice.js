import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null
}

export const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers:{
    addUser: (state, {payload}) =>{
        state.user = payload.user,
        state.token = payload.token,
        localStorage.setItem("user", JSON.stringify(state.user)),
        localStorage.setItem("token", state.token)
        console.log(state.token);
    }
  }
});


export const {addUser} = AuthSlice.actions 
export default AuthSlice.reducer