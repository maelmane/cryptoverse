import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
    headers: {
        'X-RapidAPI-Key': '05cc0c329bmshfb3f7727fa87c80p10b92djsne66b0350fa61',
        'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
      }
};

const baseUrl = "https://google-news13.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCryptoNews: builder.query({
        query: ({newsCategory}) => createRequest(`/search?keyword=${newsCategory}`),
      }),
    }),
  });

export const {useGetCryptoNewsQuery} = cryptoNewsApi;
  