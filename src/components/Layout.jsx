import Navbar from "./Navbar";


const Layout = ({children}) => {
  return (
    <div>
        <Navbar /> 
        <div className="mt-[30px] scroll-smooth">
        {children}
        </div>
    </div>
  )
}

export default Layout