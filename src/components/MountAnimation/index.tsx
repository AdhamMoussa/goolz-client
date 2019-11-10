import React from 'react';
import { motion } from 'framer-motion';

const motionConfig = {
  type: 'spring',
  damping: 20,
  stiffness: 100
};

interface IProps {
  className?: string;
}

const MountAnimation: React.FC<IProps> = ({ className, children }) => {
  return (
    <motion.div
      className={className}
      transition={motionConfig}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default MountAnimation;
