import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from './comments.slice';
import { Comment } from '@/services/types';

export interface RootState {
  commentsSlice: {
    commentData: Comment[];
    quickSearch: string;
    isApiError: boolean;
  };
}

const store = configureStore({
  reducer: {
    commentsSlice: commentsReducer,
  },
});

export default store;
export type appDispatch = typeof store.dispatch;
