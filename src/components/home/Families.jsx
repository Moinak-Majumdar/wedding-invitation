import { motion } from 'framer-motion'
import ImgSlider from '../others/ImgSlider'

const her = [require('../../assets/image/queen.jpg'), require('../../assets/image/sunset-7490522.jpg'), require('../../assets/image/bicycles-1867046.jpg'), require('../../assets/image/sunset-7490522.jpg'), require('../../assets/image/bicycles-1867046.jpg'), require('../../assets/image/sunset-7490522.jpg'), require('../../assets/image/bicycles-1867046.jpg')]

const his = [require('../../assets/image/king.jpg'), require('../../assets/image/sunset-7490522.jpg'), require('../../assets/image/bicycles-1867046.jpg'), require('../../assets/image/sunset-7490522.jpg'), require('../../assets/image/bicycles-1867046.jpg'), require('../../assets/image/sunset-7490522.jpg'), require('../../assets/image/bicycles-1867046.jpg')]

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
                <motion.h1 variants={top} className='font-courgette text-4xl mx-auto'>Families</motion.h1>
                <motion.img variants={top} src={require('../../assets/image/flower-4.png')} className='w-32 h-32 absolute -bottom-4 left-16 -z-10' />
            </div>
            <div className='mt-10 flex flex-col md:flex-row justify-center md:justify-between items-center min-w-full'>
                <motion.div variants={Left} className='flex flex-col w-full md:w-30r xl:w-35r'>
                    <h1 className='text-3xl font-ubuntu ml-6'>Wander Man</h1>
                    <div className='mt-4'>
                        <ImgSlider images={his} />
                    </div>
                    <motion.p variants={Left} className='px-6 mt-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis ducimus tenetur nesciunt eos in ratione blanditiis maiores quis vero sit rem eaque quae, deleniti quisquam reprehenderit id unde eligendi natus? Iusto molestias consectetur animi quo at modi et nihil eveniet eum, iste iure. Tenetur voluptatum consequatur veritatis eligendi pariatur!
                    </motion.p>
                </motion.div>
                <motion.img variants={bottom} src={require('../../assets/image/flower-2.png')} className='h-32 w-52 my-4 mx-auto'/>
                <motion.div variants={Right} className='flex flex-col w-full md:w-30r xl:w-35r mt-4 md:mt-0'>
                    <h1 className='text-3xl font-ubuntu ml-6'>She Hulk</h1>
                    <div className='mt-4'>
                        <ImgSlider images={her} />
                    </div>
                    <motion.p variants={Right} className='px-6 mt-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis ducimus tenetur nesciunt eos in ratione blanditiis maiores quis vero sit rem eaque quae, deleniti quisquam reprehenderit id unde eligendi natus? Iusto molestias consectetur animi quo at modi et nihil eveniet eum, iste iure. Tenetur voluptatum consequatur veritatis eligendi pariatur!
                    </motion.p>
                </motion.div>
            </div>
        </section>
    )
}
