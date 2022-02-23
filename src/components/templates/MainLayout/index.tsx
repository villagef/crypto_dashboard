import React, { CSSProperties, FunctionComponent, ReactNode } from 'react'
import { StringLiteralLike } from 'typescript';
import { StyledLayout, StyledWrapperContent, StyledContent} from './style'

interface Props {
    title?: string;
    styles?: CSSProperties;
    renderButtons?(): ReactNode;
}

const MainLayout: FunctionComponent<Props> = (props) => {
  return (
    <StyledLayout>
      <StyledWrapperContent>
        <StyledContent style={props.styles}>
          {props.children}
        </StyledContent>
      </StyledWrapperContent>
    </StyledLayout>
  )
}

export default MainLayout;