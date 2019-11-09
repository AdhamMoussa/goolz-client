import React from 'react';
import { motion } from 'framer-motion';

import styles from './styles.module.scss';

const motionConfig = {
  type: 'spring',
  damping: 20,
  stiffness: 100
};

const Page: React.FC = ({ children }) => {
  return (
    <motion.div
      className={styles.Page}
      transition={motionConfig}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Page;
