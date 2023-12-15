import linked from '../../asset/linkedin.png';
import insta from '../../asset/intaicon.jpg';
import face from '../../asset/fc.png';
import git from '../../asset/git.png';
import Image from 'next/image';
import classes from './Name.module.css';
const Intro = () => {
  return (
    <div className={classes.intro}>
      <div className={classes.name}>
        <h1>Vikrant Mishra</h1>
        <p>Passionate about changing the world with technology.</p>
      </div>

      <div className={classes.imAg}>
        <Image src={linked} alt='linkedIn' height={43} width={43}/>
        <Image src={insta} alt='inta' height={43} width={43}/>
        <Image src={face} alt='facebook' height={43} width={43}/>
        <Image src={git} alt='gitHub' height={43} width={43}/>
      </div>
      <div className={classes.morebtn}>
        More about me
      </div>
    </div>
  )
}

export default Intro