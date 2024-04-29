import { useDispatch } from 'react-redux';
import { setErrors, setComments } from '@/store/comments.slice';
import { CommentService } from '@/services/comments-search';

const commentService = new CommentService();

export const useFetchComments = () => {
  const dispatch = useDispatch();

  const fetchComments = async () => {
    try {
      const resultResponse = await commentService.getAllComments(
        dispatch,
        setErrors
      );
      dispatch(setComments(resultResponse));
    } catch (error) {
      dispatch(setErrors(true));
    }
  };

  return fetchComments;
};
