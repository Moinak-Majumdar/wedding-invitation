import { motion } from 'framer-motion'

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

export const Registry = () => {
    return (
        <section id='registry' className='min-w-screen flex justify-center items-center bg-gradient-to-br from-[#E0EAFC] to-[#CFDEF3]'>
            <div className='container px-6 md:px-16 my-24  h-fit mx-auto flex flex-col justify-center'>
                <div className='relative h-fit w-fit mx-auto flex'>
                    <motion.h1 variants={Fade} className='font-courgette text-4xl md:text-6xl  mx-auto z-10'>Registry</motion.h1>
                    <motion.img variants={Fade} src={require('../../assets/image/flower-3.png')} className='h-42 w-52 mx-auto absolute -top-20 -right-20'/>
                </div>
                <motion.p variants={Fade} className='mt-16'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis harum soluta placeat eveniet eius alias incidunt laboriosam voluptatibus fugit impedit sunt veritatis quibusdam sit tempore quia rem ullam unde cum est voluptates quod, possimus, dolorum animi! Quaerat commodi pariatur quidem ullam maxime similique ut magnam alias labore. Rem voluptatem odio itaque. Reiciendis, eaque asperiores dicta voluptates adipisci officiis aut amet, quisquam, facilis ducimus dolorum nihil commodi laudantium natus neque. Vitae sapiente quae assumenda quis sunt doloremque maiores delectus et pariatur. Eligendi cum rem quisquam doloremque eveniet nisi voluptatibus impedit. Consectetur adipisci ea, autem reprehenderit odit amet asperiores earum quaerat? Deserunt?
                </motion.p>
                <h1 className='mt-10 uppercase font-ubuntu font-bold italic text-2xl text-indigo-600 animate-bounce'>#10yearoftougetherness</h1>
            </div>
        </section>

    )
}
