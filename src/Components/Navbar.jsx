import { Link } from "react-router-dom"

import { excel } from "../assets/Icons"

function Navbar(){
  return(
    <div className="w-full h-[50px] flex justify-center items-center border-b-2">
      <div>
        <Link to="/">
          <div className="flex justify-center items-center gap-2">
            <img src={excel} alt="Excel Logo" className="h-8 w-8" />
            <p className="text-gray-800 text-xl font-semibold">Excel Upload</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
