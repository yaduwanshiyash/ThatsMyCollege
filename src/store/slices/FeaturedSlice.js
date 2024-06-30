import axiosInstance from "@/config/AxiosIntercepter";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const Api = process.env.SERVICE_BASE_URL;

export const fetchFeaturedCollege = createAsyncThunk("FeaturedCollege/fetchFeaturedCollege", async (apiPost) => {
    try {
        const response = await axiosInstance.get(`${Api}${apiPost}`);
        return response.data;
    } catch (error) {
        throw error;
    }
});


export const FeaturedSlice = createSlice({
    name: 'featuredCollege',
    initialState: {
        college: [],
        loading: true,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFeaturedCollege.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFeaturedCollege.fulfilled, (state, action) => {
                state.loading = false;
                state.college = action.payload;
            })
            .addCase(fetchFeaturedCollege.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});