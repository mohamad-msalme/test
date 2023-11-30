import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import cardImage from "../../../icons/cardImage.png";
import likeIcon from "../../../icons/love.svg";
import account from "../../../icons/account.png";
import { useLocation, useNavigate } from "react-router";
import { useUpdatePost } from "../../../api/services/useUpdatePost";

type TEditDialogProps = {
  edit?: boolean;
};

const DialogHeader: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <DialogTitle marginBottom="1.5rem">
    <IconButton
      aria-label="close"
      onClick={onClose}
      sx={{
        position: "absolute",
        right: 8,
        top: 8,
      }}
    >
      <CloseIcon />
    </IconButton>
  </DialogTitle>
);

const UserInfo: React.FC<{ name: string; date: string }> = ({ name, date }) => (
  <div
    style={{ display: "flex", alignItems: "center", columnGap: "2rem" }}
    className="card-header"
  >
    <img src={account} className="avatar" alt="User Avatar" />
    <div
      style={{ display: "flex", flexDirection: "column", rowGap: "0.3rem" }}
      className="text-box"
    >
      <Typography
        sx={{ fontSize: "1.4rem", fontWeight: 600 }}
        className="title"
      >
        {name}
      </Typography>
      <Typography
        className="dexcription"
        sx={{ fontSize: "1rem", fontWeight: 400, color: "#00000066" }}
      >
        {date}
      </Typography>
    </div>
  </div>
);

const CardContent: React.FC<{
  edit: boolean;
  value: string;
  onChange: (newVal: string) => void;
}> = ({ edit, value, onChange }) => (
  <div className="cardfield">
    {edit ? (
      <TextField
        fullWidth
        variant="outlined"
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        sx={{ width: "100%" }}
      />
    ) : (
      <Typography sx={{ fontSize: "1.4rem", color: "#000000E0" }}>
        {value}
      </Typography>
    )}
  </div>
);

const CardImage: React.FC = () => (
  <div className="card-img-box">
    <img
      style={{ borderRadius: "1.6rem" }}
      width="100%"
      src={cardImage}
      className="card-img"
      alt="Card"
    />
    <div
      style={{ display: "flex", columnGap: "1rem", alignItems: "center" }}
      className="card-like"
    >
      <div
        style={{ display: "flex", alignItems: "center", columnGap: "0.8rem" }}
        className="like"
      >
        <img src={likeIcon} alt="Like Icon" />
        <span style={{ fontSize: " 1.4rem" }}>36</span>
      </div>
    </div>
  </div>
);

const DialogActionsButtons: React.FC<{
  onClose: () => void;
  onConfirm?: () => void;
  isDirty?: boolean;
}> = ({ onClose, onConfirm, isDirty }) => (
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
      >
        Edit
      </Button>
    )}
  </DialogActions>
);

const EditDialog: React.FC<TEditDialogProps> = ({ edit }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  const handleClose = () => navigate("/posts/managment");

  const defVal = React.useRef(state?.row?.title as string);
  const [txtVal, setTxtValue] = React.useState(defVal.current);
  const isDirty = React.useMemo(() => defVal.current !== txtVal, [txtVal]);
  const handleUpdate = useUpdatePost(state?.page ?? 0);

  const handleConfirm = async () => {
    try {
      await handleUpdate({
        id: state?.row?.id ?? 0,
        input: txtVal,
      });
      handleClose();
    } catch (error) {
      // Handle error
    }
  };
  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogHeader onClose={handleClose} />
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "1rem",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          boxShadow: "0 4px 4px 0 #00000040",
          margin: "0 2rem",
        }}
      >
        <DialogContentText
          sx={{
            fontSize: "1.6rem",
            fontWeight: 700,
            color: "#000000E0",
            textAlign: "center",
          }}
        >
          {edit ? "Edit Post" : "View Post"}
        </DialogContentText>
        <UserInfo name={state?.row?.name} date="12 Aug 2022 10:00 PM" />
        <CardContent
          edit={edit}
          value={txtVal}
          onChange={(newVal) => setTxtValue(newVal)}
        />
        <CardImage />
      </DialogContent>
      <DialogActionsButtons
        onClose={handleClose}
        onConfirm={edit ? handleConfirm : undefined}
        isDirty={isDirty}
      />
    </Dialog>
  );
};

export { EditDialog as default };
