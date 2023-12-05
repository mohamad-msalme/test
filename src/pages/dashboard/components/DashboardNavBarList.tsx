// NestedList.tsx
import React from "react";

import Oval from "@icons/Oval.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigationItem } from "../hooks/useNavigationItem";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

interface NestedListProps {
  label: string;
  icon: string;
  path: string;
  children?: NestedListProps[];
}

/* The code defines a functional component called `DashboardNavBarList` that takes in props of type
`NestedListProps`. */
export const DashboardNavBarList: React.FC<NestedListProps> = ({
  label,
  icon,
  path,
  children,
}) => {
  const [isNestedListOpen, setIsNestedListOpen] = React.useState(true);
  const { pathName } = useNavigationItem();

  const toggleNestedList = () => setIsNestedListOpen(!isNestedListOpen);
  const isItemActive = (path: string) => pathName.includes(path);

  /* The `renderListItem` function is a helper function that takes in an item of type `NestedListProps`
  and returns a JSX element. */
  const renderListItem = (item: NestedListProps) => (
    <ListItem key={item.path}>
      <ListItemIcon>
        <img
          style={{
            marginInlineStart: isItemActive(item.path) ? 0 : "1.1rem",
          }}
          src={isItemActive(item.path) ? item.icon : Oval}
        ></img>
      </ListItemIcon>
      <ListItemText
        primary={item.label}
        sx={{
          "& .MuiTypography-root": {
            fontSize: "1.5em",
            color: isItemActive(item.path) ? "#121212" : "#000000A3",
            fontWeight: 400,
          },
        }}
      />
    </ListItem>
  );

  return (
    <List>
      <ListItem onClick={toggleNestedList}>
        <ListItemIcon>
          <img src={icon}></img>
        </ListItemIcon>
        <ListItemText
          primary={label}
          sx={{
            "& .MuiTypography-root": {
              color: isItemActive(path) ? "#0080FF" : "#000000A3",
              fontWeight: isItemActive(path) ? 700 : 400,
            },
          }}
        />
        <ListItemIcon
          style={{
            justifyContent: "end",
          }}
        >
          {isNestedListOpen ? <ExpandMoreIcon /> : <ChevronRightIcon />}
        </ListItemIcon>
      </ListItem>
      {/* Nested List */}
      {isNestedListOpen && <List>{children?.map(renderListItem)}</List>}
    </List>
  );
};
