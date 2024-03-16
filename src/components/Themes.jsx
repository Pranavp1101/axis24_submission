/* eslint-disable react/prop-types */
import {motion} from "framer-motion"

function Images({ text, url }) {
    return (
      <motion.section className="my-24 flex justify-around items-center">
        <motion.div transition={{duration:0.2}} variants={{hidden:{scale:0},visible:{scale:1}}} initial="hidden" whileInView="visible" className="object-contain overflow-hidden h-96 w-96" >
          <img className="h-full" src={url} alt={text} />
        </motion.div>
        <motion.h2 variants={{hidden:{y:100},visible:{y:0}}} transition={{duration:0.2}} initial="hidden" whileInView="visible" className="text-blue-600 text-center text-5xl">
            {text}
        </motion.h2>
      </motion.section>
    );
}
  
const Themes = () => {
  return (
    <section className="w-full my-24 px-4 min-h-screen">  
        <h1 className="text-7xl tracking-wider text-center">
            Events
        </h1>
        <Images text="Robotics and Automation" url="/1.webp"/>
        <Images text="Management and Analytics" url="/2.png"/>
        <Images text="Construction and Design" url="/3.jpg" />
        <Images text="Software and Electronics" url="/4.jpg"/>
    </section>
  )
}

export default Themes