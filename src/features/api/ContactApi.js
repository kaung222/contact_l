import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const ContactApi = createApi({
  reducerPath: "contact",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://contact-app.mmsdev.site/api/v1",
  }),
  tagTypes: ["contact"],
  endpoints: (builder) => ({
    getContact: builder.query({
      query: (token) => ({
        url: "/contact",
        headers: { authorization: `Bearer ${token}` },
        // body: user,
      }),
      providesTags: ["contact"],
    }),
    createContact: builder.mutation({
      query: ({ contact, token }) => ({
        url: "contact",
        method: "POST",
        body: contact,
        headers: { authorization: ` Bearer ${token}` },
      }),
      invalidatesTags: ["contact"],
    }),
    editContact: builder.mutation({
      query: (id, updatedContact, token) => ({
        url: `contact/${id}`,
        method: "PUT",
        body: updatedContact,
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["contact"],
    }),
  }),
});

export const {useCreateContactMutation ,useGetContactQuery, useEditContactMutation } = ContactApi;