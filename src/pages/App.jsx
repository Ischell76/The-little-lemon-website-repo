import {Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import ReservationForm from "./components/ReservationForm"
import CheckoutPage from "./pages/CheckoutPage"
import HomePage from "./pages/HomePage"
import ReservationPage from "./pages/ReservationPage"

function App () {
    return (
    <div>
        <NavBar />
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="reservation" element={<ReservationPage/>} />
            <Route path="checkout" element={<CheckoutPage/>} />
        </Routes>
        <Footer />
    </div>
    )
}
export default App;