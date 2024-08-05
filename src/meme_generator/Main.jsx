import { useState } from "react";
import memes_data from "./memes_data.jsx";

function Main(){
    let [memeimg,setImage] = useState("https://im.indiatimes.in/facebook/2014/Sep/modi-kfc-meme_1411510375_1411510395.jpg?w=1200&h=900&cc=1&webp=1&q=75");
    let [text,setText] = useState({top_text:"hamara desh mein" , bottom_text:"kuch kuch hota hai"});
    //sample//

    function randomimg(){
        const meme = memes_data.data.memes
        const random_index = Math.floor(Math.random() * meme.length);
        const meme_display = meme[random_index].url;
        return meme_display;
    }

    function handleText(event){
        setText(prevtext => {
            return {...prevtext,[event.target.id] : `${event.target.value}` }
        })
    }

    function handleImage(){
        setImage(randomimg());
    }
    
    return(
        <div id="Main">
            <form action="onclick" className="form">
            <div id="inp_div">
            <input type="text" id="top_text" placeholder="top text" name="top_text" onChange={handleText}></input>
            <input type="text" id="bottom_text" placeholder="bottom text" name="bottom_text" onChange={handleText}></input>
            </div>
            </form>
            <div id="submit_btn" >
            <button type="submit" id="get_meme" onClick={handleImage}>Get new meme 🖼️</button>
            </div>
            <div id="img">
                <h2 id="top">{text.top_text}</h2>
                <img src={memeimg} id="meme_img" width="800px" height="400px"></img>
                <h2 id="bottom">{text.bottom_text}</h2>
            </div>
        </div>
    )
}

export default Main