import { motion } from 'framer-motion'
import { Assistance } from '../components/home/Assistance'
import DateTime from '../components/home/DateTime'
import { Families } from '../components/home/Families'
import { Footer } from '../components/home/Footer'
import Hero from '../components/home/Hero'
import { Registry } from '../components/home/Registry'
import Story from '../components/home/Story'


const viewport = {
  once: false,
  amount: typeof window !== 'undefined' ? (window.innerWidth > 450 ? 0.5 : 0.1) : 0.5
}

const transition = {
  closed: {
    staggerChildren: 0.3, staggerDirection: -1
  },
  open: {
    staggerChildren: 0.3, delayChildren: 0.2
  }
}

const components = [
  <Hero/>, <Story/>, <Families/>, <DateTime/>, <Registry/>, <Assistance/>, <Footer/>
]

const Landing = () => {
  return (
    <>
      {components.map((curr, index) => {
        return(
          <motion.div key={index} initial={'closed'} whileInView={'open'} viewport={viewport} transition={transition}>
            {curr}
          </motion.div>
        )
      })}
    </>
  )
}

export default Landing