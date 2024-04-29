import { createApiClient } from './api-client';
import { Comment } from './types';
import { appDispatch } from '@/store/store';

type errorReducerType = (payload: boolean) => void;

export class CommentService {
  constructor() {}

  public async getAllComments(
    dispatch: appDispatch,
    setErrors: errorReducerType
  ): Promise<Comment[]> {
    const apiClient = createApiClient();
    const results = await apiClient.getAllComments(dispatch, setErrors);
    return results;
  }
}
