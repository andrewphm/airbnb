import { configureStore } from '@reduxjs/toolkit';

import searchReducer from '../redux/searchSlice';

export default configureStore({
  reducer: {
    search: searchReducer,
  },
});
