import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react';

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
    y: -260,
    opacity: 1,
  },
  closed: {
    y: -600,
    opacity: 0,
  }
};

const innerVariants2 = {
  closed: {
    y: 200,
    opacity: 0
  },
  open: {
    y: 0,
    opacity: 1
  }
}

const Hero = () => {

  const [Days, setDays] = useState('00')
  const [Hour, setHour] = useState('00')
  const [Minute, setMinute] = useState('00')
  const [Second, setSecond] = useState('00')

  let interval = useRef()

  const setTimer = () => {
    const countDownDate = new Date('Jan 27 2023 17:00:00').getTime()

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const day = Math.floor((distance / (1000 * 60 * 60 * 24)))
      const hr = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
      const min = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)))
      const sec = Math.floor((distance % (1000 * 60)) / 1000)

      if (distance < 0) {
        setDays('00')
        setHour('00')
        setMinute('00')
        setSecond('00')
        clearInterval(interval.current)
      } else {
        setDays(day)
        setHour(hr)
        setMinute(min)
        setSecond(sec)
      }

    }, 1000)
  }

  useEffect(() => {
    setTimer()
    return () => {
      clearInterval(interval.current)
    }
  })
  return (
    <section id='intro' className="min-w-full min-h-screen flex justify-center items-center relative rounded-br-[100px]" style={{ backgroundImage: `url(${require('../../assets/image/hero.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
      <motion.div initial='closed' whileInView='open' viewport={{ once: false, amount: 0.1 }} variants={outerVariants} className="container my-auto flex flex-col items-center">
        <motion.h1 variants={innerVariants1} className="uppercase font-ubuntu font-bold text-5xl md:text-7xl text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-rose-500">she said yes !</motion.h1>
        <motion.div variants={innerVariants2} className="absolute bottom-30 md:bottom-20 flex flex-col justify-center items-center">
          <div className='flex justify-center gap-2 md:gap-4'>
            {/*days  */}
            <div className='flex flex-col justify-center items-center'>
              <h1 className='text-5xl md:text-6xl font-courgette text-transparent bg-gradient-to-b from-[#89fffd] to-[#ef32d9] bg-clip-text px-1'>{Days}</h1>
              <h4 className='font-ubuntu text-white'>Days</h4>
            </div>
            <h2 className='text-3xl md:text-4xl text-white animate-pulse'>:</h2>
            {/* hours */}
            <div className='flex flex-col justify-center items-center'>
              <h1 className='text-5xl md:text-6xl font-courgette text-transparent bg-gradient-to-b from-[#a8ff78] to-[#78ffd6] bg-clip-text px-1'>{Hour}</h1>
              <h4 className='font-ubuntu text-white'>Hours</h4>
            </div>
            <h2 className='text-3xl md:text-4xl text-white animate-pulse'>:</h2>
            {/* min */}
            <div className='flex flex-col justify-center items-center'>
              <h1 className='text-5xl md:text-6xl font-courgette text-transparent bg-gradient-to-b from-[#ffff1c] to-[#1cefff] bg-clip-text px-1'>{Minute}</h1>
              <h4 className='font-ubuntu text-white'>Minutes</h4>
            </div>
            <h2 className='text-3xl md:text-4xl text-white animate-pulse'>:</h2>
            {/* sec */}
            <div className='flex flex-col justify-center items-center'>
              <h1 className='text-5xl md:text-6xl font-courgette text-transparent bg-gradient-to-b from-[#a8ff78] to-[#dd3e54] bg-clip-text px-1'>{Second}</h1>
              <h4 className='font-ubuntu text-white'>Seconds</h4>
            </div>
          </div>
          <h1 className='mt-8 font-pacifico text-2xl pb-2 text-transparent bg-gradient-to-r bg-clip-text from-red-400 to-blue-400'>Away from tieing the knot</h1>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero