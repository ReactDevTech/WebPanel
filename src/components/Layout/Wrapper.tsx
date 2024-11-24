import React, { ReactNode } from 'react';
import { Box, Container, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// Define background styles
export const backgrounds = {
  login: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  signup: 'linear-gradient(135deg, #6B8DD6 0%, #8E37D7 100%)',
  forgotPassword: 'linear-gradient(135deg, #4CA1AF 0%, #2C3E50 100%)',
  default: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  dashboard: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
  // Add more background styles as needed
};

interface WrapperProps {
  children: ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  backgroundType?: keyof typeof backgrounds;
  customBackground?: string;
  withPaper?: boolean;
  elevation?: number;
}

const StyledBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'backgroundStyle',
})<{ backgroundStyle: string }>(({ theme, backgroundStyle }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  background: backgroundStyle,
  transition: 'background 0.3s ease',
  position: 'relative',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
    pointerEvents: 'none',
  },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  borderRadius: theme.spacing(1),
  backdropFilter: 'blur(10px)',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  animation: 'fadeIn 0.5s ease-in',
  transition: 'all 0.3s ease',

  '&:hover': {
    boxShadow: theme.shadows[6],
  },

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },

  '@keyframes fadeIn': {
    from: {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
}));

const Wrapper = ({ 
  children, 
  maxWidth = 'xs',
  backgroundType = 'default',
  customBackground,
  withPaper = true,
  elevation = 3,
}: WrapperProps) => {
  const backgroundStyle = customBackground || backgrounds[backgroundType];

  const content = withPaper ? (
    <StyledPaper elevation={elevation}>
      {children}
    </StyledPaper>
  ) : children;

  return (
    <StyledBox backgroundStyle={backgroundStyle}>
      {maxWidth ? (
        <Container component="main" maxWidth={maxWidth}>
          {content}
        </Container>
      ) : (
        content
      )}
    </StyledBox>
  );
};

export default Wrapper; 