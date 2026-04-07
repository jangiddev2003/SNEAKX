import { forwardRef } from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

const Button = forwardRef(({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 focus:ring-black dark:focus:ring-white',
    secondary: 'bg-gray-100 text-black hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 focus:ring-gray-500',
    outline: 'border-2 border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black focus:ring-black dark:focus:ring-white',
    neon: 'bg-transparent border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-black shadow-[0_0_10px_var(--color-primary)] hover:shadow-[0_0_20px_var(--color-primary)] focus:ring-[var(--color-primary)]'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      ref={ref}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
});

Button.displayName = 'Button';

export default Button;
