import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import sampleReducer from '../Slices/SampleSlice';
import signupReducer from '../Slices/SignupSlice';
import loginReducer from '../Slices/LoginSlice';
import pageTypeReducer from '../Slices/PageTypeSlice';
import { combineReducers } from 'redux';

// Combine all your reducers into a rootReducer
const rootReducer = combineReducers({
  sample: sampleReducer,
  signup: signupReducer,
  login: loginReducer,
  pageType: pageTypeReducer,
});

// Persist config
const persistConfig = {
  key: 'root',
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Create a persistor
const persistor = persistStore(store);

export { store, persistor };
