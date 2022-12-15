import { motion } from 'framer-motion'
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

    const images = [require('../../assets/photo/os1.jpg'), require('../../assets/photo/os2.png'), require('../../assets/photo/os3.png'), require('../../assets/photo/os4.png'), require('../../assets/photo/os5.png')]

    return (
        <motion.section initial='closed' whileInView='open' viewport={{ once: false, amount: 0.1 }} variants={outerVariants} id='story' className='container px-6 md:px-16 my-10 flex flex-col items-center h-fit mx-auto'>
            <motion.img variants={innerVariants1} src={require('../../assets/image/flower.png')} />
            <motion.h1 variants={innerVariants1} className='mt-6 text-3xl md:text-4xl font-pacifico'>Our Stories</motion.h1>
            <motion.p variants={innerVariants1} className='mt-10 font-courgette text-lg md:text-2xl text-[#6C4AB6] leading-relaxed'>
                <span className='font-courgette text-pink-600 px-1'>Soulmates!</span>
                <span className='font-courgette text-pink-600 px-1'>Soulmates</span>
                is an ambiguous word for many. As the true meaning of finding one&apos;s soulmate is still a topic to ponder about. While some people claim to have hit the jackpot, the aftermath doesn&apos;t always go as planned. Well, we weren&apos;t
                <span className='font-courgette text-pink-600 px-1'>Soulmates</span>
                either, rather our souls first met at a time when a pair of wings starts to grow on our back. Yes people, I&apos;m talking about class XI. Mathematics batch it was, SMD sir&apos;s batch no1. It was the first time we saw each other, having no clue that we&apos;ll be writing this ten years from that day. So did we talk? Well, no! It was not until 2012 , 2 years later, that we talked for the first time and by that time the tuition was over. Then on a hopeful day, the man finally decided to roll the dice by asking her the million-dollar question “will you be my girlfriend?”. She agreed right? Well yes, but it took a full day to convince her that the dude was not kidding. And from that day starts the long 10 years journey. Ups and downs were a part of this relationship but it never truly reached the limit where it could fall apart. We endured each other&apos;s madness, cared for each other, tolerated each other, She stood by him when he was searching for a job and he did the same for her, from the brightest days to the darkest night we stood by each other hand in hand and finally decided to tie the knot on 
                <span className='font-ubuntu text-pink-600 px-1'>JAN 27TH of 2023.</span>  So yeah, we aren&apos;t
                <span className='font-courgette text-pink-600 px-1'>soulmates,</span>
                but that&apos;s the whole point, you don&apos;t need a soulmate! You just need that
                <span className='font-courgette text-pink-600 px-1'>special someone!</span>
            </motion.p>
            <motion.div variants={innerVariants2} className='mt-8 w-[95%] md:w-[45%] h-[40rem] md:h-[50rem] relative flex flex-col justify-center items-center'>
                <div className='w-full flex justify-center'>
                    <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={{ clickable: true, }} navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
                        {images.map((curr, i) => {
                            return (
                                <SwiperSlide key={i}>
                                    <img src={curr} className='h-[38rem] md:h-[48rem] w-full' loading='lazy' />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
                <div className='absolute z-10 bottom-0 w-fit mx-auto bg-white pt-2 md:pt-4 md:px-12 px-10'>
                    <h1 className='text-xl md:text-4xl font-courgette capitalize text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400'>getting together</h1>
                </div>
            </motion.div>
        </motion.section>
    )
}

export default Story