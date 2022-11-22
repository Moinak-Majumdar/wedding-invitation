import { motion } from 'framer-motion'

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
        y: -200,
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
        <motion.section id='dates' initial='closed' whileInView='open' viewport={{ once: false, amount: 0.4 }} variants={outerVariants} className='container px-6 md:px-16 my-20 h-fit mx-auto flex flex-col justify-center'>
            <div className='flex md:flex-row flex-col justify-center items-center mx-auto'>
                <motion.h1 variants={top} className='font-courgette text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-pink-600 mx-auto mb-8'>Save the dates !</motion.h1>
                <div className='flex flex-col'>
                    <motion.div variants={Right} className="w-full mx-auto p-4 flex justify-between rounded-r-3xl max-w-xl items-center relative">
                        <img className='absolute -top-14 -left-8' src={require('../../assets/image/fi2.png')} />
                        <h1 className="font-courgette text-2xl md:text-3xl capitalize text-indigo-600 mr-auto">the wedding</h1>
                        <h4 className="font-ubuntu text-xl max-w-[60%]">
                            <span>date : dd/mm/yyyy</span> <br />
                            <span>time : hh:mm:ss</span> <br />
                            <span>place : Lorem ipsum dolor sit amet.</span>
                        </h4>
                    </motion.div>
                    <motion.div variants={Left} className="w-full mx-auto p-4 flex justify-between rounded-l-3xl max-w-xl items-center mt-10 relative">
                        <h4 className="font-ubuntu text-xl">
                            <span>date : dd/mm/yyyy</span> <br />
                            <span>time : hh:mm:ss</span> <br />
                            <span>place : Lorem ipsum dolor sit amet.</span>
                        </h4>
                        <h1 className="font-courgette text-2xl md:text-3xl capitalize text-indigo-600 ml-auto">the reception</h1>
                        <img className='absolute -top-12 -right-8' src={require('../../assets/image/fi3.png')} />
                    </motion.div>
                </div>
            </div>
            <motion.div variants={bottom} className='mt-8 mx-auto w-[90%] md:w-[70%] h-[25rem] rounded-3xl flex justify-center items-center shadow-2xl shadow-slate-800' style={{ backgroundImage: `url(${require('../../assets/image/heart-529607.jpg')})`, backgroundPosition: 'center center', backgroundSize: 'cover' }}>
                <div className='w-full flex justify-center items-center my-auto px-4'>
                    <h1 className='text-2xl md:text-4xl font-courgette capitalize text-center'>can't wait to celebrate with you. </h1>
                </div>
            </motion.div>
        </motion.section>
    )
}

export default DateTime