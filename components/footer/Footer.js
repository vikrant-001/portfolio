import Image from "next/image"
import html from '../../asset/html.png';
import heart from '../../asset/heart.jpeg'
import react from '../../asset/react.png';
import classes from './footer.module.css'
const Footer = () => {
  return (
    <div className={classes.cont}>
        <div className={classes.main}>
            <h1>Get In Touch</h1>
            <p>I'm currently looking for full-time React Developer/Frontend Developer opportunities! If you know of any positions available, if you</p>
            <p>have any questions, or if you just want to say hi, please feel free to email me at, abc@gmail.com.</p>
            <div className={classes.para}>
                <p> <Image src={html} alt="html" height={20} width={20}/> with <Image src={heart} alt="heart" height={20} width={20}/>   by <span>Vikrant Mishra </span> using <Image src={react} alt="react" height={20} width={20}/></p>
            </div>
        </div>
    </div>
  )
}
export default Footer