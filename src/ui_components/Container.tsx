import React from 'react'
import Container from '@mui/material/Container';

type ContainerProps = {
    children: React.ReactNode,
    disableGutters: boolean,
    fixed: boolean,
    maxWidth: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false,
    style: object
}

const container = ({children, fixed, disableGutters, maxWidth, style }: ContainerProps) => {
  return (
    <Container 
        fixed={fixed} 
        style={style}
        disableGutters={disableGutters} 
        maxWidth={maxWidth}>
      {children}
    </Container>
  )
}

export default container;
