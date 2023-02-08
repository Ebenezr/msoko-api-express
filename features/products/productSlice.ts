import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// fetch app category and products
export const getProducts = createAsyncThunk("products", async (thunkAPI) => {
  try {
    const resp = await axios.get(`${process.env.BASE_URL}/api/getProducts`);
  } catch (error) {
    //   return thunkAPI.rejectWithValue(error?.message);
  }
});

const initialState = {
  isLoading: true,
  error: null,
  products: [],
  categories: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default productSlice.reducer;
