import { memo } from "react";
import { NavbarWrapper, NavbarLink, useStyles } from "./style";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../../../routes/consts";

const Navbar = (): JSX.Element => {
  const classes = useStyles();
  return (
    <NavbarWrapper>
      <NavbarLink>
        <Link to={ROUTE_PATHS.home}>
          <HomeOutlinedIcon className={classes.root}/>
        </Link>
      </NavbarLink>
      <NavbarLink>
        <Link to={ROUTE_PATHS.add}>
        <AddOutlinedIcon className={classes.root}/>
        </Link>
      </NavbarLink>
      <NavbarLink>
        <Link to={ROUTE_PATHS.settings}>
        <SettingsOutlinedIcon className={classes.root}/>
        </Link>
      </NavbarLink>
      <NavbarLink>
        <Link to={ROUTE_PATHS.login}>
        <LogoutOutlinedIcon className={classes.root}/>
        </Link>
      </NavbarLink>
    </NavbarWrapper>
  );
};

export default memo(Navbar);