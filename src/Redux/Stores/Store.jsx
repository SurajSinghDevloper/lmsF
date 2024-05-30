import { configureStore } from '@reduxjs/toolkit';
import sampleReducer from '../Slices/SampleSlice';
import signupReducer from '../Slices/SignupSlice';
import loginReducer from '../Slices/LoginSlice';

export default configureStore({
  reducer: {
    sample: sampleReducer,
    signup: signupReducer,
    login: loginReducer
  },
});
