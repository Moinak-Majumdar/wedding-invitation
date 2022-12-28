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
const innerVariants4 = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 200,
        opacity: 0,
    }
};

export const Assistance = () => {
    return (
        <motion.section id='assistance' initial='closed' whileInView='open' viewport={{ once: false, amount: 0.4 }} variants={outerVariants} className='container px-6 md:px-16 my-24  h-fit mx-auto flex flex-col justify-center'>
            <motion.h1 variants={innerVariants1} className='font-courgette text-4xl md:text-6xl text-center z-10 text-transparent bg-gradient-to-r bg-clip-text from-indigo-500 to-red-500'>Connect with families</motion.h1>
            <div className='grid md:grid-cols-3 grid-cols-1 gaps-4 px-auto'>
                <motion.div variants={innerVariants2} className='mt-16 flex flex-col mr-auto ml-0 md:ml-auto'>
                    <h1 className='text-xl mr-4 capitalize font-ubuntu text-green-400'>text on whatsapp</h1>
                    <a className='text-xl mt-2 flex items-center gap-4' href='https://api.whatsapp.com/send?phone=+919804139678&text=I%20need%20directions'>
                        <span>
                            1. I need directions.
                        </span>
                        <BsWhatsapp className='text-green-400' />
                    </a>
                    <a className='text-xl mt-2 flex items-center gap-4' href='https://api.whatsapp.com/send?phone=+919804139678&text=I%20want%20a%20pickup'>
                        <span >
                            2. I want someone to pickup.
                        </span>
                        <BsWhatsapp className='text-green-400' />
                    </a>
                    <a className='text-xl mt-2 flex items-center gap-4' href='https://api.whatsapp.com/send?phone=+919804139678&text=I%20am%20stuck%20pls%20help%20me'>
                        <span >
                            3. Others help needed.
                        </span>
                        <BsWhatsapp className='text-green-400' />
                    </a>
                    <a className='text-xl mt-2 flex items-center gap-4' href='https://api.whatsapp.com/send?phone=+919804139678&text=I%20want%20google%20maps%20links'>
                        <span>
                            4. Get google maps link.
                        </span>
                        <BsWhatsapp className='text-green-400' />
                    </a>
                </motion.div>
                <motion.div variants={innerVariants3} className='mt-16 flex flex-col ml-auto mr-0 md:mr-auto'>
                    <h1 className='text-xl mr-4 capitalize font-ubuntu text-blue-500'>Ring for assistance <br /> at wedding.</h1>
                    <a className='text-xl mt-2 flex items-center gap-4' href='tel:+919804139678'>
                        <span >
                            1. 9804139678
                        </span>
                        <BsFillTelephoneOutboundFill className='text-blue-500' />
                    </a>
                    <a className='text-xl mt-2 flex items-center gap-4' href='tel:+919831802436'>
                        <span >
                            2. 9831802436
                        </span>
                        <BsFillTelephoneOutboundFill className='text-blue-500' />
                    </a>
                    <a className='text-xl mt-2 flex items-center gap-4' href='tel:+919903788658'>
                        <span >
                            3. 9903788658
                        </span>
                        <BsFillTelephoneOutboundFill className='text-blue-500' />
                    </a>
                </motion.div>
                <motion.div variants={innerVariants2} className='mt-16 flex flex-col mr-auto ml-0 md:ml-auto'>
                    <h1 className='text-xl mr-4 capitalize font-ubuntu text-blue-500'>Ring for assistance <br /> at reception.</h1>
                    <a className='text-xl mt-2 flex items-center gap-4' href='tel:+919674622429'>
                        <span >
                            1. 9674622429
                        </span>
                        <BsFillTelephoneOutboundFill className='text-blue-500' />
                    </a>
                    <a className='text-xl mt-2 flex items-center gap-4' href='tel:+918017278148'>
                        <span >
                            2. 8017278148
                        </span>
                        <BsFillTelephoneOutboundFill className='text-blue-500' />
                    </a>
                </motion.div>
            </div>
            <motion.h1 variants={innerVariants4} className='mt-20 font-pacifico text-orange-500 text-xl text-center'>One tap away to connect.</motion.h1>
        </motion.section>
    )
}
