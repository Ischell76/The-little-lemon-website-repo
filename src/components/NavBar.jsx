import {Link} from "react-router-dom"

function NavBar (){
    return(
        <nav classname="navbar">
            <h2 className="Logo">🍋 Little Lemon</h2>
            <div>
                <Link to="/">Home</Link>
                <Link to="reservation" classname="btn">Reserve A Table</Link>
            </div>
        </nav>
    )
}
export default NavBar;