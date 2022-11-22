import { motion } from 'framer-motion'

const outerVariants = {
    open: {
        transition: { staggerChildren: 0.5, delayChildren: 0.3 }
    },
    closed: {
        transition: { staggerChildren: 0.5, staggerDirection: -1 }
    }
};
const innerVariants2 = {
    closed: {
        x: 200,
        opacity: 0
    },
    open: {
        x: 0,
        opacity: 1
    }
}
const innerVariants3 = {
    closed: {
        x: -200,
        opacity: 0
    },
    open: {
        x: 0,
        opacity: 1
    }
}

export const Registry = () => {
    return (
        <section id='registry' className='min-w-screen flex justify-center items-center bg-gradient-to-br from-[#E0EAFC] to-[#CFDEF3]'>
            <motion.div initial='closed' whileInView='open' viewport={{ once: false, amount: 0.4 }} variants={outerVariants} className='container px-6 md:px-16 my-36 h-fit mx-auto flex flex-col justify-center'>
                <motion.div variants={innerVariants2} className='relative h-fit w-fit mx-auto flex'>
                    <h1 className='font-courgette text-4xl md:text-6xl  mx-auto z-10'>Registry</h1>
                    <img src={require('../../assets/image/flower-3.png')} className='h-42 w-52 mx-auto absolute -top-20 -right-20'/>
                </motion.div>
                <motion.p variants={innerVariants3} className='mt-16 font-ubuntu text-3xl md:text-5xl'>
                    <span>See you at</span><br/>
                    <span>Nov 27, 2022, 12:00 PM | Bani Bhavan, Palta</span>
                </motion.p>
                <h1 className='mt-10 uppercase font-ubuntu font-bold italic text-2xl text-indigo-600 animate-bounce'>#10yearoftougetherness</h1>
            </motion.div>
        </section>

    )
}
