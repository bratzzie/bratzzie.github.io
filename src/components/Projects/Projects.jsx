import React from "react";

import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <div className={styles.horizontalContainer}>
        <h2 className={styles.title}>Projects</h2>
        <img
          src={getImageUrl("projects/angleBracketsImage.png")}
          alt="Angle backets image"
          className={styles.bracketsImg}
        />
      </div>

      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
