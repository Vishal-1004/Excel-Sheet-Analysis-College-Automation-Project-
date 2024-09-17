function Footer(){
  return(
    <div className="w-full h-[100px] flex justify-center items-center">
      <div className="border-t-2 w-[95vw] sm:w-[90vw] flex justify-between items-center text-gray-500 text-[14px] pt-6">
        <div>
          <p>
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
        <div className="flex gap-4 sm:gap-6">
          <a href="#">Terms</a>
          <a href="#">About us</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
