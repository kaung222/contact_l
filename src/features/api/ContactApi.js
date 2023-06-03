import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const ContactApi = createApi({
  reducerPath: "contact_api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://contact-app.mmsdev.site/api/v1",
  }),
  tagTypes: ["contact_api"],
  endpoints: (builder) => ({
    createContact: builder.mutation({
      query: ({ contact, token }) => ({
        url: "contact",
        method: "POST",
        body: contact,
        headers: { authorization: ` Bearer ${token}` },
      }),
      invalidatesTags: ["contact_api"],
    }),
    getContact: builder.query({
      query: (token) => ({
        url: "contact",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ['contact_api']
    }),
  }),
});

export const {useGetContactQuery} = ContactApi;