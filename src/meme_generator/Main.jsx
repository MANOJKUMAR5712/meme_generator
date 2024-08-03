import { useState } from "react";
import memes_data from "./memes_data.jsx";

function Main(){
    let [memeimg,setImage] = useState("https://im.indiatimes.in/facebook/2014/Sep/modi-kfc-meme_1411510375_1411510395.jpg?w=1200&h=900&cc=1&webp=1&q=75");
    let [toptext,setTop] = useState("hamara desh mein");
    let [bottomtext,setBottom] = useState("kuch kuch hota hai");

    function randomimg(){
        const meme = memes_data.data.memes
        const random_index = Math.floor(Math.random() * meme.length);
        console.log(random_index);
        const meme_display = meme[random_index].url;
        console.log(meme_display);
        return meme_display;
    }

    function handleImage(){
        setTop(prevtext => prevtext = document.getElementById("top_text").value);
        setBottom(prevtext => prevtext = document.getElementById("bottom_text").value);
        setImage(randomimg());
    }
    
    return(
        <div id="Main">
            <form action="onclick" className="form">
            <div id="inp_div">
            <input type="text" id="top_text" placeholder="top text"></input>
            <input type="text" id="bottom_text" placeholder="bottom text"></input>
            </div>
            </form>
            <div id="submit_btn" >
            <button type="submit" id="get_meme" onClick={handleImage}>Get new meme 🖼️</button>
            </div>
            <div id="img">
                <h2 id="top">{toptext}</h2>
                <img src={memeimg} id="meme_img" width="800px" height="400px"></img>
                <h2 id="bottom">{bottomtext}</h2>
            </div>
        </div>
    )
}

export default Main