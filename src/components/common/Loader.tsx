import { CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { theme } from '../../theme/theme';

/**
 * Loading spinner component
 */
export const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex justify-center items-center py-12"
    >
      <CircularProgress 
        sx={{ color: theme.colors.primary }}
        size={40}
      />
    </motion.div>
  );
};