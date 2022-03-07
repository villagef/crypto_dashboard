import React, { FC, useEffect, useState } from "react";
import { StyledLayout, StyledMain } from "./style";
import Navbar from "../__ui/Navbar";

interface Props {}

const Layout: FC<Props> = ({ children }) => {

  return (
    <StyledLayout>
      <Navbar />
      <StyledMain>{children}</StyledMain>
    </StyledLayout>
  );
};

export default Layout;
