import React,{useState} from "react";

import "./gallery.css";

import {GrClose} from "react-icons/gr";

import heme1 from './img/Flowers/hemerocallis/heme1.jpg'
import heme2 from './img/Flowers/hemerocallis/heme2.jpg'
import heme3 from './img/Flowers/hemerocallis/heme3.jpeg'

import heme4 from './img/Flowers/hemerocallis/heme4.jpeg'



  
const Hemerocallis = () => {

    let data = [
        {
            id: 1,
            imgSrc: heme1,
        },
        {
            id: 2,
            imgSrc: heme2,
        },
        {
            id:4,
            imgSrc: heme4,
        }    

    ]
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState("");
    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return(
        <>
        <div className={model? "model open" : "model"}>
            <img src={tempimgSrc}></img>
            <GrClose onClick={() => setModel(false)}/>
        </div>
        <div className="gallery">
            {data.map((item, index)=>{
                return(
                    <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                        <img src ={item.imgSrc} style={{width: "100%"}}/>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Hemerocallis;