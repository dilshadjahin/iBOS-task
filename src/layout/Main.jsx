import { Outlet } from "react-router-dom"
import Footer from "../pages/shared/footer/Footer"
import Navbar from "../pages/shared/navbar/Navbar"


const Main = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Main