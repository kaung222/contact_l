import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts : []
};

export const ContactSlice = createSlice({
  name: "ContactSlice",
  initialState,
  reducers:{
    addContacts: (state, {payload}) => {
        state.contacts = payload
    }
  }
});

export const { addContacts } = ContactSlice.actions;
export default ContactSlice.reducer;