import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";
import * as ReactTooltip from "react-tooltip";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const items = [
    "Design application architectures that are scalable and performance efficient. Used popular React workflows (such as Redux).",
    "Build pixel-perfect, buttery-smooth UIs across both web and mobile platforms.",
    "Integration with APIs and third-party services like Stripe, Algolia, Sendbird, and Onesignal",
    "Designing the database schema for the project and developing RestAPIs from scratch.",
    "Deployment on Testflight.",
  ];
  const items1 = [
    "Implementing basic functionality and features for the application.",
    "Engaged in tasks related to bug fixes and improving application performance.",
    "Build responsive UIs across both android and ios platforms.",
    "Gained hands-on experience with Git, managing repositories and collaborating effectively.",
  ];

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        Experiences <span>& </span>Skills
      </h2>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__skill-portfolio"
      >
        <div className="app__skill-item app__flex">
          <div className="app__skill-content app__flex">
            <p
              style={{
                fontSize: 17,
                fontWeight: "bold",
              }}
            >
              React Native Developer
            </p>

            <p
              style={{
                marginTop: 10,
                fontWeight: "bold",
                fontSize: 12,
              }}
            >
              <span style={{ color: "#313bac", fontSize: 16 }}> BXTrack </span>
              (July 2021 - Aug 2023)
            </p>
          </div>
          <p
            style={{
              alignSelf: "flex-start",
              marginTop: 10,
              marginBottom: 5,
              fontSize: 15,
            }}
          >
            Roles and Responsibilities:
          </p>
          <div
            style={{
              alignSelf: "flex-start",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              paddingLeft: 20,
            }}
          >
            <ul className="myList">
              {items.map((item, index) => (
                <li key={index}>
                  <p className="p-text">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="app__skill-item app__flex">
          <div className="app__skill-content app__flex">
            <p
              style={{
                fontSize: 17,
                fontWeight: "bold",
              }}
            >
              Frontend Developer (Internship)
            </p>
            <p
              style={{
                marginTop: 10,
                fontWeight: "bold",
                fontSize: 12,
              }}
            >
              <span style={{ color: "#313bac", fontSize: 16 }}>
                {" "}
                Stackone (Pvt) Ltd{" "}
              </span>
              (Jan 2021 - June 2021)
            </p>
          </div>
          <p
            style={{
              alignSelf: "flex-start",
              marginTop: 10,
              marginBottom: 5,
              fontSize: 15,
            }}
          >
            Roles and Responsibilities:
          </p>
          <div
            style={{
              alignSelf: "flex-start",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              paddingLeft: 20,
            }}
          >
            <ul className="myList">
              {items1.map((item, index) => (
                <li key={index}>
                  <p className="p-text">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
      <motion.div className="app__skill_list">
        {skills.map((skill) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            key={skill.name}
          >
            <div
              className="app__flex"
              style={{ backgroundColor: skill.bgColor }}
            >
              <img src={urlFor(skill.icon)} alt={skill.name} />
            </div>
            <p className="p-text">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
