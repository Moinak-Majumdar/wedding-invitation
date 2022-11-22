import { motion } from 'framer-motion'
import ImgSlider from '../others/ImgSlider'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";

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
        y: 200,
        opacity: 0,
    }
};
const innerVariants2 = {
    closed: {
        opacity: 0,
        scale: 0.5,
    },
    open: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: .5
        }
    }
}

const Story = () => {

    const images = [require('../../assets/photo/photo 1-1.png'), require('../../assets/photo/photo 2-1.png'), require('../../assets/photo/photo 3-1.png'), require('../../assets/photo/photo 4-1.png'), require('../../assets/photo/photo 5-1.png'), require('../../assets/photo/photo 6-1.png'), require('../../assets/photo/photo 7-1.png'), require('../../assets/photo/photo 8-1.png'), require('../../assets/photo/photo 9-1.png'),]

    return (
        <motion.section initial='closed' whileInView='open' viewport={{ once: false, amount: 0.1 }} variants={outerVariants} id='story' className='container px-6 md:px-16 my-10 flex flex-col items-center h-fit mx-auto'>
            <motion.img variants={innerVariants1} src={require('../../assets/image/flower.png')} />
            <motion.h1 variants={innerVariants1} className='mt-6 text-3xl md:text-4xl font-courgette'>Our Stories</motion.h1>
            <motion.p variants={innerVariants1} className='mt-10 font-ubuntu italic text-lg md:text-xl text-gray-600 leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ab facilis incidunt, quaerat minima earum recusandae delectus praesentium nam veritatis, voluptates placeat aliquid quia, nihil dolorum doloremque quam iure dolorem natus sapiente fugit blanditiis sequi. Nostrum culpa commodi totam beatae asperiores eveniet harum at sed quaerat, saepe, esse magni exercitationem?
            </motion.p>
            <motion.div variants={innerVariants2} className='mt-8 w-[95%] md:w-[55%] h-[35rem] relative flex flex-col justify-center items-center'>
                <div className='w-full flex justify-center'>
                   <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={{clickable: true,}} navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
                        {images.map((curr, i) => {
                            return(
                                <SwiperSlide key={i}>
                                    <img src={curr} className='h-[35rem] w-full'/>
                                </SwiperSlide>
                            )
                        })}
                   </Swiper>
                </div>
                <div className='absolute z-10 bottom-0 w-fit mx-auto bg-white pt-2 md:pt-4 md:px-12 px-10'>
                    <h1 className='text-xl md:text-4xl font-courgette capitalize'>getting together</h1>
                </div>
            </motion.div>
        </motion.section>
    )
}

export default Story