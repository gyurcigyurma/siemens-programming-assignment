import React from 'react';
import SearchField from '@/components/SearchField';
import { useSelector, useDispatch } from 'react-redux';
import { TableComponent } from '@/components/Table';
import { RootState } from '@/store/store';

const TablePage: React.FC = () => {
  const filterText = useSelector(
    (state: RootState) => state.commentsSlice.quickSearch
  );

  const comments = useSelector(
    (state: RootState) => state.commentsSlice.commentData
  );

  return (
    <>
      <SearchField />
      <TableComponent filtertext={filterText} data={comments} />
    </>
  );
};

export default TablePage;
