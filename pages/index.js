import classes from './index.module.css';
import Intro from '../components/Intro/Name';
import Aboutme from '../components/Aboutme/Aboutme';
import Experience from '../components/experinces/Experience';
import Project from '../components/project/Project';
import LeaderShip from '../components/LeaderShip/LeaderShip';
import Link from 'next/link';
import Skills from '../components/Skills/Skills';
import Footer from '../components/footer/Footer';
export default function Page() {
    return <div className={classes.main}>
        {/* nav bar for navigation */}
        <nav className={classes.navbar}>
            <p><Link className={classes.linksc} href="#intro">{`<vikrant/>`}</Link></p>
            <p> <Link className={classes.linksc} href='#proj'>Projects</Link></p>
            <p> <Link className={classes.linksc} href='#res'>Resume</Link></p>
            <p><Link className={classes.linksc} href='#about'>About</Link></p>
            <p><Link className={classes.linksc} href='#skill'>Skills</Link></p>
        </nav>

        <div id='intro'>
            <Intro/>
        </div>
        <div id='about'>
            <Aboutme/>
        </div>

        <div id = 'exp'>
            <Experience/>
        </div>

        <div id='proj'>
           <Project/> 
        </div>

        <div >
            <LeaderShip/>
        </div>
        <div id='skill'>
            <Skills/>
        </div>

        <div>
            <Footer/>
        </div>
        
    </div>
  }