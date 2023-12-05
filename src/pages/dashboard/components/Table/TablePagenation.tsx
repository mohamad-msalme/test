import React from "react";
import { Box, Pagination } from "@mui/material";

export type TTablePagenationProps = {
  totalCount: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
};

export const TablePagenation: React.FC<TTablePagenationProps> = ({
  totalCount,
  setPage,
  page,
}) => {
  return (
    <Box ml="auto">
      <Pagination
        page={page}
        count={totalCount}
        siblingCount={0}
        boundaryCount={1}
        shape="rounded"
        size="large"
        variant="outlined"
        onChange={(e, page) => setPage(page)}
      />
    </Box>
  );
};
