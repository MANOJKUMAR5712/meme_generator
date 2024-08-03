function Navbar(props){
    return(
        <div id="navbar">
        <img src={props.img} id="nav_img"></img>
        <h2 id="title">Meme generator</h2>
        <p id="nav_text">react course project - 3</p>
        </div>
    )
}

export default Navbar