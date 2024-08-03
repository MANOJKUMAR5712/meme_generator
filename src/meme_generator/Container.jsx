import Navbar from "./Navbar";
import Main from "./Main.jsx"

function Container(){
    return(
        <div id="cont">
        <Navbar 
        img = {"/images/nav_img.png"}
        />
        <Main/>
        </div>
    )
}

export default Container