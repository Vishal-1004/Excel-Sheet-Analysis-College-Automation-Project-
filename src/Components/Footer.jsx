import { Link } from "react-router-dom"

function Footer(){
  return(
    <div className="w-full h-[100px] flex flex-col justify-center items-center gap-4 pb-4">
      <div className="border-t-2 w-[95vw] sm:w-[90vw] flex justify-between items-center text-gray-500 text-[14px] pt-6">
        <div>
          <p>
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
        <div className="hidden md:block">
          <p>Made With &#9829; By
            <Link to="https://google.com"> Vishal</Link>, 
            <Link to="https://google.com"> Shashank</Link> &
            <Link to="https://google.com"> Hariharan</Link>
          </p>
        </div>
        <div className="flex gap-4 sm:gap-6">
          <Link to="/terms-conditions">Terms</Link>
          <Link to="/privacy-policy">Privacy-policy</Link>
        </div>
      </div>

      <div className="block md:hidden text-gray-500 text-[14px] text-center">
        <p>Made With &#9829; By
          <Link to="https://google.com"> Vishal</Link>, 
          <Link to="https://google.com"> Shashank</Link> &
          <Link to="https://google.com"> Hariharan</Link>
        </p>
      </div>
    </div>
  )
}

export default Footer
