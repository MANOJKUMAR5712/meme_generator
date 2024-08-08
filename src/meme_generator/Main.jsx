import { useState } from "react";
import memes_data from "./memes_data.jsx";

function Main(){
    let [memeimg,setImage] = useState("https://upload.wikimedia.org/wikipedia/en/1/11/Disaster_Girl.jpg");
    let [text,setText] = useState({top_text:"Hello" , bottom_text:"Gaich"});

    function randomimg(){
        const meme = memes_data.data.memes
        const random_index = Math.floor(Math.random() * meme.length);
        return meme[random_index].url;
    }

    function handleText(event){
        const {name,value,type} = event.target;
        setText(prevtext => {
            return {...prevtext,[name] : value }
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        setImage(randomimg());
        console.log(text);
    }
    
    return(
        <div id="Main">
            <form className="form" onSubmit={handleSubmit}>
            <div id="inp_div">
            <input type="text" id="top_text" placeholder="top text" name="top_text" onChange={handleText} value ={text.top_text}></input>
            <input type="text" id="bottom_text" placeholder="bottom text" name="bottom_text" onChange={handleText} value={text.bottom_text}></input>
            </div>
            <div id="submit_btn" >
            <button type="submit" id="get_meme">Get new meme 🖼️</button>
            </div>
            </form>
            <div id="img">
                <h2 id="top">{text.top_text}</h2>
                <img src={memeimg} id="meme_img" width="800px" height="400px"></img>
                <h2 id="bottom">{text.bottom_text}</h2>
            </div>
        </div>
    )
}

export default Main