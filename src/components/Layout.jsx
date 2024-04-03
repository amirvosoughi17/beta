import Footer from "./structure/Footer";
import Navbar from "./structure/Navbar";


const Layout = ({children}) => {
  return (
    <div className="">
        <Navbar /> 
        <div className=" scroll-smooth text-black">
        {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout