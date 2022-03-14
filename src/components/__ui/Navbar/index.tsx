import { memo } from "react";
import { NavbarWrapper, NavbarLink, useStyles } from "./style";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../../../routes/consts";
import { Switch } from "@material-ui/core";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const Navbar = (props: any): JSX.Element => {
  const classes = useStyles(props.theme);
  return (
    <NavbarWrapper>
      <NavbarLink>
        <Link to={ROUTE_PATHS.home}>
          <HomeOutlinedIcon className={classes.root} />
        </Link>
      </NavbarLink>
      <NavbarLink>
        <Link to={ROUTE_PATHS.add}>
          <AddOutlinedIcon className={classes.root} />
        </Link>
      </NavbarLink>
      <NavbarLink>
        <Link to={ROUTE_PATHS.settings}>
          <SettingsOutlinedIcon className={classes.root} />
        </Link>
      </NavbarLink>
      <NavbarLink>
        <Link to={ROUTE_PATHS.login}>
          <LogoutOutlinedIcon className={classes.root} />
        </Link>
      </NavbarLink>
      <br />
      <DarkModeOutlinedIcon className={classes.root} />
      <Switch
        checked={props.isDark}
        onChange={() => props.setIsDark((prev: boolean) => !prev)}
        name="mode"
        color='primary'
        className={classes.switch}
      />
      <LightModeOutlinedIcon className={classes.root} />
    </NavbarWrapper>
  );
};

export default memo(Navbar);
