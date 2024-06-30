import axiosInstance from "@/config/AxiosIntercepter";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const Api = process.env.SERVICE_BASE_URL;

export const fetchColleges = createAsyncThunk("FilterCollege/fetchColleges", async (apiPost) => {
    try {
        const response = await axiosInstance.get(`${Api}${apiPost}`);
        return response.data;
    } catch (error) {
        throw error;
    }
});


export const FilterCollege = createSlice({
    name: 'filterCollege',
    initialState: {
        colleges: [],
        loading: true,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchColleges.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchColleges.fulfilled, (state, action) => {
                state.loading = false;
                state.colleges = action.payload;
            })
            .addCase(fetchColleges.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});