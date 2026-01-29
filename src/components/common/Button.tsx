import { Button as MuiButton } from '@mui/material';
import { motion } from 'framer-motion';
import { theme } from '../../theme/theme';
import type { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

/**
 * Custom button component with consistent styling and animations
 */
export const Button = ({ variant = 'primary', children, ...props }: ButtonProps) => {
  const getButtonStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: theme.colors.primary,
          color: theme.colors.text,
          '&:hover': { backgroundColor: '#B71C1C' }
        };
      case 'secondary':
        return {
          backgroundColor: theme.colors.secondary,
          color: theme.colors.background,
          '&:hover': { backgroundColor: '#F9A825' }
        };
      case 'outline':
        return {
          border: `2px solid ${theme.colors.primary}`,
          color: theme.colors.primary,
          backgroundColor: 'transparent',
          '&:hover': { 
            backgroundColor: theme.colors.primary,
            color: theme.colors.text
          }
        };
      default:
        return {};
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MuiButton
        sx={{
          ...getButtonStyles(),
          borderRadius: theme.borderRadius.md,
          textTransform: 'none',
          fontWeight: 600,
          px: 3,
          py: 1.5
        }}
        {...props}
      >
        {children}
      </MuiButton>
    </motion.div>
  );
};