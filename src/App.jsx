import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Themes from "./components/Themes"
import Video from "./components/Video"
import Directorsdesk from "./components/Directorsdesk"
import Scroll from "./components/Scroll"
import Scroll1 from "./components/Scroll1"
import ParticleBackground from 'react-particle-backgrounds'

const App = () => {
  const settings = {
    canvas: {
      canvasFillSpace: true,
      width: 200,
      height: 200,
      useBouncyWalls: false
    },
    particle: {
      particleCount: 200,
      color: '#94ecbe',
      minSize: 2,
      maxSize: 4
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 360,
      minSpeed: 2,
      maxSpeed: 4
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.5,
      opacityTransitionTime: 20000
    }
  }

  return (
    <div className="w-full relative text-white font-quicksand bg-black min-h-screen">
      <div className="absolute z-0 w-screen h-full">
        <ParticleBackground settings={settings} />
      </div>
      <main className="max-w-7xl z-10 mx-auto ">
          <Navbar/>
          <Hero/>
          <Directorsdesk />
          <Video />
          <Themes/>
          <Scroll />
          <Scroll1 />
      </main>
    </div>
  )
}

export default App