import { motion } from 'framer-motion'
import { FaMapMarkerAlt } from 'react-icons/fa'

const outerVariants = {
    open: {
        transition: { staggerChildren: 0.5, delayChildren: 0.3 }
    },
    closed: {
        transition: { staggerChildren: 0.5, staggerDirection: -1 }
    }
};

const top = {
    closed: {
        scale: 0
    },
    open: {
        scale: 1
    }
}

const bottom = {
    closed: {
        y: 200,
        opacity: 0
    },
    open: {
        y: 0,
        opacity: 1
    }
}

const Left = {
    closed: {
        x: 200,
        opacity: 0
    },
    open: {
        x: 0,
        opacity: 1
    }
}

const Right = {
    closed: {
        x: -200,
        opacity: 0
    },
    open: {
        x: 0,
        opacity: 1
    }
}

const DateTime = () => {
    return (
        <motion.section id='dates' initial='closed' whileInView='open' viewport={{ once: false, amount: 0.4 }} variants={outerVariants} className='container px-6 md:px-16 mt-4 mb-10 h-fit mx-auto flex flex-col justify-center'>
            <div className='flex md:flex-row flex-col justify-center items-center mx-auto'>
                <motion.h1 variants={top} className='font-courgette text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-pink-600 mx-auto mb-10'>Save the dates !</motion.h1>
                <div className='flex flex-col ml-0 md:ml-10'>
                    <motion.div variants={Right} className="w-full mx-auto flex justify-between max-w-xl items-center relative">
                        <img className='absolute -top-14 -left-8' src={require('../../assets/image/fi2.png')} />
                        <h1 className="font-courgette text-2xl md:text-3xl capitalize text-indigo-600 mr-auto">the wedding</h1>
                        <h4 className="font-ubuntu text-xl max-w-[50%] text-[#570A57]">
                            <span>Date : 27/01/2023</span> <br />
                            <span>Time : 17:30:00</span> <br />
                            <span>Place : Palta,<br/> Bani Bhavan</span>
                            <a href='https://goo.gl/maps/D93Sf8wj9X4ZSopm6' target='_blank' className='text-2xl flex items-center gap-2 mt-2 text-blue-500'>
                                <FaMapMarkerAlt/>
                                <span>Open Maps</span>
                            </a>
                        </h4>
                    </motion.div>
                    <motion.div variants={Left} className="w-full mx-auto flex justify-between max-w-xl items-center mt-14 relative">
                        <img className='absolute -top-12 -right-8' src={require('../../assets/image/fi3.png')} />
                        <h4 className="font-ubuntu text-xl max-w-[50%] text-[#570A57]">
                            <span>Date : 29/01/2023</span> <br />
                            <span>Time : 19:00:00</span> <br />
                            <span>Place : Anandamath,<br/> C-Block community hall</span>
                            <a href='https://www.google.com/maps?q=22.795517,88.377914&entry=gps' target='_blank' className='text-2xl flex items-center gap-2 mt-2 text-blue-500'>
                                <FaMapMarkerAlt/>
                                <span>Open Maps</span>
                            </a>
                        </h4>
                        <h1 className="font-courgette text-2xl md:text-3xl capitalize text-indigo-600 ml-auto">the reception</h1>
                    </motion.div>
                </div>
            </div>
            <motion.div variants={bottom} className='mt-4 mx-auto w-[102%] md:w-[90%] lg:w-[80%] xl:w-[70%] h-[28rem] md:h-[35rem] rounded-2xl shadow-2xl shadow-rose-300' style={{backgroundImage : `url(${require('../../assets/photo/hands.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center center'}}>
            </motion.div>
        </motion.section>
    )
}

export default DateTime