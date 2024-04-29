import React, { useEffect, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // Mandatory CSS required by the grid
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Optional Theme applied to the grid
import { Comment } from '@/services/types';
interface TableCompProps {
  data: Comment[];
  filtertext: string;
}

type SortingValue = 'asc' | 'desc' | null;
type SortingOrder = SortingValue[];

type ColumnDefinition = {
  field: keyof Comment;
  maxWidth?: number;
  headerName?: string;
  cellRenderer?: (data: any) => string | JSX.Element;
  sortingOrder?: SortingOrder;
};

export const TableComponent: React.FC<TableCompProps> = ({
  data,
  filtertext,
}) => {
  const colDef: ColumnDefinition[] = [
    { field: 'postId', maxWidth: 100 },
    { field: 'id', maxWidth: 100 },
    { field: 'name', maxWidth: 420 },
    {
      field: 'email',
      maxWidth: 200,
    },
    {
      field: 'body',
      headerName: 'Message text',
    },
  ];

  const gridOptions = {
    defaultColDef: { flex: 1 },
    pagination: true,
    paginationPageSizeSelector: [20, 50, 100, 150],
  };

  return (
    <div
      className="ag-theme-quartz h-full text-red-500"
      style={{ height: '88vh', width: '100%' }}
    >
      <AgGridReact
        quickFilterText={filtertext}
        gridOptions={gridOptions}
        rowData={data}
        columnDefs={colDef}
      />
    </div>
  );
};
