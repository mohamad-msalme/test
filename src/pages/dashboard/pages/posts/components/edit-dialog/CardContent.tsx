import React from "react";
import { TextField, Typography } from "@mui/material";

type TCardContent = {
  edit: boolean;
  value: string;
  onChange: (newVal: string) => void;
};

export const CardContent: React.FC<TCardContent> = ({
  edit,
  value,
  onChange,
}) => (
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
      <Typography lineHeight={2} letterSpacing="0.75px" variant="body2">
        {value}
      </Typography>
    )}
  </div>
);
