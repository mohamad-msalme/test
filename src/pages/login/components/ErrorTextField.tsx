import React from "react";

import { ErrorIcon } from "../../../icons/ErrorIcon";
import { Box, SvgIcon, Typography } from "@mui/material";

type TErrorTextField = {
  isError: boolean;
  msg: string;
};
export const ErrorTextField: React.FC<TErrorTextField> = ({ isError, msg }) => {
  if (!isError) return null;
  return (
    <Box pl={1} display="flex" alignItems="center" columnGap={1}>
      <SvgIcon component={ErrorIcon} />
      <Typography component="span" color="error">
        {msg}
      </Typography>
    </Box>
  );
};
