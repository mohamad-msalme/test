import React from "react";
import account from "@icons/account.png";

import useAuth from "../../../hooks/useAuth";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { SettingsIcon } from "@icons/SettingsIcon";
import { SearchNormalIcon } from "@icons/SearchNormalIcon";
import { NotificationIcon } from "@icons/NotificationIcon";
import {
  Badge,
  Box,
  IconButton,
  SvgIcon,
  TextField,
  Popover,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export const DashboardHeader: React.FC = () => {
  const { logout } = useAuth();
  const [state, setState] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    logout();
  };

  const open = Boolean(anchorEl);

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
            <IconButton onClick={handleClick}>
              <SvgIcon component={SettingsIcon} />
            </IconButton>
            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <List>
                <ListItem button onClick={handleClose}>
                  <ListItemIcon>
                    <ExitToAppIcon />
                  </ListItemIcon>
                  <ListItemText primary="Log out" />
                </ListItem>
              </List>
            </Popover>
          </Badge>
          <img style={{ cursor: "pointer" }} src={account} alt="Account" />
        </Box>
      </Box>
    </Box>
  );
};
