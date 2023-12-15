import classes from './tech.module.css'
const Tech = () => {
  return (
    <div className={classes.maincnt}>
    {/* side1 */}
        <div className={classes.cont1}>
            <div>
                <p>Goal-Oriented</p>
                <div className={classes.datashow1}></div>
            </div>
            <div>
                <p>Collaboration</p>
                <div className={classes.datashow2}></div>
            </div>
            <div>
                <p>Positivity</p>
                <div className={classes.datashow1}></div>
            </div>
            <div>
                <p>Adaptability</p>
                <div className={classes.datashow2}></div>
            </div>
        </div>
    {/* side 2 */}
        <div className={classes.cont2}>
            <div>
                <p>Problem Solving</p>
                <div className={classes.datashow1}></div>
            </div>
            <div>
                <p>Empathy</p>
                <div className={classes.datashow2}></div>
            </div>
            <div>
                <p>Organization</p>
                <div className={classes.datashow2} ></div>
            </div>
            <div>
                <p>Creativity</p>
                <div className={classes.datashow1}></div>
            </div>
        </div>
    </div>
  )
}

export default Tech