import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useFetchAllPost } from "@api/services/useFetchAllPost";
import { useDataGridColumns } from "../hooks/useDataGridColumns";
import { TableFooter, TablePagenation } from "../../../components";

export const PostTable = () => {
  const totalCountRef = React.useRef(1);
  const [page, setPage] = React.useState(1);
  const columns = useDataGridColumns(page);
  const { data, isLoading, isSuccess } = useFetchAllPost(page);

  React.useMemo(() => {
    if (isSuccess) {
      totalCountRef.current = Math.ceil((data.totalCount ?? 10) / 10);
    }
  }, [data?.totalCount, isSuccess]);

  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        loading={isLoading}
        rows={data?.rows || []}
        columns={columns}
        paginationModel={{
          page: page,
          pageSize: 10,
        }}
        paginationMode="server"
        slots={{
          footer: () => (
            <TableFooter>
              <TablePagenation
                page={page}
                setPage={setPage}
                totalCount={totalCountRef.current}
              />
            </TableFooter>
          ),
        }}
        rowCount={data?.totalCount ?? 0}
        sx={{
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: "rgba(229, 242, 255, 1)",
            fontWeight: 600,
            fontSize: "1.6rem",
            lineHeight: 1.5,
            letterSpacing: "0.75px",
            textAlign: "center",
            color: "rgba(18, 18, 18, 1)",
            borderRight: "1px solid rgba(224, 224, 224, 1)",
            "&:last-child": {
              borderRight: "none",
            },
          },
          "& .MuiDataGrid-row": {
            "& .MuiDataGrid-cell": {
              borderRight: "1px solid rgba(224, 224, 224, 1)",
              fontSize: "1.4rem",
              lineHeight: 1.5,
              fontWeight: 400,
              letterSpacing: "0.75px",
              color: "rgba(0, 0, 0, 0.64)",
            },
            "& .MuiDataGrid-cell:last-child": {
              borderRight: "none",
            },
          },
        }}
      />
    </div>
  );
};
