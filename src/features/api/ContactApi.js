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
        providesTags: ["contact"],
      }),
    }),
    createContact: builder.mutation({
      query: ({ data, token }) => ({
        url: "contact",
        method: "POST",
        body: data,
        headers: { authorization: ` Bearer ${token}` },
      }),
      invalidatesTags: ["contact"],
    }),
    editContact: builder.mutation({
      query: (id, data, token) => ({
        url: `contact/${data?.id}`,
        method: "PUT",
        body: data,
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["contact"],
    }),
    singleGetContact: builder.query({
      query: (id) => `/contact/${id}`,
      method: 'GET',
      providesTags: ["contact"]
    }),
  }),
});

export const {
  useCreateContactMutation,
  useGetContactQuery,
  useEditContactMutation,
  useSingleGetContactQuery
} = ContactApi;
