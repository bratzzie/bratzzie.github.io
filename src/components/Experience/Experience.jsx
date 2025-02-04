import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <div className={styles.horizontalContainer}>
        <h2 className={styles.title}>Experience</h2>
        <img
          src={getImageUrl("experience/flowerImage.png")}
          alt="Flower image"
          className={styles.flowerImg}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.box}>
          <h3>Education</h3>
          <hr className={styles.solidLine} />
          <div className={styles.content}>
            <div className={styles.box}>
              <p>09.2024 - 04.2025</p>
              <p>09.2020 - 06.2024</p>
              <p>2009 - 2020</p>
            </div>
            <div className={styles.bigBox}>
              <p>Baumann Bildung & Qualifizierung in Berlin</p>
              <p>National Aviation University in Kyiv (Ukraine)</p>
              <p>Gymnasium 31 in Saporizhzhia (Ukraine)</p>
            </div>
          </div>

          <h3>Professional Experience</h3>
          <hr className={styles.solidLine} />
          <div className={styles.content}>
            <div className={styles.box}>
              <p>04.2022 - 06.2024</p>
            </div>
            <div className={styles.box}>
              <p>Junior Software Developer at LOWTeq GmbH</p>
              <p className={styles.smallShrift}>
                - Migrated a PDMS report system.
                <br />
                - Developed HL7-compliant drivers for medication devices.
                <br />
                - Implemented REST API support for certain key fields in the web
                administration.
                <br />
                - Resolved some protocol connection issues.
                <br />- Contributed to the updated design of PDMS medical forms.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.box}>
          <h3>Languages</h3>
          <hr className={styles.solidLine} />
          <p>English - Advanced</p>
          <p>German - Intermediate</p>
          <p>Ukrainian - Native</p>
          <h3>Programming Skills and Technologies Knowledge</h3>
          <hr className={styles.solidLine} />
          <div className={styles.skills}>
            {skills.map((skill, id) => {
              return (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img
                      className={styles.skillImage}
                      src={getImageUrl(skill.imageSrc)}
                      alt={skill.title}
                    />
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
