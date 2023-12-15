import Card from "./Card"
import classes from './project.module.css';
const data = [
  {
    id:1,
    name:'E-commerece-Website',
    links:'https://github.com/vikrant-001/E-commerece-Website',
    date:'Updated on Aug 29 ,2023'
  },

  {
    id:2,
    name:'-Restaurant_Website',
    links:'https://github.com/vikrant-001/-Restaurant_Website',
    date:'Updated on Aug 20 ,2023'
  },

  {
    id:3,
    name:'Expence-Tracker-React',
    links:'https://github.com/vikrant-001/Expence-Tracker-React',
    date:'Updated on Sept 7 ,2023'
  },

  {
    id:4,
    name:'Mail-box',
    links:'https://github.com/vikrant-001/mail-box',
    date:'Updated on Sept 13 ,2023'
  },

]
const Project = () => {
  return (
    <>
    <h1 className={classes.head}> Recent Projects </h1>
    <div className={classes.sys}>
      {
        data.map((value) => (
          <Card key = {value.id} name = {value.name} links={value.links} date={value.date}/>
        ))
      }
    </div>
    </>
  )
  
}

export default Project