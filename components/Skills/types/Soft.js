import classes from './soft.module.css';
const Soft = () => {
  return (
    <div className={classes.maincnt}>
    {/* side1 */}
        <div className={classes.cont1}>
            <div>
                <p>React</p>
                <div className={classes.datashow1}></div>
            </div>
            <div>
                <p>JavaScript</p>
                <div className={classes.datashow2}></div>
            </div>
            <div>
                <p>Data Structures</p>
                <div className={classes.datashow1}></div>
            </div>
        </div>
    {/* side 2 */}
        <div className={classes.cont2}>
            <div>
                <p>HTML/CSS</p>
                <div className={classes.datashow1}></div>
            </div>
            <div>
                <p>Java C++</p>
                <div className={classes.datashow2}></div>
            </div>
            <div>
                <p>SQL</p>
                <div className={classes.datashow2} ></div>
            </div>
        </div>
    </div>
  )
}

export default Soft