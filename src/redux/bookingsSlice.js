import { createSlice } from "@reduxjs/toolkit";

const bookingsSlice = createSlice({
  name: "bookings",
  initialState: [],
  reducers: {
    addBooking: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { addBooking } = bookingsSlice.actions;
export default bookingsSlice.reducer;
