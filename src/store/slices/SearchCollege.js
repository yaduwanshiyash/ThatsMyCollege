import axiosInstance from "@/config/AxiosIntercepter";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const Api = process.env.SERVICE_BASE_URL;

export const fetchSearchCollege = createAsyncThunk("SearchCollege/searchCollege", async (apiPost) => {
    try {
        const response = await axiosInstance.get(`${Api}${apiPost}`);
        return response.data;
    } catch (error) {
        throw error;    
    }
});


export const SearchCollege = createSlice({
    name: 'searchCollege',
    initialState: {
        colleges: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearchCollege.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSearchCollege.fulfilled, (state, action) => {
                state.loading = false;
                state.colleges = action.payload;
            })
            .addCase(fetchSearchCollege.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});