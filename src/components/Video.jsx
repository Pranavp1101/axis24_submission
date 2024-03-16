const Video = () => {
  return (
    <div className="w-full my-16">
        <h1 className="text-center text-2xl lg:text-5xl font-bolder my-8">AXIS 2024 THEME VIDEO</h1>
        <video className="w-full z-50 rounded-2xl" src="/video.mp4" loop muted autoPlay/>
    </div>
  )
}

export default Video