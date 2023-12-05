import React from "react";
import { useNavigate } from "react-router";
import { EyeIconButton } from "@icons/EyeIconButton";
import { EditIconButton } from "@icons/EditIconButton";
import { DeleteIconButton } from "@icons/DeleteIconButton";
import { Box, IconButton, SvgIcon } from "@mui/material";

type TActionCellProps = {
  page: number;
  row: Record<string, unknown>;
};
export const ActionCell: React.FC<TActionCellProps> = ({ page, row }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "cemter",
      }}
    >
      <IconButton
        sx={{
          padding: 0,
          ":hover": {
            backgroundColor: "transparent",
          },
        }}
        onClick={(e) => {
          e.preventDefault();
          navigate("view", { state: { row, page } });
        }}
      >
        {/* Handle eye icon click */}
        <SvgIcon component={EyeIconButton} />
      </IconButton>
      <IconButton
        sx={{
          padding: 0,
          ":hover": {
            backgroundColor: "transparent",
          },
        }}
        onClick={(e) => {
          e.preventDefault();
          navigate("delete", { state: { id: row?.id, page } });
        }}
      >
        <SvgIcon component={DeleteIconButton} />
      </IconButton>
      <IconButton
        sx={{
          padding: 0,
          ":hover": {
            backgroundColor: "transparent",
          },
        }}
        onClick={(e) => {
          e.preventDefault();
          navigate("edit", { state: { row, page } });
        }}
      >
        {/* Handle edit icon click */}
        <SvgIcon component={EditIconButton} />
      </IconButton>
    </Box>
  );
};
