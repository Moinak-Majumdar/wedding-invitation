import { motion } from 'framer-motion'

const variants = {
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

const Story = () => {
    return (
        <section id='story' className='container px-6 md:px-16 my-24 flex flex-col items-center h-fit mx-auto '>
            <motion.img variants={variants} src={require('../../assets/image/flower.png')} />
            <motion.h1 variants={variants} className='mt-10 text-3xl md:text-4xl font-courgette'>Our Stories</motion.h1>
            <motion.p variants={variants} className='my-10 font-ubuntu italic text-lg md:text-xl text-gray-600 leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ab facilis incidunt, quaerat minima earum recusandae delectus praesentium nam veritatis, voluptates placeat aliquid quia, nihil dolorum doloremque quam iure dolorem natus sapiente fugit blanditiis sequi. Nostrum culpa commodi totam beatae asperiores eveniet harum at sed quaerat, saepe, esse magni exercitationem?
            </motion.p>
            <motion.div variants={variants} className='mt-20 w-[90%] md:w-[80%] h-[35rem] flex justify-center items-end' style={{backgroundImage : `url(${require('../../assets/image/couple-437968.jpg')})`, backgroundPosition :'center center', backgroundSize: 'cover'}}>
                <div className='h-fit md:w-[80%] w-full mt-auto bg-white pt-10 flex justify-center items-center'>
                    <h1 className='text-4xl font-courgette capitalize'>getting together</h1>
                </div>
            </motion.div>
        </section>
    )
}

export default Story