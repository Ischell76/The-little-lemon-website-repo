import {Link} from "react-router-dom"
function HomePage() {
    return(
        <main className="hero">
            <h1>Welcome to Little Lemon</h1>
            <p>Family-owned Mediterranean restaurant with a modern twist.</p>
            <Link to="/reservation" classname="cta">Reserve A Table</Link>
        </main>
    )
}