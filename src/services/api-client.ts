import { Comment } from './types';

export function createApiClient() {
  return {
    getAllComments: async (
      dispatch: any,
      setErrors: any
    ): Promise<Comment[]> => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/comments`
        );
        if (!response.ok) {
          dispatch(setErrors(true));
          console.error('Error in API call');
        }
        const data = await response.json();
        return data;
      } catch {
        dispatch(setErrors(true));
        console.error('Network error, json parsing failed');
        return [];
      }
    },
  };
}
