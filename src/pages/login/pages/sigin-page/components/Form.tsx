/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react";

import { EmailIcon } from "@icons/EmailIcon";
import { SecurityIcon } from "@icons/SecurityIcon";
import { CheckboxIcon } from "@icons/CheckboxIcon";
import { ErrorTextField } from "../../../components";
import { CheckboxCheckedIcon } from "@icons/CheckboxCheckedIcon";
import { useFormState, useFormSubmit, useVisiblePassword } from "../hooks";
import {
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Stack,
  SvgIcon,
  TextField,
  Typography,
  Box,
} from "@mui/material";

export const Form: React.FC = () => {
  const { values, isDirty, handleChange, valuesRef } = useFormState();
  const { handleSubmit, isError, errorMsg } = useFormSubmit(isDirty);
  const { passwordType, passwordIcon, togglePassVisib } = useVisiblePassword();
  return (
    <>
      <Stack display="flex" rowGap="1rem">
        <Stack display="flex" rowGap="1.6rem">
          <Stack width="100%" display="flex" rowGap={1}>
            <TextField
              error={isError}
              value={values.email}
              variant="filled"
              fullWidth
              type="email"
              onChange={(e) => handleChange("email", e.currentTarget.value)}
              placeholder="Please enter your email"
              InputProps={{
                startAdornment: (
                  <SvgIcon component={EmailIcon.bind(undefined, { isError })} />
                ),
                disableUnderline: true,
              }}
            />
            <ErrorTextField isError={isError} msg={errorMsg.email} />
          </Stack>
          <Stack width="100%" display="flex" rowGap={1}>
            <TextField
              error={isError}
              value={values.password}
              variant="filled"
              fullWidth
              type={passwordType}
              onChange={(e) => handleChange("password", e.currentTarget.value)}
              placeholder="Please enter your password"
              InputProps={{
                startAdornment: (
                  <SvgIcon
                    component={SecurityIcon.bind(undefined, { isError })}
                  />
                ),
                endAdornment: (
                  <IconButton onClick={togglePassVisib}>
                    <SvgIcon
                      component={passwordIcon.bind(undefined, { isError })}
                    />
                  </IconButton>
                ),
                disableUnderline: true,
              }}
            />
            <ErrorTextField isError={isError} msg={errorMsg.password} />
          </Stack>
        </Stack>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <FormControlLabel
            control={
              <Checkbox
                icon={<CheckboxIcon />}
                checked={values.remember}
                checkedIcon={<CheckboxCheckedIcon />}
                onChange={(e, isChecked) => handleChange("remember", isChecked)}
              />
            }
            label="Remember me"
            sx={(theme) => ({
              "& .MuiTypography-root.MuiTypography-body1": {
                fontSize: "1.8rem",
                fontWeight: 400,
                color: theme.palette.text.secondary,
                lineHeight: 1.33,
              },
            })}
          ></FormControlLabel>
          <Typography variant="h4">Forgot password?</Typography>
        </Box>
      </Stack>
      <Box width="100%">
        <Button
          disabled={!isDirty}
          size="large"
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => {
            handleSubmit(values, valuesRef);
          }}
        >
          Sign in
        </Button>
      </Box>
    </>
  );
};
