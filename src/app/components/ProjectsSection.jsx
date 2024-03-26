"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Obstacle Avoidance Web Application",
    description: "Obstacle avoidance, Best route/direction finding",
    image: "/images/portfolio/web_direction_1.png",
    tag: ["All", "Web"]
    // gitUrl: "/",
    // previewUrl: "/"
  },
  {
    id: 2,
    title: "Disaster & Weather Monitoring Web Map",
    description: "temperature, pressure, wind, etc real-time monitoring",
    image: "/images/portfolio/web_monitoring.png",
    tag: ["All", "Web"]
    // gitUrl: "/",
    // previewUrl: "/"
  },
  {
    id: 3,
    title: "Weather App",
    description: "daily and weekly weather ",
    image: "/images/portfolio/WeatherApp.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ffferncake/weather-app",
    previewUrl: "https://weather-fern.netlify.app"
  },
  {
    id: 4,
    title: "glTFmodelViewer",
    description: "glTF models viewer",
    image: "/images/portfolio/glTFmodelViewer.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ffferncake/gltf-visualization-app",
    previewUrl: "https://gltf-visualization-fern.netlify.app"
  },
  {
    id: 5,
    title: "Forest mobile application",
    description:
      "An app that checks the area or location of protected forests and checks for overlapping forests",
    image: "/images/portfolio/forest_mobile.png",
    tag: ["All", "Mobile"]
    // gitUrl: "/",
    // previewUrl: "/"
  },
  {
    id: 6,
    title: "Monitoring working status mobile application",
    description: "Real-time working status monitoring ",
    image: "/images/portfolio/mwa_mobile.png",
    tag: ["All", "Mobile"]
    // gitUrl: "/",
    // previewUrl: "/"
  },
  {
    id: 7,
    title: "Beer3D Mock-up",
    description: "3D Beer Mock-up",
    image: "/images/portfolio/Beer3D.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ffferncake/3D-Beer",
    previewUrl: "https://3d-beer-fern.netlify.app"
  },
  {
    id: 8,
    title: "University Map",
    description: "Kasetsart University map and building information",
    image: "/images/portfolio/KU_webmap_1.png",
    tag: ["All", "Web"]
    // gitUrl: "/",
    // previewUrl: "/"
  },
  {
    id: 9,
    title: "Fire Hotspot check application",
    description: "checking and filtering fire hotspot information",
    image: "/images/portfolio/hotspot_check_1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ffferncake/fire-hotspot-check"
    // previewUrl: "/"
  },
  {
    id: 10,
    title: "direction app design",
    description: "",
    image: "/images/portfolio/web_direction_design.png",
    tag: ["All", "Design"]
    // gitUrl: "/",
    // previewUrl: "/"
  },
  {
    id: 11,
    title: "monitoring app design (1)",
    description: "",
    image: "/images/portfolio/web_monitoring_design_1.png",
    tag: ["All", "Design"]
    // gitUrl: "/",
    // previewUrl: "/"
  },
  {
    id: 12,
    title: "monitoring app design (2)",
    description: "",
    image: "/images/portfolio/web_monitoring_design_2.png",
    tag: ["All", "Design"]
    // gitUrl: "/",
    // previewUrl: "/"
  },
  {
    id: 13,
    title: "web service (api) design",
    description: "",
    image: "/images/portfolio/api_service_design.png",
    tag: ["All", "Design"]
    // gitUrl: "/",
    // previewUrl: "/"
  },
  {
    id: 14,
    title: "Web Portfolio",
    description: "My portfolio website",
    image: "/images/portfolio/web_port_v1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ffferncake/ffferncake-webport",
    previewUrl: "https://ferncake.netlify.app/"
  },
  {
    id: 15,
    title: "Baram Travel Agency",
    description: "Mock-up travel agency website design",
    image: "/images/portfolio/Baram_design.png",
    tag: ["All", "Design"],
    // gitUrl: "https://github.com/ffferncake/ffferncake-webport",
    previewUrl:
      "https://www.figma.com/file/nM9qKrxwrmxnX1GCUUxPp8/travel-app-design"
  },
  {
    id: 16,
    title: "Ah-Chim Cofee Shop UI",
    description: "Coffee Shop Design",
    image: "/images/portfolio/Ah-ChimCoffeeShop.png",
    tag: ["All", "Design"],
    // gitUrl: "https://github.com/ffferncake/ffferncake-webport",
    previewUrl:
      "https://www.figma.com/proto/mG1JDAtrenAyoRgBBP4bIO/%EC%95%84%EC%B9%A8-Coffee-Shop-App-UI?type=design&node-id=11-2&t=UguZ5O5wQtZL3uWV-1&scaling=scale-down&page-id=0%3A1&mode=design"
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {/* <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        /> */}
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Design"
          isSelected={tag === "Design"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl ? project.gitUrl : null}
              previewUrl={project.previewUrl ? project.previewUrl : null}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
