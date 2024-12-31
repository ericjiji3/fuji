'use client';
import { motion } from "framer-motion";
import { AnimatePresence } from "motion/react"

export default function Template({children}){
    return(
        <AnimatePresence initial={false}>
        <motion.div
            initial={{opacity: 0, scale: 0 }}
            animate={{opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0  }}
            transition={{ease: 'easeInOut', duration: 0.5}}
        >

            {children}
        </motion.div>
        </AnimatePresence>
    )
}