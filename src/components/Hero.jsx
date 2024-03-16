import image from "/hero2.png";

const Hero = () => {
  return (
    <section className="w-full my-16 flex lg:flex-row  flex-col-reverse justify-around items-center px-4 h-[100dvh-20px]">
        <div className="">
          <h1 className="text-5xl lg:text-9xl font-bold font-sans tracking-wider text-center">AXIS 24</h1>
          <p className="text-wrap max-w-3/4 md:max-w-[500px] text-center tracking-wide text-lg lg:text-xl">Be out mascot for AXIS, the largest technical fest by VNIT NAGPUR</p>
        </div>
        <div className="h-96 lg:h-[600px]">
            <img src={image} className="h-full" alt="Axis 24 Ai image"/>
        </div>
    </section>
  )
}

export default Hero