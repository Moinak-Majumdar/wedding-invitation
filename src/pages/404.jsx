import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Fade = {
    closed: {
        opacity: 0,
    },
    open: {
      
        opacity: 1,
        transition: {
            duration: 1,
            delay: 0.4
        }
    }
}

const Error404 = () => {
  return (
    <motion.div variants={Fade} initial='closed' animate='open' className='min-h-screen w-full flex justify-center items-center flex-col p-6'>
        <h1 className='font-ubuntu font-bold text-6xl'>404 Page not found !</h1>
        <p className='mt-4 font-courgette text-lg'>Sorry! the page you are looking for, that might be removed or temporarily unavailable.</p>
        <motion.button whileTap={{scale: 0.9}} className='mt-8'>
            <Link to={'/'} className='px-8 py-4 border-2 border-indigo-600 rounded-full text-indigo-600 text-2xl'>Go Home</Link>
        </motion.button>
    </motion.div>
  )
}

export default Error404