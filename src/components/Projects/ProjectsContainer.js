import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faShieldCat, faSeedling, faUniversalAccess } from '@fortawesome/free-solid-svg-icons'
import styles from "./Projects.module.css"

const projects = [
  {
    icon: faBurger,
    name: 'Porto Burger',
    href: ' https://ariel-gonzaguer.github.io/Port-O-Burger/',
    text: `Port-O-Burger 🍔
    This is a fictional project about a vegan burger restaurant called Port-O-Burger, created as an internship in Front End Development learning. I've used HTML, CSS, and a bit of vanilla JavaScript.`
  },

  {
    icon: faShieldCat,
    name: 'Michi Cards',
    href: 'https://michicards.netlify.app/',
    text: `Michi Cards, Create Your Own Cat Cards Collection!`
  },

  // {
  //   icon: faSeedling,
  //   name: 'PlantAPP',
  //   href: '#',
  //   text: `PlantAPP 🌱`
  // },

  // {
  //   icon: faUniversalAccess,
  //   name: 'Accesibilidad',
  //   href: 'https://starter-kit-accessibility.netlify.app',
  //   text: `Accesibilidad, A web page that shows the accessibility of a website.`
  // }
];

export default function ProjectsContainer() {
  // código para slider automático:
  // const [currentProject, setCurrentProject] = useState(0);
  // const src = imgProjects[currentProject]['src'];
  // const name = imgProjects[currentProject]['name'];
  // const href = imgProjects[currentProject]['href'];

  // useEffect(() => {
  //   const intervalId = setInterval(() => {

  //     setCurrentProject(prevProject => {
  //       const nextProject = prevProject + 1;
  //       return nextProject % imgProjects.length;
  //     });
  //   }, 5000)
  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <section className={`${styles.projectsSection} ${styles.slideInFwdCenter}`}>
      <h2>Check out my favorites projects</h2>
      <p>(more comming)</p>
      <div className={styles.vento}>
        {
          projects.map((project, index) => (
            <div className={styles.projectDiv} key={index}>
              <a aria-label='link' href={project.href} target="_blank" rel="noreferrer" className={styles.projectLink}>
                <FontAwesomeIcon icon={project.icon} src={project.src} alt={project.text} className={styles.projectIcon} />
              </a>
              <h2>{project.name}</h2>
            </div>
          ))
        }
      </div>
    </section>

    // <section id="projects">
    //   <SliderAuto src={src} name={name} href={href} rel="noreferrer"/>
    // </section>
  )
}
