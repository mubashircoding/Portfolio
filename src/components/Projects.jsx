import React, { useState, useEffect } from "react";
import { projectsData } from "../data";
import { projectsNav } from "../data";
import Project from "./Project";
const Projects = () => {
  const [Item, setItem] = useState({ name: "all" });
  const [project, setProject] = useState([]);
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (Item.name === "all") {
      setProject(projectsData);
    } else {
      const newProject = projectsData.filter((project) => {
        return project.category.toLocaleLowerCase() === Item.name;
      });
      setProject(newProject);
    }
  }, [Item]);
  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };
  return (
    <section>
      <nav className="mb-12 max-w-xl mx-auto">
        <ul className="flex flex-col md:flex-row justify-evenly items-center text-white">
          {projectsNav.map((items, index) => {
            return (
              <li
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${
                  active === index ? "active" : ""
                } cursor-pointer capitalize m-4`}
                key={index}
              >
                {items.name}
              </li>
            );
          })}
        </ul>
      </nav>
      <section className="grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8">
        {project.map((item) => {
          return <Project item={item} key={item.id} />;
        })}
      </section>
    </section>
  );
};

export default Projects;
