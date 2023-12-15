import Image from "next/image";
import left from "../../asset/left.png";
import classes from './leder.module.css'
import right from '../../asset/right.png';
import img1 from '../../asset/leader/IMG1.png'
import img2 from '../../asset/leader/IMG2.png'
import img3 from '../../asset/leader/IMG3.png'
import img4 from '../../asset/leader/IMG4.png'
import img5 from '../../asset/leader/IMG5.png'
import img6 from '../../asset/leader/IMG6.png'
import img7 from '../../asset/leader/IMG7.png'
import { useState } from "react";
const imageLink = [
    {
        id:1,
        imageUrl:img1
    },
    {
        id:2,
        imageUrl:img2
    },
    {
        id:3,
        imageUrl:img3 
    },
    {
        id:4,
        imageUrl:img4
    },

    {
        id:5,
        imageUrl:img5
    },
    {
        id:6,
        imageUrl:img6
    },
    {
        id:7,
        imageUrl:img7
    },
]
const Leader = () => {
    let [i , setI] = useState(0);
    if(i < 0 && i > 7){
        setI(0);
    }
    let val = imageLink[i];
    const lefthandler = () => {
        if(i == 0){
            setI(7);
        }
        else
            i++;
            setI(i);
    }
    const rightHandler = () => {
        if(i === 7){
            setI(0);
        }
        else setI(++i);
    }

    setTimeout(() => {
        if(i < 6)
            setI(++i);
        else{
            setI(0)
        }
    },10000);
  return (
    <div>
        <div className={classes.photo} >
            <Image src={val.imageUrl} alt="img"  height={600} width={600}/>
        </div>
        <div className={classes.icons}>
            <Image src={left} onClick={lefthandler} alt="left" height={30} width={30}/>
            <Image src={right} onClick={rightHandler} alt="right" height={30} width={30}/>
        </div>
    </div>
  )
}

export default Leader
