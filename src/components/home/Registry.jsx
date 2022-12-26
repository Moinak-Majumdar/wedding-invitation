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
        <section id='msgForU' className='min-w-screen flex justify-center items-center bg-gradient-to-b py-36 px-6 from-[#F9D423] to-[#FF4E50]'>
            <motion.div initial='closed' whileInView='open' viewport={{ once: false, amount: 0.4 }} variants={outerVariants} className='max-w-lg md:max-w-2xl h-fit mx-auto flex flex-col justify-center'>
                <motion.div variants={innerVariants2} className='relative h-fit w-fit mx-auto flex'>
                    <h1 className='font-courgette text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-teal-300 text-2xl md:text-4xl font-bold mx-auto z-10'>Sri Sri Prajapataya Namah</h1>
                    <img src={require('../../assets/image/flower-3.png')} className='h-38 md:h-48 w-42 md:w-52 mx-auto absolute -top-28 -right-10 md:-right-20' />
                </motion.div>
                <motion.div variants={innerVariants3} className='mt-16 font-ubuntu flex flex-col'>
                    <h2 className='text-xl md:text-2xl'>Dear esteemed friends and family,</h2>
                    <div className='md:text-xl mt-4 ml-6 font-courgette'>
                        <h3>We are thrilled to invite you to the celebration of our union as we exchange vows on the auspicious day of our life.</h3>
                        
                        <h3 className='mt-2'>As we embark on this new journey together, we are grateful to have you by our side to share in our joy and support us as we start this next chapter of our life.</h3>
                        
                        <h3 className='mt-2'>We hope that you will be able to join us for this special occasion and look forward to celebrating with you.</h3>
                    </div>

                    <h2 className='text-xl md:text-2xl mt-6'>Yours truly,</h2>
                    <h3 className='font-ubuntu text-lg md:text-xl'>Madhurima & Sumit.</h3>
                    
                </motion.div>
                <h1 className='mt-10 uppercase font-ubuntu font-bold italic text-2xl text-yellow-300 animate-bounce'>#Madhumit</h1>
                <h1 className='mt-2 uppercase font-ubuntu font-bold italic text-2xl text-yellow-300 animate-bounce'>#10yearoftougetherness</h1>
            </motion.div>
        </section>

    )
}
