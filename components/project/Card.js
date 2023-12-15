import Image from "next/image";
import git from '../../asset/git.png';
import classes from './card.module.css';
import Link from "next/link";
const Card = (props) => {
  return (
    <div className={classes.cartcont}>
      <div className={classes.proname}>
        <p>{props.name}</p>
      </div>

      <div className={classes.btncont}>
        <Link className={classes.wordndicon} href={props.links}>
          <Image src={git} alt="icon" height={20} width={20}/>
          <p>Clone Project</p>
        </Link>
        <Link className={classes.wordndicon} href={props.links}>
        <Image src={git} alt="icon" height={20} width={20}/>
          <p>Repo</p>
        </Link>
      </div>
      <hr/>

      <div className={classes.lang}>
        <p>Languages:</p>
        <p>Javascript:51%</p>
        <p>CSS:10%</p>
        <p>HTML:3%</p>
      </div>

      <div className={classes.botm}>
        <Link className={classes.wordndicon} href={props.links}>
          <Image src={git} alt="icon" height={20} width={20}/>
          <p>Stars</p>
        </Link>
        <div>{props.date}</div>
      </div>

    </div>
  )
}

export default Card