import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import React from 'react'


function Scroll() {
        const targetRef = useRef(null);
        const { scrollYProgress } = useScroll({
          target: targetRef,
        });
      
        const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
      
  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black mt-16">
    <div className="sticky top-0 flex h-screen items-center overflow-hidden">
      <motion.div style={{ x }} className="flex gap-4">
        {cards.map((card) => {
          return <Card card={card} key={card.id} />;
        })}
      </motion.div>
    </div>
  </section>
);
}

const Card = ({ card }) => {
return (
    <div
    key={card.id}
    className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
    <div
        style={{
        backgroundImage: `url(${card.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
    ></div>
    
    </div>
);
};

const cards = [
{
    url: "/1.webp",
    title: "Title 1",
    id: 1,
},
{
    url: "/1.webp",
    title: "Title 2",
    id: 2,
},
{
    url: "/1.webp",
    title: "Title 3",
    id: 3,
},
{
    url: "/1.webp",
    title: "Title 4",
    id: 4,
},
{
    url: "/1.webp",
    title: "Title 5",
    id: 5,
},
{
    url: "/1.webp",
    title: "Title 6",
    id: 6,
},
{
    url: "/1.webp",
    title: "Title 7",
    id: 7,
},
];

export default Scroll