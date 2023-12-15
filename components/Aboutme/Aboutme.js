import Image from "next/image"
import myimg from '../../asset/codeer.png';
import classes from './aboutme.module.css';
const Aboutme = () => {
  return (
    <div className={classes.about}>
        <div className={classes.myimg}>
            <Image src={myimg} alt="mydemoimg" height={350} width={350}/>
        </div>
        <div className={classes.myintro}>
            <h2>About Me</h2>
            <p>My name is Vikrant. I’m a graduate of 2022 from NPU University at Palamu with a degree in Bachelor of Science (Mathmetics) . I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.</p>
            <button>Resume</button>
        </div>
        
    </div>
  )
}

export default Aboutme