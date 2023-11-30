import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation, useNavigate } from "react-router-dom";
import { useDeletePost } from "../../../api/services/useDeletePost";
import { useFetchAllPost } from "../../../api/services/useFetchAllPost";

const DeleteDialog = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const { refetch } = useFetchAllPost(state?.page ?? 0);

  const deletePost = useDeletePost();
  const handleClose = () => navigate("/posts/managment");

  const handleConfirm = async () => {
    debugger;
    try {
      await deletePost(state.id as string);
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
        <DialogContentText
          sx={{
            fontSize: "1.6rem",
            fontWeight: 700,
            color: "#000000E0",
          }}
        >
          Do you really want to delete this post?
        </DialogContentText>
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

export default DeleteDialog;
