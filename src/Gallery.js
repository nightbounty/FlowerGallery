import React,{useState} from "react";

import "./gallery.css";

import {GrClose} from "react-icons/gr";

import jardin from "./img/jardin.jpeg"
import aster1 from "./img/aster1.png"
import aster2 from "./img/aster2.png"
import Hémérocalle from "./img/Hémérocalle.png"
import phlox from "./img/phlox.png"
import pivoineblanc from "./img/pivoineblanc.png"
import pivoinerose from "./img/pivoinerose.png"
import rosiers from "./img/rosiers.png"
import rosiersjaune from "./img/rosiersjaune.png"





  
const Gallery = () => {

    let data = [
        {
            id: 1,
            imgSrc: jardin,
        },

        {
            id: 3,
            imgSrc: aster2,
        },
        {
            id: 4,
            imgSrc: Hémérocalle,
        },
        {
            id: 5,
            imgSrc: phlox,
        },
        {
            id: 6,
            imgSrc: pivoineblanc,
        },
        {
            id: 7,
            imgSrc: pivoinerose,
        },
        {
            id: 8,
            imgSrc: rosiers,
        },
        {
            id: 9,
            imgSrc: rosiersjaune,
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

export default Gallery;