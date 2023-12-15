import classes from './experience.module.css';
import Image from 'next/image';
import spi from '../../asset/simpana.png';
import vendify from '../../asset/vendify.png';
const Experience = () => {
  return (
    <div className={classes.expcont}>
        <div>
            <h1>Experiences</h1>
        </div>
        <div className={classes.cards}>
            <div>
                <Image src={vendify}  alt='company name'/>
                <p>Senior Software Engineer</p>
                <p>May 2022 – Present</p>
            </div>
            <div>
                <Image src={spi} alt='company name'/>
                <p>React Developer</p>
                <p>Aug 2020 – May 2022</p>
            </div>
        </div>
    </div>
  )
}

export default Experience