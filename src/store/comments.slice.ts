import { Comment } from '@/services/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CommentState {
  commentData: Comment[];
  quickSearch: string;
  isApiError: boolean;
}

const initialState: CommentState = {
  commentData: [],
  quickSearch: '',
  isApiError: false,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments: (state, action: PayloadAction<Comment[]>) => {
      state.commentData = action.payload;
    },
    setFilterText: (state, action: PayloadAction<string>) => {
      state.quickSearch = action.payload;
    },

    setErrors: (state, action: PayloadAction<boolean>) => {
      state.isApiError = action.payload;
    },
  },
});

export const { setComments, setFilterText, setErrors } = commentsSlice.actions;

export default commentsSlice.reducer;
