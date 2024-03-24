import React, { useState, useEffect } from "react";
import SliderAuto from "./SliderAuto"
import portoBurger from "./imgs/portoBig.png"
import michiCards from "./imgs/michiCards.png"
import plantAPP from "./imgs/plantAPP.jpg"

const imgProjects = [
  {
    src: portoBurger,
    name: 'Porto Burger',
    href: 'https://diosdenada.github.io/Port-O-Burger/'
  },

  {
    src: michiCards,
    name: 'Michi Cards',
    href: 'https://diosdenada.github.io/michiCards/'
  },

  {
    src: plantAPP,
    name: 'PlantAPP',
    href: 'https://diosdenada.github.io/PlantAPP'
  }
];

export default function ProjectsContainer() {
  const [currentProject, setCurrentProject] = useState(0);
  const src = imgProjects[currentProject]['src'];
  const name = imgProjects[currentProject]['name'];
  const href = imgProjects[currentProject]['href'];

  useEffect(() => {
    const intervalId = setInterval(() => {

      setCurrentProject(prevProject => {
        const nextProject = prevProject + 1;
        return nextProject % imgProjects.length;
      });
    }, 5000)
    return () => clearInterval(intervalId);
  }, []);


  return (
    <section id="projects">
      <SliderAuto src={src} name={name} href={href} rel="noreferrer"/>
    </section>
  );
}
