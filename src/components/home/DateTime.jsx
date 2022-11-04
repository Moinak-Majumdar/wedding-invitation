import { motion } from 'framer-motion'

const top = {
    closed: {
        y: 100,
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
        y: -100,
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
        x: 100,
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
        x: -100,
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

const DateTime = () => {
    return (
        <section id='dates' className='container px-6 md:px-16 my-24  h-fit mx-auto flex flex-col justify-center'>
            <motion.h1 variants={top} className='font-courgette text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-pink-600 mx-auto mb-8'>Save the dates !</motion.h1>
            <motion.div variants={Right} className="w-full mx-auto p-4 flex justify-between rounded-r-3xl max-w-xl items-center relative">
                <img className='absolute -top-14 -left-8' src={require('../../assets/image/fi2.png')} />
                <h1 className="font-courgette text-2xl md:text-3xl capitalize text-indigo-600 mr-auto">the wedding</h1>
                <h4 className="font-ubuntu text-xl max-w-[60%]">
                    <span>date : dd/mm/yyyy</span> <br />
                    <span>time : hh/mm/ss</span> <br />
                    <span>place : Lorem ipsum dolor sit amet.</span>
                </h4>
            </motion.div>
            <motion.div variants={Left} className="w-full mx-auto p-4 flex justify-between rounded-l-3xl max-w-xl items-center mt-10 relative">
                <h4 className="font-ubuntu text-xl">
                    <span>date : dd/mm/yyyy</span> <br />
                    <span>time : hh/mm/ss</span> <br />
                    <span>place : Lorem ipsum dolor sit amet.</span>
                </h4>
                <h1 className="font-courgette text-2xl md:text-3xl capitalize text-indigo-600 ml-auto">the reception</h1>
                <img className='absolute -top-12 -right-8' src={require('../../assets/image/fi3.png')} />
            </motion.div>
            <motion.div variants={bottom} className='mt-10 mx-auto w-[90%] md:w-[80%] h-[33rem] rounded-3xl flex justify-center items-center shadow-2xl shadow-slate-800' style={{ backgroundImage: `url(${require('../../assets/image/heart-529607.jpg')})`, backgroundPosition: 'center center', backgroundSize: 'cover' }}>
                <div className='w-full flex justify-center items-center my-auto px-4'>
                    <h1 className='text-2xl md:text-4xl font-courgette capitalize text-center'>can't wait to celebrate with you. </h1>
                </div>
            </motion.div>
        </section>
    )
}

export default DateTime