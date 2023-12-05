import React from "react";

import { ActionCell } from "../components";
import { useRenderCell } from "./useRenderCell";
import { GridBaseColDef } from "@mui/x-data-grid/internals";
import { GridRenderCellParams, GridValidRowModel } from "@mui/x-data-grid";

export const useDataGridColumns = (page: number) => {
  const renderCell = useRenderCell();
  return React.useMemo<GridBaseColDef[]>(() => {
    return [
      {
        field: "id",
        headerName: "Post ID",
        flex: 1,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "name",
        headerName: "Name",
        flex: 1,
        headerAlign: "center",
        align: "center",
        renderCell: (params: GridRenderCellParams<GridValidRowModel>) =>
          renderCell(params),
      },
      {
        field: "title",
        headerName: "Content",
        flex: 1,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "body",
        headerName: "Media URL",
        flex: 1,
        headerAlign: "center",
        align: "center",
        renderCell: (params: GridRenderCellParams<GridValidRowModel>) =>
          renderCell(params),
      },
      {
        field: "email",
        headerName: "Privacy",
        flex: 1,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "actions",
        headerName: "Actions",
        flex: 1,
        headerAlign: "center",
        align: "center",
        renderCell: (params) => <ActionCell page={page} row={params.row} />,
      },
    ];
  }, [page]);
};
