import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useFetchAllPost } from "../../../api/services/useFetchAllPost";
import useDataGridColumns from "../hooks/useDataGridColumns";

const PostTable = () => {
  const [pageSize, setPageSize] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const { data, isLoading } = useFetchAllPost(page);
  const columns = useDataGridColumns(page);
  console.log(data);
  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        onPaginationModelChange={(model) => {
          setPageSize(model.pageSize);
          setPage(model.page);
        }}
        loading={isLoading}
        rows={data?.rows || []}
        columns={columns}
        pagination
        paginationModel={{
          page: page,
          pageSize: pageSize,
        }}
        paginationMode="server"
        rowCount={data?.totalCount ?? 0}
      />
    </div>
  );
};
export { PostTable as default };
