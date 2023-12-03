import { IconButton } from "@mui/material";
import { GridBaseColDef } from "@mui/x-data-grid/internals";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router";

const useDataGridColumns = (page: number) => {
  const navigate = useNavigate();
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
      },
      {
        field: "title",
        headerName: "Title",
        flex: 1,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "body",
        headerName: "Content",
        flex: 1,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "email",
        headerName: "Email",
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
        renderCell: (params) => (
          <>
            <IconButton
              onClick={(e) => {
                e.preventDefault();
                navigate("view", { state: { row: params.row, page } });
              }}
            >
              {/* Handle eye icon click */}
              <VisibilityIcon />
            </IconButton>
            <IconButton
              onClick={(e) => {
                e.preventDefault();
                navigate("delete", { state: { id: params.row?.id, page } });
              }}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              onClick={(e) => {
                e.preventDefault();
                navigate("edit", { state: { row: params.row, page } });
              }}
            >
              {/* Handle edit icon click */}
              <EditIcon />
            </IconButton>
          </>
        ),
      },
    ];
  }, [page]);
};

export { useDataGridColumns as default };
