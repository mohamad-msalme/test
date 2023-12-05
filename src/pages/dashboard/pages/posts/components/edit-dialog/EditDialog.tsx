/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import { UserInfo } from "./UserInfo";
import { CardImage } from "./CardImage";
import { CardContent } from "./CardContent";
import { DialogHeader } from "./DialogHeader";
import { useUpdatePost } from "@api/services/useUpdatePost";
import { DialogActionsButtons } from "./DialogActionsButtons";
import { useLocation, useNavigate } from "react-router";
import { Typography } from "@mui/material";

type TEditDialogProps = {
  edit?: boolean;
};

export const EditDialog: React.FC<TEditDialogProps> = ({ edit }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  const handleClose = () => navigate("/posts/management");

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
        <Typography variant="h6">{edit ? "Edit Post" : "View Post"}</Typography>
        <UserInfo name={state?.row?.name} date="12 Aug 2022 10:00 PM" />
        <CardContent
          edit={Boolean(edit)}
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
