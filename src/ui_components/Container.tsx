import React from 'react'
import Container from '@mui/material/Container';

type ContainerProps = {
    children: React.ReactNode,
    disableGutters: boolean,
    fixed: boolean,
    maxWidth: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false,
}

const container = ({children, fixed, disableGutters, maxWidth }: ContainerProps) => {
  return (
    <Container 
        fixed={fixed} 
        disableGutters={disableGutters} 
        maxWidth={maxWidth}>
      {children}
    </Container>
  )
}

export default container;
