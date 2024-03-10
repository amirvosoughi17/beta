import Navbar from "./Navbar";


const Layout = ({children}) => {
  return (
    <div>
        <Navbar /> 
        <div className="mt-[30px]">
        {children}
        </div>
    </div>
  )
}

export default Layout