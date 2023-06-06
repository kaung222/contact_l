import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts : [],
    search : ''
};

export const ContactSlice = createSlice({
  name: "ContactSlice",
  initialState,
  reducers:{
    addContacts: (state, {payload}) => {
        state.contacts = payload
    },
    searchName: (state,{payload}) => {
      state.search = payload
    }
  }
});

export const { addContacts,searchName} = ContactSlice.actions;
export default ContactSlice.reducer;