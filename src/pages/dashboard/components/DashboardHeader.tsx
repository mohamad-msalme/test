import React from "react";
import account from "../../../icons/account.png";

import { SettingsIcon } from "../../../icons/SettingsIcon";
import { SearchNormalIcon } from "../../../icons/SearchNormalIcon";
import { NotificationIcon } from "../../../icons/NotificationIcon";
import { Badge, Box, IconButton, SvgIcon, TextField } from "@mui/material";

/* The code defines a functional component called `DashboardHeader` using the arrow function syntax. It
is a React component that renders a header section for a dashboard. */
const DashboardHeader: React.FC = () => {
  const [state, setState] = React.useState("");
  return (
    <Box
      sx={{
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
        boxShadow: "0 0.2rem 0.2rem 0 rgba(0, 0, 0, 0.08)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "95%",
        }}
      >
        <Box
          sx={{
            flex: 1,
          }}
        >
          <TextField
            variant="standard"
            fullWidth
            value={state}
            onChange={(e) => setState(e.currentTarget.value)}
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <IconButton>
                  <SvgIcon component={SearchNormalIcon} />
                </IconButton>
              ),
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: "0.7rem",
          }}
        >
          <Badge variant="standard" badgeContent={1} max={999}>
            <IconButton>
              <SvgIcon component={NotificationIcon} />
            </IconButton>
          </Badge>
          <Badge>
            <IconButton>
              <SvgIcon component={SettingsIcon} />
            </IconButton>
          </Badge>
          <img style={{ cursor: "pointer" }} src={account} alt="Account" />
        </Box>
      </Box>
    </Box>
  );
};

export { DashboardHeader as default };
