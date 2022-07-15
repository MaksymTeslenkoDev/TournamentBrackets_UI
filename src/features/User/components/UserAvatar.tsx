import { Avatar, Box, IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";
import { AppUser } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "@material-ui/core";
import { SimpleButton } from "../../../Components/UiElements/Buttons/TBButton";
import { userAvatarStyles } from "../styles/userAvatarStyles";
interface UserAvatarProps {
  user: AppUser;
  handleLogOut: () => void;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({
  user,
  handleLogOut,
}) => {
  const classes = userAvatarStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    // handleMobileMenuClose();
  };
  const isMenuOpen = Boolean(anchorEl);
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      className={classes.menuWrapper}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>
        <Typography className={classes.userNameTitle}>{user.name}</Typography>
      </MenuItem>

      <MenuItem>
        <SimpleButton
          variant="contained"
          color="secondary"
          onClick={handleLogOut}
        >
          LogOut
        </SimpleButton>
      </MenuItem>
    </Menu>
  );
  const renderAvatar = () => {
    if (!user.icon) {
      return <FontAwesomeIcon icon={faUser} />;
    }
    return <Avatar alt={user.name} src={user.icon} />;
  };
  return (
    <Box>
      <IconButton
        size="medium"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
      >
        {renderAvatar()}
      </IconButton>
      {renderMenu}
    </Box>
  );
};
