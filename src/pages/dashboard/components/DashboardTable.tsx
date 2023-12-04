import { Box, IconButton, SvgIcon, TextField } from "@mui/material";
import React from "react";
import { SearchNormalIcon } from "../../../icons/SearchNormalIcon";
import PostTable from "./PostTable";

const DashboardTable: React.FC = () => {
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
      </Box>
      <PostTable />
    </Box>
  );
};

export { DashboardTable as default };
