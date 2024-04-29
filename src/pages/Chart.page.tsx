import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import ChartComponent from '../components/Chart';

export default function Chart() {
  const comments = useSelector(
    (state: RootState) => state.commentsSlice.commentData
  );

  const labels = comments.map((arr) => arr.id);
  const wordsLengths = comments.map((arr) => arr.body.split(' ')?.length);

  const commentStats = {
    labels,
    datasets: [
      {
        label: 'number of words per comment ',
        data: wordsLengths,
        borderColor: 'rgb(10, 129, 32)',
      },
    ],
  };

  return <ChartComponent data={commentStats} />;
}
