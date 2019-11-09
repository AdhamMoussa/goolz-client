import React from 'react';
import { motion } from 'framer-motion';

import Header from '../Header';

const motionConfig = {
  type: 'spring',
  damping: 20,
  stiffness: 100
};

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />

      <motion.main
        transition={motionConfig}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.main>
    </>
  );
};

export default Layout;
