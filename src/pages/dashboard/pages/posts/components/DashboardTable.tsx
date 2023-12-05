import React from "react";

import { PostTable } from "./PostTable";
import { ChipCloseIcon } from "@icons/ChipCloseIcon";
import { SearchNormalIcon } from "@icons/SearchNormalIcon";
import { ChipChevronDownicon } from "@icons/ChipChevronDownicon";

import {
  Box,
  Chip,
  IconButton,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";

export const DashboardTable: React.FC = () => {
  return (
    <Box
      sx={{
        boxShadow: "0 0.4rem 0.4rem rgba(0, 0, 0, 0.25)",
        borderRadius: "2rem",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          padding: "1.2rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid rgba(153, 153, 153, 0.3)",
        }}
      >
        <TextField
          size="small"
          sx={{
            width: "33.6rem",
          }}
          InputProps={{
            startAdornment: (
              <IconButton>
                <SvgIcon
                  sx={{ width: "2rem" }}
                  component={SearchNormalIcon.bind(undefined, {
                    width: "20",
                    height: "20",
                    color: "rgba(0, 0, 0, 0.88)",
                  })}
                />
              </IconButton>
            ),
          }}
          variant="outlined"
          placeholder="Type here "
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: "0.8rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              columnGap: "0.8rem",
            }}
          >
            <Typography variant="subtitle1">Media:</Typography>
            <Chip
              icon={<SvgIcon component={ChipChevronDownicon} />}
              color="secondary"
              variant="filled"
              label="All"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              columnGap: "0.8rem",
            }}
          >
            <Typography variant="subtitle1">Privacy:</Typography>
            <Chip
              color="primary"
              variant="filled"
              size="medium"
              label="Public"
              icon={<SvgIcon component={ChipCloseIcon} />}
            />
          </Box>
        </Box>
      </Box>
      <PostTable />
    </Box>
  );
};
