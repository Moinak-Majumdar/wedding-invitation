import { useState } from 'react'
import { motion } from 'framer-motion'
import { CgMenuRight } from 'react-icons/cg'
import { BsBookmarkHeartFill } from 'react-icons/bs'

const divVariants = {
  open: {
    width: '300px',
    height: '100vh',
    x: '0px'
  },
  closed: {
    width: '300px',
    height: '100vh',
    x: '500px',
    transition: {delay: 0.68}
  }
}
const ulVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.5 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};
const liVariants = {
  open: {
    y: 40,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 0,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const links = [
  { name: 'Into', link: '#intro' },
  { name: 'Our Story', link: '#story' },
  { name: 'Families', link: '#families' },
  { name: 'Save the Dates', link: '#dates' },
  { name: 'Invitation', link: '#msgForU' },
  { name: 'Assistance', link: '#assistance' }
]

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState(null)

  return (
    <>
      <div className='fixed top-0 right-4 w-fit mt-2 rounded-full z-50'>
        <button onClick={() => setIsOpen(!isOpen)} className='rounded-full cursor-pointer text-2xl bg-pink-300' style={{ padding: '9px'}}>
          <CgMenuRight className='text-black' />
        </button>
      </div>
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        className={`z-40 fixed top-0 right-0 min-h-full flex ${isOpen ? "w-full" : 'max-w-0'}`}
      >
        <div onClick={() => setIsOpen(!isOpen)} className='bg-transparent min-w-full min-h-full'></div>
        <motion.div
          variants={divVariants}
          style={{ background: 'linear-gradient(#D7DDE8,#BBD2C5)', boxShadow: '0px 0px 30px #374151' }}
          className='absolute top-0 right-0 bottom-0 rounded-l-2xl text-gray-800'
        >
          <section className='w-full flex min-h-full flex-col  px-4'>
            <motion.div variants={ulVariants} animate={isOpen ? 'open' : 'closed'} className='w-full flex flex-col h-full my-auto pb-40 relative pr-4'>
              {links.map((curr, index) => {
                return (
                  <motion.div key={index} variants={liVariants} whileTap={{scale: 0.9}} className='w-full text-2xl px-4 mb-4 flex items-center'>
                    <a href={curr.link} onClick={() => setActiveLink(curr.name)} className='font-ubuntu italic'>{curr.name}</a>
                    <BsBookmarkHeartFill className={activeLink === curr.name ? 'text-slate-800 ml-auto text-3xl' : 'hidden'}/>
                  </motion.div>
                )
              })}
            </motion.div>
          </section>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Navbar