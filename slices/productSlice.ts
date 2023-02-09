import { Product, ProductCategory } from "@/type";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// fetch app category and products
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const { data } = await axios.get(
        `${process.env.BASE_URL}/api/getProducts`
      );
      return data;
    } catch (error) {
      if (error instanceof Error) {
        // return thunkAPI.rejectWithValue(error.message);
      }
      // return rejectWithValue(error);
    }
  }
);

interface InitialState {
  isLoading: boolean;
  error: Error | null;
  products: Product[];
  categories: ProductCategory[];
}

const initialState: InitialState = {
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
        state.categories = action.payload;
        state.products = action.payload.products;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default productSlice.reducer;
