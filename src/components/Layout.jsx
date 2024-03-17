import Footer from "./Footer";
import Navbar from "./Navbar";


const Layout = ({children}) => {
  return (
    <div>
        <Navbar /> 
        <div className="mt-[30px] scroll-smooth">
        {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout