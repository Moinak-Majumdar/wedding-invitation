import { motion } from 'framer-motion'
import { BsWhatsapp, BsFillTelephoneOutboundFill } from 'react-icons/bs'
const Fade = {
    closed: {
        y: -50,
        x: -50,
        opacity: 0,
    },
    open: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
        }
    }
}

export const Assistance = () => {
    return (
        <section id='assistance' className='container px-6 md:px-16 my-24  h-fit mx-auto flex flex-col justify-cnter'>
            <motion.h1 variants={Fade} className='font-courgette text-4xl md:text-6xl  mx-auto z-10'>oh shit! here we go again</motion.h1>
            <div className='flex md:flex-row flex-col md:justify-between'>
                <motion.div variants={Fade} className='mt-16 flex flex-col mr-auto'>
                    <motion.h1 className='text-xl mr-4 capitalize font-ubuntu text-green-400'>text via whatsapp</motion.h1>
                    <motion.a className='text-xl mt-2 flex items-center gap-4' href='https://api.whatsapp.com/send?phone=+919804139678&text=I%20need%20directions'>
                        <span >
                            1. I need directions
                        </span>
                        <BsWhatsapp className='text-green-400' />
                    </motion.a>
                    <motion.a className='text-xl mt-2 flex items-center gap-4' href='https://api.whatsapp.com/send?phone=+919804139678&text=Hi'>
                        <span >
                            2. Just to say hi
                        </span>
                        <BsWhatsapp className='text-green-400' />
                    </motion.a>
                    <motion.a className='text-xl mt-2 flex items-center gap-4' href='https://api.whatsapp.com/send?phone=+919804139678&text=I%20am%20stuck%20pls%20help%20me'>
                        <span >
                            3. Others help needed
                        </span>
                        <BsWhatsapp className='text-green-400' />
                    </motion.a>
                </motion.div>
                <motion.div variants={Fade} className='mt-16 flex flex-col ml-auto'>
                    <motion.h1 className='text-xl mr-4 capitalize font-ubuntu text-blue-500'>Call immediately</motion.h1>
                    <motion.a className='text-xl mt-2 flex items-center gap-4' href='tel:+919804139678'>
                        <span >
                           1. 9804139678
                        </span>
                        <BsFillTelephoneOutboundFill className='text-blue-500' />
                    </motion.a>
                    <motion.a className='text-xl mt-2 flex items-center gap-4' href='tel:+919804139678'>
                        <span >
                            2. 9804139678
                        </span>
                        <BsFillTelephoneOutboundFill className='text-blue-500' />
                    </motion.a>
                    <motion.a className='text-xl mt-2 flex items-center gap-4' href='tel:+919804139678'>
                        <span >
                            3. 9804139678
                        </span>
                        <BsFillTelephoneOutboundFill className='text-blue-500' />
                    </motion.a>
                </motion.div>
            </div>


        </section>

    )
}
