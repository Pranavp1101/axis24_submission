const Footer = () => {
  return (
    <div className="bg-black mt-24 text-white">
      
      <div className="text-center text-6xl ">Teamwork makes the Dreamwork</div>
      <div className="flex justify-center">
      <button className=" mt-10 px-3 py-2 bg-blue-600 rounded-full">
          Connect with us
      </button>
      </div>
      <div className=" mt-7 space-x-5 flex justify-center ">
      <div className="cursor-pointer border hover:border-none hover:bg-blue-600  rounded-full inline-block py-2 px-3">
        admin@axisvnit.in
      </div>
      <div className="cursor-pointer border hover:border-none hover:bg-blue-600 rounded-full inline-block py-2 px-3">
        Student Activity Centre,Near Auditorium,VNIT,Nagpur-440010
      </div>
      </div>
      <div className="bg-black text-white p-4  w-full">
      

      <div className="flex items-center justify-between">

      <div className="text-left">
        <p>Follow us on Social Media</p>
        <div className="mt-2">
          <a href="#" className="text-gray-400 hover:text-white hover:underline mx-2">Instagram</a>
          <a href="#" className="text-gray-400 hover:text-white hover:underline mx-2">Youtube</a>
          <a href="#" className="text-gray-400 hover:text-white hover:underline mx-2">LinkedIN</a>
          <a href="#" className="text-gray-400 hover:text-white hover:underline mx-2">X</a>
          <a href="#" className="text-gray-400 hover:text-white hover:underline mx-2">Facebook</a>
        </div>
      </div>
      <div className="text-right">
        <p>&copy; 2024 VNIT. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="text-gray-400 hover:text-white hover:underline mx-2">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white hover:underline mx-2">Terms of Service</a>
        </div>
      </div>
      </div>
      </div>
      
  </div>
  )
}

export default Footer