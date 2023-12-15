import Tech from './types/Tech'
import Soft from './types/Soft'
import classes from './skill.module.css'
import { useState } from 'react'
const Skills = () => {
  const [skills ,setSkills] = useState(false);
  const techHandler = () => {
    setSkills(true);
  }
  const softHandler = () => {
    setSkills(false);
  }
  return (
    <div className={classes.main}>
        <div>
            <h1>Skills</h1>
        </div>
        <div className={classes.btn}>
          <button onClick={techHandler}>Technical Skills</button>
          <button onClick={softHandler}> Soft Skills</button>
        </div>
        {
          skills ? <Tech/> : <Soft/>
        }

    </div>
  )
}

export default Skills