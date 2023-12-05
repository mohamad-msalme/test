/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React from "react";
import { Box, Typography } from "@mui/material";
import { GridRenderCellParams, GridValidRowModel } from "@mui/x-data-grid";

import accountImg from "@icons/account.png";

/**
 * The `useRenderCell` function returns a callback function that can be used to render different types
 * of cells in a React component.
 * @param {string} body - The `body` parameter is a string that represents the content of the cell in
 * the "body" field of the grid row.
 * @returns The `useRenderCell` function returns the `renderCell` function.
 */
export const useRenderCell = () => {
  const renderFieldBodyCell = (body: string) => {
    return (
      <Typography
        sx={(theme) => ({
          textDecorationLine: "underline",
          textDecorationColor: theme.palette.grey["A400"],
        })}
        variant="body1"
      >
        {body}
      </Typography>
    );
  };

  const renderFieldNameCell = (name: string) => {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          columnGap: "1rem",
        }}
      >
        <Box
          sx={{
            transition: "add 0.3s",
            cursor: "pointer",
            overflow: "hidden",
            "& img:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <img src={accountImg} />
        </Box>
        <Typography variant="body2">{name}</Typography>
      </Box>
    );
  };

  const renderCell = (
    params: GridRenderCellParams<GridValidRowModel, unknown, unknown>,
  ) => {
    if (params.field === "name") return renderFieldNameCell(params.row.name);
    else if (params.field === "body")
      return renderFieldBodyCell(params.row.body);

    return <></>;
  };

  return renderCell;
};
