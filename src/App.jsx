import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Themes from "./components/Themes"

const App = () => {
  return (
    <div className="w-full text-white font-quicksand bg-black min-h-screen">
      <main className="max-w-7xl m-auto">
          <Navbar/>
          <Hero/>
          <Themes/>
      </main>
    </div>
  )
}

export default App