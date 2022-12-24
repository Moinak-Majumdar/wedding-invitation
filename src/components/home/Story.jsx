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
    },
    open: {
        opacity: 1,
        transition: {
            duration: .5
        }
    }
}

const Story = () => {

    const images = [require('../../assets/photo/os1.jpg'), require('../../assets/photo/os2.png'), require('../../assets/photo/os3.png'), require('../../assets/photo/os4.png'), require('../../assets/photo/os5.png')]

    return (
        <motion.section initial='closed' whileInView='open' viewport={{ once: false, amount: 0.1 }} variants={outerVariants} id='story' className='container px-6 md:px-16 mt-10 flex flex-col items-center h-fit mx-auto'>
            <motion.img variants={innerVariants1} src={require('../../assets/image/flower.png')} />
            <motion.h1 variants={innerVariants1} className='mt-6 text-3xl md:text-4xl font-pacifico'>Our Storie</motion.h1>
            <motion.p variants={innerVariants1} className='mt-10 font-courgette text-lg md:text-2xl text-[#6C4AB6] leading-relaxed'>
                <span className='font-courgette text-pink-600 px-1'>Soulmates!</span>
                <span className='font-courgette text-pink-600 px-1'>Soulmates</span>
                is an ambiguous word for many. As the true meaning of finding one&apos;s soulmate is still a topic to ponder about. While some people claim to have hit the jackpot, the aftermath doesn&apos;t always go as planned. Well, we weren&apos;t
                <span className='font-courgette text-pink-600 px-1'>Soulmates</span>
                either, rather our souls first met at a time when a pair of wings starts to grow on our back. Yes people, I&apos;m talking about class XI. Mathematics batch it was, SMD sir&apos;s batch no1. It was the first time we saw each other, having no clue that we&apos;ll be writing this ten years from that day. So did we talk? Well, no! It was not until 2012 , 2 years later, that we talked for the first time and by that time the tuition was over. Then on a hopeful day, the man finally decided to roll the dice by asking her the million-dollar question “will you be my girlfriend?”. She agreed right? Well yes, but it took a full day to convince her that the dude was not kidding. And from that day starts the long 10 years journey. Ups and downs were a part of this relationship but it never truly reached the limit where it could fall apart. We endured each other&apos;s madness, cared for each other, tolerated each other, She stood by him when he was searching for a job and he did the same for her, from the brightest days to the darkest night we stood by each other hand in hand and finally decided to tie the knot on
                <span className='font-ubuntu text-pink-600 px-1'>JAN 27TH of 2023.</span><br />
                So yeah, we aren&apos;t
                <span className='font-courgette text-pink-600 px-1'>soulmates,</span>
                but that&apos;s the whole point, you don&apos;t need a soulmate! You just need that
                <span className='font-courgette text-pink-600 px-1'>special someone!</span>
            </motion.p>
            <motion.div variants={innerVariants2} className=' mt-8 w-full h-[40rem] md:h-[50rem] relative flex flex-col justify-center items-center overflow-y-hidden'>
                <div className='absolute inset-0 flex justify-center items-center rounded-full overflow-hidden'>
                    <svg id="visual" viewBox="0 0 1920 1080" width="1920" height="1080" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
                        <rect x="0" y="0" width="1920" height="1080" fill="#ffffff00">
                        </rect>
                        <defs>
                            <linearGradient id="grad1_0" x1="43.8%" y1="0%" x2="100%" y2="100%">
                                <stop offset="14.444444444444446%" stop-color="#91d9fd" stop-opacity="1">
                                </stop>
                                <stop offset="85.55555555555554%" stop-color="#91d9fd" stop-opacity="1">
                                </stop>
                            </linearGradient>
                        </defs>
                        <defs>
                            <linearGradient id="grad1_1" x1="43.8%" y1="0%" x2="100%" y2="100%">
                                <stop offset="14.444444444444446%" stop-color="#91d9fd" stop-opacity="1">
                                </stop>
                                <stop offset="85.55555555555554%" stop-color="#a3defd" stop-opacity="1">
                                </stop>
                            </linearGradient>
                        </defs>
                        <defs>
                            <linearGradient id="grad1_2" x1="43.8%" y1="0%" x2="100%" y2="100%">
                                <stop offset="14.444444444444446%" stop-color="#b4e4fe" stop-opacity="1">
                                </stop>
                                <stop offset="85.55555555555554%" stop-color="#a3defd" stop-opacity="1">
                                </stop>
                            </linearGradient>
                        </defs>
                        <defs>
                            <linearGradient id="grad1_3" x1="43.8%" y1="0%" x2="100%" y2="100%">
                                <stop offset="14.444444444444446%" stop-color="#b4e4fe" stop-opacity="1">
                                </stop>
                                <stop offset="85.55555555555554%" stop-color="#c4e9fe" stop-opacity="1">
                                </stop>
                            </linearGradient>
                        </defs>
                        <defs>
                            <linearGradient id="grad1_4" x1="43.8%" y1="0%" x2="100%" y2="100%">
                                <stop offset="14.444444444444446%" stop-color="#d3effe" stop-opacity="1">
                                </stop>
                                <stop offset="85.55555555555554%" stop-color="#c4e9fe" stop-opacity="1">
                                </stop>
                            </linearGradient>
                        </defs>
                        <defs>
                            <linearGradient id="grad1_5" x1="43.8%" y1="0%" x2="100%" y2="100%">
                                <stop offset="14.444444444444446%" stop-color="#d3effe" stop-opacity="1">
                                </stop>
                                <stop offset="85.55555555555554%" stop-color="#e2f4ff" stop-opacity="1">
                                </stop>
                            </linearGradient>
                        </defs>
                        <defs>
                            <linearGradient id="grad1_6" x1="43.8%" y1="0%" x2="100%" y2="100%">
                                <stop offset="14.444444444444446%" stop-color="#f1faff" stop-opacity="1">
                                </stop>
                                <stop offset="85.55555555555554%" stop-color="#e2f4ff" stop-opacity="1">
                                </stop>
                            </linearGradient>
                        </defs>
                        <defs>
                            <linearGradient id="grad1_7" x1="43.8%" y1="0%" x2="100%" y2="100%">
                                <stop offset="14.444444444444446%" stop-color="#f1faff" stop-opacity="1">
                                </stop>
                                <stop offset="85.55555555555554%" stop-color="#ffffff" stop-opacity="1">
                                </stop>
                            </linearGradient>
                        </defs>
                        <defs>
                            <linearGradient id="grad2_0" x1="0%" y1="0%" x2="56.3%" y2="100%">
                                <stop offset="14.444444444444446%" stop-color="#91d9fd" stop-opacity="1">
                                </stop>
                                <stop offset="85.55555555555554%" stop-color="#91d9fd" stop-opacity="1">
                                </stop>
                            </linearGradient>
                        </defs>
                        <defs>
                            <linearGradient id="grad2_1" x1="0%" y1="0%" x2="56.3%" y2="100%">
                                <stop offset="14.444444444444446%" stop-color="#a3defd" stop-opacity="1">
                                </stop>
                                <stop offset="85.55555555555554%" stop-color="#91d9fd" stop-opacity="1">
                                </stop>
                            </linearGradient>
                        </defs>
                        <defs>
                            <linearGradient id="grad2_2" x1="0%" y1="0%" x2="56.3%" y2="100%">
                                <stop offset="14.444444444444446%" stop-color="#a3defd" stop-opacity="1">
                                </stop>
                                <stop offset="85.55555555555554%" stop-color="#b4e4fe" stop-opacity="1">
                                </stop>
                            </linearGradient>
                        </defs>
                        <defs>
                            <linearGradient id="grad2_3" x1="0%" y1="0%" x2="56.3%" y2="100%">
                                <stop offset="14.444444444444446%" stop-color="#c4e9fe" stop-opacity="1">
                                </stop>
                                <stop offset="85.55555555555554%" stop-color="#b4e4fe" stop-opacity="1">
                                </stop>
                            </linearGradient>
                        </defs>
                        <defs>
                            <linearGradient id="grad2_4" x1="0%" y1="0%" x2="56.3%" y2="100%">
                                <stop offset="14.444444444444446%" stop-color="#c4e9fe" stop-opacity="1">
                                </stop>
                                <stop offset="85.55555555555554%" stop-color="#d3effe" stop-opacity="1">
                                </stop>
                            </linearGradient>
                        </defs>
                        <defs>
                            <linearGradient id="grad2_5" x1="0%" y1="0%" x2="56.3%" y2="100%">
                                <stop offset="14.444444444444446%" stop-color="#e2f4ff" stop-opacity="1">
                                </stop>
                                <stop offset="85.55555555555554%" stop-color="#d3effe" stop-opacity="1">
                                </stop>
                            </linearGradient>
                        </defs>
                        <defs>
                            <linearGradient id="grad2_6" x1="0%" y1="0%" x2="56.3%" y2="100%">
                                <stop offset="14.444444444444446%" stop-color="#e2f4ff" stop-opacity="1">
                                </stop>
                                <stop offset="85.55555555555554%" stop-color="#f1faff" stop-opacity="1">
                                </stop>
                            </linearGradient>
                        </defs>
                        <defs>
                            <linearGradient id="grad2_7" x1="0%" y1="0%" x2="56.3%" y2="100%">
                                <stop offset="14.444444444444446%" stop-color="#ffffff" stop-opacity="1">
                                </stop>
                                <stop offset="85.55555555555554%" stop-color="#f1faff" stop-opacity="1">
                                </stop>
                            </linearGradient>
                        </defs>
                        <g transform="translate(1920, 0)">
                            <path d="M0 1023C-91.6 1023.4 -183.1 1023.9 -265.5 991C-348 958.2 -421.3 892 -471.5 816.7C-521.7 741.3 -548.9 656.7 -593.3 593.3C-637.7 529.8 -699.4 487.4 -743.9 429.5C-788.5 371.6 -815.9 298.1 -835.5 223.9C-855.2 149.7 -867.1 74.8 -879 0L0 0Z" fill="#f8fcff">
                            </path>
                            <path d="M0 895.1C-80.1 895.5 -160.2 895.9 -232.4 867.2C-304.5 838.4 -368.6 780.5 -412.6 714.6C-456.5 648.6 -480.2 574.6 -519.1 519.1C-558 463.6 -611.9 426.5 -650.9 375.8C-689.9 325.1 -713.9 260.8 -731.1 195.9C-748.3 131 -758.7 65.5 -769.1 0L0 0Z" fill="#eaf7ff">
                            </path>
                            <path d="M0 767.3C-68.7 767.6 -137.3 767.9 -199.2 743.3C-261 718.6 -316 669 -353.6 612.5C-391.3 556 -411.6 492.5 -444.9 444.9C-478.3 397.3 -524.5 365.6 -557.9 322.1C-591.3 278.7 -611.9 223.5 -626.6 167.9C-641.4 112.3 -650.3 56.1 -659.2 0L0 0Z" fill="#dbf1fe">
                            </path>
                            <path d="M0 639.4C-57.2 639.7 -114.4 639.9 -166 619.4C-217.5 598.9 -263.3 557.5 -294.7 510.4C-326.1 463.3 -343 410.5 -370.8 370.8C-398.5 331.1 -437.1 304.6 -464.9 268.4C-492.8 232.2 -509.9 186.3 -522.2 139.9C-534.5 93.6 -541.9 46.8 -549.4 0L0 0Z" fill="#ccecfe">
                            </path>
                            <path d="M0 511.5C-45.8 511.7 -91.6 511.9 -132.8 495.5C-174 479.1 -210.6 446 -235.7 408.3C-260.9 370.6 -274.4 328.4 -296.6 296.6C-318.8 264.9 -349.7 243.7 -372 214.8C-394.2 185.8 -407.9 149 -417.8 111.9C-427.6 74.8 -433.5 37.4 -439.5 0L0 0Z" fill="#bce7fe">
                            </path>
                            <path d="M0 383.6C-34.3 383.8 -68.7 384 -99.6 371.6C-130.5 359.3 -158 334.5 -176.8 306.2C-195.6 278 -205.8 246.3 -222.5 222.5C-239.1 198.7 -262.3 182.8 -279 161.1C-295.7 139.3 -306 111.8 -313.3 84C-320.7 56.1 -325.2 28.1 -329.6 0L0 0Z" fill="#ace1fe">
                            </path>
                            <path d="M0 255.8C-22.9 255.9 -45.8 256 -66.4 247.8C-87 239.5 -105.3 223 -117.9 204.2C-130.4 185.3 -137.2 164.2 -148.3 148.3C-159.4 132.4 -174.8 121.9 -186 107.4C-197.1 92.9 -204 74.5 -208.9 56C-213.8 37.4 -216.8 18.7 -219.7 0L0 0Z" fill="#9adcfd">
                            </path>
                            <path d="M0 127.9C-11.4 127.9 -22.9 128 -33.2 123.9C-43.5 119.8 -52.7 111.5 -58.9 102.1C-65.2 92.7 -68.6 82.1 -74.2 74.2C-79.7 66.2 -87.4 60.9 -93 53.7C-98.6 46.4 -102 37.3 -104.4 28C-106.9 18.7 -108.4 9.4 -109.9 0L0 0Z" fill="#91d9fd">
                            </path>
                        </g>
                        <g transform="translate(0, 1080)">
                            <path d="M0 -882C65.4 -830.9 130.8 -779.9 205.2 -766C279.7 -752.1 363.3 -775.3 444 -769C524.7 -762.8 602.5 -727 682.4 -682.4C762.3 -637.7 844.3 -584.1 881.6 -509C919 -433.9 911.6 -337.2 928.3 -248.7C944.9 -160.3 985.4 -80.1 1026 0L0 0Z" fill="#f8fcff">
                            </path>
                            <path d="M0 -771.7C57.2 -727.1 114.4 -682.4 179.6 -670.2C244.8 -658.1 317.9 -678.4 388.5 -672.9C459.1 -667.4 527.2 -636.1 597.1 -597.1C667 -558 738.7 -511.1 771.4 -445.4C804.1 -379.6 797.7 -295 812.2 -217.6C826.8 -140.3 862.3 -70.1 897.8 0L0 0Z" fill="#eaf7ff">
                            </path>
                            <path d="M0 -661.5C49 -623.2 98.1 -584.9 153.9 -574.5C209.8 -564 272.5 -581.5 333 -576.8C393.5 -572.1 451.8 -545.3 511.8 -511.8C571.7 -478.3 633.2 -438.1 661.2 -381.8C689.2 -325.4 683.7 -252.9 696.2 -186.5C708.7 -120.2 739.1 -60.1 769.5 0L0 0Z" fill="#dbf1fe">
                            </path>
                            <path d="M0 -551.2C40.9 -519.3 81.7 -487.4 128.3 -478.7C174.8 -470 227.1 -484.6 277.5 -480.6C327.9 -476.7 376.5 -454.4 426.5 -426.5C476.4 -398.6 527.7 -365.1 551 -318.1C574.3 -271.2 569.8 -210.7 580.2 -155.5C590.5 -100.2 615.9 -50.1 641.3 0L0 0Z" fill="#ccecfe">
                            </path>
                            <path d="M0 -441C32.7 -415.5 65.4 -389.9 102.6 -383C139.9 -376 181.7 -387.6 222 -384.5C262.3 -381.4 301.2 -363.5 341.2 -341.2C381.1 -318.9 422.1 -292.1 440.8 -254.5C459.5 -216.9 455.8 -168.6 464.1 -124.4C472.4 -80.1 492.7 -40.1 513 0L0 0Z" fill="#bce7fe">
                            </path>
                            <path d="M0 -330.7C24.5 -311.6 49 -292.5 77 -287.2C104.9 -282 136.2 -290.7 166.5 -288.4C196.8 -286 225.9 -272.6 255.9 -255.9C285.8 -239.1 316.6 -219.1 330.6 -190.9C344.6 -162.7 341.9 -126.4 348.1 -93.3C354.3 -60.1 369.5 -30.1 384.8 0L0 0Z" fill="#ace1fe">
                            </path>
                            <path d="M0 -220.5C16.3 -207.7 32.7 -195 51.3 -191.5C69.9 -188 90.8 -193.8 111 -192.3C131.2 -190.7 150.6 -181.8 170.6 -170.6C190.6 -159.4 211.1 -146 220.4 -127.3C229.7 -108.5 227.9 -84.3 232.1 -62.2C236.2 -40.1 246.4 -20 256.5 0L0 0Z" fill="#9adcfd">
                            </path>
                            <path d="M0 -110.2C8.2 -103.9 16.3 -97.5 25.7 -95.7C35 -94 45.4 -96.9 55.5 -96.1C65.6 -95.3 75.3 -90.9 85.3 -85.3C95.3 -79.7 105.5 -73 110.2 -63.6C114.9 -54.2 114 -42.1 116 -31.1C118.1 -20 123.2 -10 128.3 0L0 0Z" fill="#91d9fd">
                            </path>
                        </g>
                    </svg>
                </div>
                <div className='w-[98%] md:w-[45%] flex justify-center'>
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