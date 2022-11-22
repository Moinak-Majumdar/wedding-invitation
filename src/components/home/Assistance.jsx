import { motion } from 'framer-motion'
import { BsWhatsapp, BsFillTelephoneOutboundFill } from 'react-icons/bs'

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
        y: -200,
        opacity: 0,
    }
};
const innerVariants2 = {
    closed: {
        x: 200,
        y: 50,
        opacity: 0
    },
    open: {
        x: 0,
        y: 0,
        opacity: 1
    }
}
const innerVariants3 = {
    closed: {
        x: -200,
        y: -50,
        opacity: 0
    },
    open: {
        x: 0,
        y: 0,
        opacity: 1
    }
}

export const Assistance = () => {
    return (
        <motion.section id='assistance' initial='closed' whileInView='open' viewport={{ once: false, amount: 0.4 }} variants={outerVariants} className='container px-6 md:px-16 my-36  h-fit mx-auto flex flex-col justify-cnter'>
            <motion.h1 variants={innerVariants1} className='font-courgette text-4xl md:text-6xl  mx-auto z-10'>oh shit! here we go again</motion.h1>
            <div className='flex md:flex-row flex-col md:justify-between'>
                <motion.div variants={innerVariants2} className='mt-16 flex flex-col mr-auto'>
                    <h1 className='text-xl mr-4 capitalize font-ubuntu text-green-400'>text via whatsapp</h1>
                    <a className='text-xl mt-2 flex items-center gap-4' href='https://api.whatsapp.com/send?phone=+919804139678&text=I%20need%20directions'>
                        <span >
                            1. I need directions
                        </span>
                        <BsWhatsapp className='text-green-400' />
                    </a>
                    <a className='text-xl mt-2 flex items-center gap-4' href='https://api.whatsapp.com/send?phone=+919804139678&text=Hi'>
                        <span >
                            2. Just to say hi
                        </span>
                        <BsWhatsapp className='text-green-400' />
                    </a>
                    <a className='text-xl mt-2 flex items-center gap-4' href='https://api.whatsapp.com/send?phone=+919804139678&text=I%20am%20stuck%20pls%20help%20me'>
                        <span >
                            3. Others help needed
                        </span>
                        <BsWhatsapp className='text-green-400' />
                    </a>
                </motion.div>
                <motion.div variants={innerVariants3} className='mt-16 flex flex-col ml-auto'>
                    <h1 className='text-xl mr-4 capitalize font-ubuntu text-blue-500'>Call immediately</h1>
                    <a className='text-xl mt-2 flex items-center gap-4' href='tel:+919804139678'>
                        <span >
                            1. 9804139678
                        </span>
                        <BsFillTelephoneOutboundFill className='text-blue-500' />
                    </a>
                    <a className='text-xl mt-2 flex items-center gap-4' href='tel:+919804139678'>
                        <span >
                            2. 9804139678
                        </span>
                        <BsFillTelephoneOutboundFill className='text-blue-500' />
                    </a>
                    <a className='text-xl mt-2 flex items-center gap-4' href='tel:+919804139678'>
                        <span >
                            3. 9804139678
                        </span>
                        <BsFillTelephoneOutboundFill className='text-blue-500' />
                    </a>
                </motion.div>
            </div>
        </motion.section>
    )
}
