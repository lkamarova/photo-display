import { createSlice } from "@reduxjs/toolkit";

export const photosSlice = createSlice({
  name: "profilePhotos",
  initialState: {
    photos: [],
  },
  reducers: {
    addPhoto: (state, { payload }) => {
      state.photos.push(payload)
    },
  },
});

export const { addPhoto } = photosSlice.actions;

export default photosSlice.reducer;
