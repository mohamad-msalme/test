import React from "react";
import { ChipCloseIcon } from "@icons/ChipCloseIcon";
import { DialogTitle, IconButton } from "@mui/material";

type TDialogHeaderProps = {
  onClose: () => void;
};

export const DialogHeader: React.FC<TDialogHeaderProps> = ({ onClose }) => (
  <DialogTitle marginBottom="1.5rem">
    <IconButton
      aria-label="close"
      onClick={onClose}
      sx={{
        position: "absolute",
        right: 8,
        top: 8,
      }}
      color="secondary"
    >
      <ChipCloseIcon />
    </IconButton>
  </DialogTitle>
);
