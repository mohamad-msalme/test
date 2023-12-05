import React from "react";
import { Button, DialogActions } from "@mui/material";

type TDialogActionsButtonsProps = {
  onClose: () => void;
  onConfirm?: () => void;
  isDirty?: boolean;
};

export const DialogActionsButtons: React.FC<TDialogActionsButtonsProps> = ({
  onClose,
  onConfirm,
  isDirty,
}) => (
  <DialogActions
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      columnGap: "1.5rem",
      marginBottom: "3rem",
      marginTop: "1rem",
    }}
  >
    <Button variant="contained" onClick={onClose} color="secondary">
      Cancel
    </Button>
    {onConfirm && (
      <Button
        disabled={Boolean(!isDirty)}
        variant="contained"
        onClick={onConfirm}
        color="primary"
        sx={(theme) => ({
          ":disabled": {
            opacity: 0.5,
            color: "white",
            backgroundColor: theme.palette.primary.main,
          },
        })}
      >
        Edit
      </Button>
    )}
  </DialogActions>
);
