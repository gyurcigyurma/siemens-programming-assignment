import React from 'react';
import { Alert } from 'antd';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const ChartPage = React.lazy(() => import('@/pages/Chart.page'));
const TablePage = React.lazy(() => import('@/pages/Table.page'));
const HelpPage = React.lazy(() => import('@/pages/Help.page'));
const PageNotFound = React.lazy(() => import('@/pages/PageNotFound.page'));

export const renderContent = (selectedKey: any) => {
  const errors = useSelector(
    (state: RootState) => state.commentsSlice.isApiError
  );
  const comments = useSelector(
    (state: RootState) => state.commentsSlice.commentData
  );

  const renderMethod = (selectedKey: string) => {
    switch (selectedKey) {
      case 'comments':
        if (errors) {
          return <Alert showIcon message="Error fetching API" type="error" />;
        }
        return comments ? (
          <>
            <Suspense fallback={<div>Loading...</div>}>
              <TablePage />
            </Suspense>
          </>
        ) : (
          'Fetching comments...'
        );
      case 'chart':
        return comments ? (
          <Suspense fallback={<div>Loading...</div>}>
            <ChartPage />
          </Suspense>
        ) : (
          'Fetching comments...'
        );
      case 'help':
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <HelpPage />
          </Suspense>
        );
      default:
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <PageNotFound />
          </Suspense>
        );
    }
  };
  return () => renderMethod(selectedKey);
};
