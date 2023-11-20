import React from 'react';
import { motion } from 'framer-motion';

const Popular = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1>popular movie</h1>
        </motion.div>
    );
}

export default Popular;