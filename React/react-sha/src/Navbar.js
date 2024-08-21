import Blog1 from "./Blog1";
import Blog2 from "./Blog2";
import Footer from "./Footer";
import StateHook from "./stateHook";

const Navbar = () => {
    return ( 
        <div>
        <ul className="nav">
            <li><h1 className="title">My Blog</h1></li>
            <li id="login">
                <a href="/" className="link">Home</a>
                <a href="/" className="link">About</a>
                <a href="/" className="link">Login</a>
                <a href="/" className="link">Blogs</a>
                <a href="/" className="link">Author</a>
            </li>            
        </ul>
        <Blog1 />
        <Blog2 />
        <StateHook />
        <Footer />
        </div>
    );
}

export default Navbar;