import styled from "styled-components";
import { makeStyles } from "@material-ui/core";

export const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 100vh;
  box-sizing: border-box;
  box-shadow: 0px 8px 10px -2px rgba(152, 152, 155, 1);
`;

export const NavbarLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  color: red;
`;

export const useStyles = makeStyles(theme => ({
  root: (props: any) => ({
    color: props.iconColor
  }),
}));
