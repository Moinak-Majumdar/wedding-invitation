import { motion } from 'framer-motion'

const Left = {
  closed: {
    x: 50,
    y: 50,
    opacity: 0.1,
  },
  open: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1
    }
  }
}

const Right = {
  closed: {
    x: -50,
    y: -50,
    opacity: 0.1,
  },
  open: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    }
  }
}

const Hero = () => {
  return (
    <section id='intro' className="min-w-full min-h-screen flex justify-center items-center relative rounded-br-[100px]" style={{backgroundImage: `url(${require('../../assets/image/hero.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center center'}}>
      <div className="container my-auto flex flex-col justify-center items-center">
        <motion.h1 variants={Left} className="uppercase font-ubuntu font-bold text-6xl md:text-8xl text-center text-transparent bg-clip-text bg-gradient-to-b from-pink-200 to-cyan-300">she said yes !</motion.h1>
        <motion.div variants={Right} className="mt-10 w-fit">
          <p className="text-slate-900 text-2xl font-ubuntu font-bold w-fit text-center">Jan 27, 2023, 5:00 PM | Bani Bhavan, Palta</p>
          <div className="bg-slate-100 w-full" style={{ boxShadow: '0px 0px 40px #ffffff', height: '2px' }}></div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero