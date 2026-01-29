import { motion } from 'framer-motion';
import { theme } from '../../theme/theme';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

/**
 * Reusable section title component with consistent styling
 */
export const SectionTitle = ({ title, subtitle, centered = false }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <h2 
        className="text-4xl md:text-5xl font-bold mb-4"
        style={{ 
          color: theme.colors.text,
          fontFamily: theme.fonts.heading
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          className="text-lg max-w-2xl"
          style={{ color: theme.colors.textSecondary }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};