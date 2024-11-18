'use client'
import { motion } from 'framer-motion'

export default function Test() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
      className="flex flex-col items-center gap-12"
    >
      <h1 className="text-4xl font-bold">Test Animation</h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="h-48 w-48 rounded-full bg-gray-300" />
      </motion.div>
    </motion.div>
  )
}
