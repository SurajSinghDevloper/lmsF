import { configureStore } from '@reduxjs/toolkit'
import sampleReducer from '../Slices/SampleSlice';

export default configureStore({
    reducer: {
        sample: sampleReducer,
      },
})