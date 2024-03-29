import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  greeting: '',
  isLoading: true,
};

export const getGreetings = createAsyncThunk(
  'greetings/getGreetings',
  async () => {
    try {
      const response = await fetch('api/greetings');
      const result = await response.json();
      return result;
    } catch (err) {
      return err.message;
    }
  },
);

const greetingsReducer = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: {
    [getGreetings.fulfilled]: (state, action) => {
      state.greeting = action.payload.greeting;
      state.isLoading = false;
    },
  },
});

export default greetingsReducer.reducer;
