import { motion } from 'framer-motion'

const top = {
    closed: {
        y: 50,
        opacity: 0.1,
    },
    open: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

const bottom = {
    closed: {
        y: -50,
        opacity: 0.1,
    },
    open: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

const Left = {
    closed: {
        x: 50,
        opacity: 0.1,
    },
    open: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

const Right = {
    closed: {
        x: -50,
        opacity: 0.1,
    },
    open: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
        }
    }
}

export const Families = () => {
    return (
        <section id='families' className='container px-6 md:px-16 my-24 h-fit mx-auto flex flex-col justify-center'>
            <div className='relative mx-auto'>
                <motion.h1 variants={top} className='font-pacifico text-4xl mx-auto'>Families</motion.h1>
                <motion.img variants={top} src={require('../../assets/image/flower-4.png')} className='w-32 h-32 absolute -bottom-4 left-16 -z-10' />
            </div>
            <div className='mt-10 flex flex-col md:flex-row justify-center md:justify-between items-center min-w-full'>
                <motion.div variants={Left} className='flex flex-col w-full md:w-30r xl:w-35r'>
                    <h1 className='text-2xl lg:text-3xl font-courgette text-center ml-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-500'>Introducing the Bride side</h1>
                    <img src={require('../../assets/photo/bride.jpg')} className='mt-4 rounded-xl shadow-2xl shadow-orange-200'/>
                </motion.div>
                <motion.img variants={bottom} src={require('../../assets/image/flower-2.png')} className='h-32 w-52 my-4 mx-auto'/>
                <motion.div variants={Right} className='flex flex-col w-full md:w-30r xl:w-35r mt-4 md:mt-0'>
                    <h1 className='text-2xl lg:text-3xl font-courgette text-center ml-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-rose-600'>Introducing the Groom side</h1>
                    <img src={require('../../assets/photo/groom.jpg')} className='mt-4 rounded-xl shadow-2xl shadow-rose-200'/>
                </motion.div>
            </div>
        </section>
    )
}
