import { motion } from 'framer-motion'

const outerVariants = {
  open: {
    transition: { staggerChildren: 0.5, delayChildren: 0.3 }
  },
  closed: {
    transition: { staggerChildren: 0.5, staggerDirection: -1 }
  }
};
const innerVariants1 = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -400,
    opacity: 0,
  }
};

const innerVariants2 = {
  closed: {
    x: 200,
    opacity: 0
  },
  open: {
    x: 0,
    opacity: 1
  }
}

const Hero = () => {
  return (
    <section id='intro' className="min-w-full min-h-screen flex justify-center items-center relative rounded-br-[100px]" style={{ backgroundImage: `url(${require('../../assets/image/hero.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
      <motion.div initial='closed' whileInView='open' viewport={{ once: false, amount: 0.1 }} variants={outerVariants} className="container my-auto flex flex-col justify-center items-center">
        <motion.h1 variants={innerVariants1} className="uppercase font-ubuntu font-bold text-6xl md:text-8xl text-center text-transparent bg-clip-text bg-gradient-to-b from-pink-200 to-cyan-300">she said yes !</motion.h1>
        <motion.div variants={innerVariants2} className="mt-10 w-fit">
          <p className="text-pink-500 text-2xl font-ubuntu font-bold w-fit text-center">Jan 27, 2023, 5:00 PM | Bani Bhavan, Palta</p>
          <div className="bg-slate-100 w-full" style={{ boxShadow: '0px 0px 40px #ffffff', height: '2px' }}></div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero