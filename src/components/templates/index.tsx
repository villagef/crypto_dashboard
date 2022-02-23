import React, { FunctionComponent } from 'react';
import {StyledLayout, StyledMain} from "./style"
import Navbar from '../__ui/Navbar'

const Layout: FunctionComponent<any> = ({children}) => {
  return (
    <StyledLayout>
        <StyledMain>
            {children}
        </StyledMain>
    </StyledLayout>
  )
}

export default Layout;
