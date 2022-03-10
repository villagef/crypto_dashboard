import React, { FC, useEffect, useState } from "react";
import { StyledLayout, StyledMain } from "./style";
import Navbar from "../__ui/Navbar";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../shared/styles/consts";

interface Props {}

const Layout: FC<Props> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(false);
  return (
    <ThemeProvider theme={isDark ? lightTheme : darkTheme}>
      <StyledLayout>
        <Navbar theme={isDark ? lightTheme : darkTheme} theisDarkme={isDark} setIsDark={setIsDark} />
        <StyledMain>{children}</StyledMain>
      </StyledLayout>
    </ThemeProvider>
  );
};

export default Layout;

