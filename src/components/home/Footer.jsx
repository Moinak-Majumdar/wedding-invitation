import { motion } from 'framer-motion'
import { BsArrowBarUp, BsGithub, BsFillTelephoneForwardFill, BsFacebook, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { MdOutlineMail } from 'react-icons/md'
const Fade = {
    closed: {
        y: 50,
        x: 50,
        opacity: 0,
    },
    open: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
        }
    }
}

const links = [
    { href : 'mailto:moinak2030@gami.com', icon: <MdOutlineMail/>},
    { href : 'https://github.com/Moinak-Majumdar', icon: <BsGithub/>},
    { href : 'tel:+919804139678', icon: <BsFillTelephoneForwardFill/>},
    { href : 'https://www.facebook.com/moinak.majumdar.9', icon: <BsFacebook/>},
    { href : 'https://www.linkedin.com/in/moinak-majumdar-b7a85b238/', icon: <BsLinkedin/>},
    { href : 'https://api.whatsapp.com/send?phone=+919804139678&text=I%20like%20your%20wedding%20invitation%20work', icon: <BsWhatsapp/>},
]

export const Footer = () => {
    
    return (
       <section className='min-w-screen flex justify-center items-center bg-gradient-to-br from-[#243B55] to-[#243B55] text-gray-300'>
         <div className='container px-6 md:px-16 my-24  h-fit mx-auto flex flex-col justify-center items-center'>
            <a href='#intro' className='flex justify-center items-center flex-col'>
                <motion.h1 variants={Fade} className='text-8xl'>
                    <BsArrowBarUp />
                </motion.h1>
                <motion.h1 variants={Fade} className='font-ubuntu text-4xl md:text-6xl uppercase  mx-auto z-10'>back to top</motion.h1>
            </a>
            <div className='flex flex-col mt-10'>
                <motion.h1 variants={Fade} className='text-xl animate-pulse mx-auto'>
                    Connect with the developer
                </motion.h1>
                <motion.div variants={Fade} className='flex gap-6 mt-8 mx-auto'>
                    {links.map((curr, index) => {
                        return (
                            <a href={curr.href} target='_blank' className={`text-2xl`}>
                                {curr.icon}
                            </a>
                        )
                    })}
                </motion.div>
            </div>
            <motion.div variants={Fade} className='mt-10'>
                <h1>&copy;{new Date().getFullYear()} - by Moinak Majumdar. Designed with Framer Motion and Tailwind css, Created with React.js</h1>
            </motion.div>
        </div>
       </section>

    )
}
