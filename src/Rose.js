import React,{useState} from "react";

import "./gallery.css";

import {GrClose} from "react-icons/gr";

import rose1 from './img/Flowers/rose/rose1.jpg'
import rose2 from './img/Flowers/rose/rose2.jpg'
import rose3 from './img/Flowers/rose/rose3.jpg'
import rose4 from './img/Flowers/rose/rose4.jpg'
import rose5 from './img/Flowers/rose/rose5.jpg'
import rose6 from './img/Flowers/rose/rose6.jpg'
import rose7 from './img/Flowers/rose/rose7.jpg'
import rose8 from './img/Flowers/rose/rose8.jpg'
import rose9 from './img/Flowers/rose/rose9.jpg'
import rose10 from './img/Flowers/rose/rose10.jpg'
import rose11 from './img/Flowers/rose/rose11.jpg'
import rose12 from './img/Flowers/rose/rose12.jpg'




  
const Rose = () => {

    let data = [
        {
            id: 1,
            imgSrc: rose1,
        },
        {
            id: 2,
            imgSrc: rose2,
        },        {
            id: 3,
            imgSrc: rose3,
        },        {
            id: 4,
            imgSrc: rose4,
        },        {
            id: 5,
            imgSrc: rose5,
        },        {
            id: 6,
            imgSrc: rose6,
        },        {
            id: 7,
            imgSrc: rose7,
        },        {
            id: 8,
            imgSrc: rose8,
        },        {
            id: 9,
            imgSrc: rose9,
        },        {
            id: 10,
            imgSrc: rose10,
        },        {
            id: 11,
            imgSrc: rose11,
        },  
        {
            id: 12,
            imgSrc: rose12,
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

export default Rose;