/* eslint-disable react/prop-types */
import {motion} from "framer-motion"

function Cards({name,number}){
    return (
        <motion.div variants={{hidden:{y:100,opacity:0,scale:0},show:{y:0,opacity:1,scale:1}}} initial="hidden" whileInView="show" className='text-white flex w-full max-w-64 flex-col gap-2 items-center align-middle text-center bg-slate-900 md:py-8 py-3 px-10 md:px-16 rounded-2xl my-2'>
                <h1 className='text-xl text-center tracking-wider font-bold'>{name}</h1>
                <h2 className='text-xl text-center text-blue-600'>{number}+</h2>
        </motion.div>
    )
}

function Directorsdesk() {
  return (
    <motion.div className='bg-black mt-32'>
        <motion.div variants={{visible:{transition:{delay:0.5,when:"beforeChildren",staggerChildren:1}}}} whileInView="visible" className='flex flex-col md:flex-row justify-around items-center py-8 md:py-16'>
            <Cards name={"EVENTS"} number={40}/>
            <Cards name={"COLLEGES"} number={150}/>
            <Cards name={"FOOTFALL"} number={20000}/>
        </motion.div>
        <div className='flex flex-col md:flex-row justify-around p-8 md:px-20 gap-16'>
            <img src="https://axisvnit.in/images/padolesir.jpg" alt="" width={650} height='auto' />
            <div className='text-white md:m-8'>
                <h1 className='text-3xl md:text-8xl mb-2 md:mb-8'>Director's Desk</h1>
                <p className='text-wrap md:text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis enim, quos iure exercitationem aliquam amet dolor aut adipisci sed alias iste quisquam possimus, eaque a odio est repellat odit quidem?Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>

    </motion.div>
  )
}

export default Directorsdesk