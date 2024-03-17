/* eslint-disable react/prop-types */
import {motion} from "framer-motion"

function Images({ text, url }) {
    return (
      <motion.section className="lg:mt-4 mt-4 flex-col lg:flex-row flex justify-around items-center">
        <motion.div transition={{duration:0.2}} variants={{hidden:{scale:0},visible:{scale:1}}} initial="hidden" whileInView="visible" className="object-contain flex items-center justify-center hover:opacity-50 overflow-hidden h-96 w-96" >
          <img className="w-full aspect-video" src={url} alt={text} />
        </motion.div>
        <motion.h2 variants={{hidden:{y:100},visible:{y:0},hover:{scale:1.25}}} transition={{duration:0.2}} whileHover="hover" initial="hidden" whileInView="visible" className="text-blue-600 text-center my-4 text-2xl lg:text-4xl">
            {text}
        </motion.h2>
      </motion.section>
    );
}
  
const Themes = () => {
  return (
    <section className="w-full ">  
        <h1 className="text-4xl font-serif lg:text-7xl my-4 tracking-wider text-center">
            Events
        </h1>
        <Images text="Robotics and Automation" url="/robotics.avif"/>
        <Images text="Management and Analytics" url="/management.jpeg"/>
        <Images text="Construction and Design" url="/construction.jpeg" />
        <Images text="Software and Electronics" url="/entc.jpeg"/>
    </section>
  )
}

export default Themes