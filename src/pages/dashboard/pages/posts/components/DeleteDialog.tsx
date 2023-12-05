/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import { useDeletePost } from "@api/services/useDeletePost";
import { useFetchAllPost } from "@api/services/useFetchAllPost";
import { IconButton, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export const DeleteDialog: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const { refetch } = useFetchAllPost(state?.page ?? 0);

  const deletePost = useDeletePost();
  const handleClose = () => navigate("/posts/management");

  const handleConfirm = async () => {
    try {
      await deletePost(state.id as string);
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      refetch();
      handleClose();
    } catch (error) {
      //
    }
  };

  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle marginBottom="1.5rem">
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography variant="h6">
          Do you really want to delete this post?
        </Typography>
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          columnGap: "1.5rem",
        }}
      >
        <Button variant="contained" onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button variant="contained" onClick={handleConfirm} color="primary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
