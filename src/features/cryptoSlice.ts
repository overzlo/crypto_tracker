import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook.tsx";

const initialState = {
  crypto: [],
  loading: false,
  error: null,
};

// const API_URL = "https://api.coingecko.com/api/v3";
//
// export const fetchCrypto = createAsyncThunk(
//   "crypto/fetchCrypto",
//   async (page, { rejectWithValue }) => {
//     try {
//       const { request } = useHttp();
//       const data = await request(
//         `${API_URL}/coins/markets`,
//         "GET",
//         null,
//         {
//           vs_currency: "usd",
//           per_page: 20,
//           page,
//         },
//         {
//           accept: "application/json",
//           "x-cg-demo-api-key": "CG-hBbkp8ngwD3pHCeopg65LGBa",
//         },
//       );
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   },
// );

export const fetchCrypto = createAsyncThunk(
  "crypto/fetchCrypto",
  async (page, { rejectWithValue }) => {
    try {
      const { request } = useHttp();
      const data = await request(
        `http://localhost:3000/crypto`,
        "GET",
        null,
        {
          vs_currency: "usd",
          per_page: 10,
          page,
        },
        {
          accept: "application/json",
          "x-cg-demo-api-key": "CG-hBbkp8ngwD3pHCeopg65LGBa",
        },
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCrypto.fulfilled, (state, action) => {
      state.crypto = action.payload;
      console.log(action.payload);
    });
  },
});

export default cryptoSlice.reducer;
