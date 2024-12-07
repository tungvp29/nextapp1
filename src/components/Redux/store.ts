import { configureStore } from '@reduxjs/toolkit';
import metaTagsReducer from './reducers/metaTagsSlice';


export const store = configureStore({
  reducer: {
    metaTags: metaTagsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

