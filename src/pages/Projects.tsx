import React, { useEffect, useState } from 'react';
import './Projects.css';
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaDocker, FaAngular, FaGithub, FaGitlab, FaGoogle, FaJava, FaJenkins, FaMicrosoft, FaPython, FaVuejs, FaDraftingCompass, FaVideo, FaMagic } from 'react-icons/fa';
import { SiRubyonrails, SiPostgresql, SiMongodb, SiMaterialdesign, SiHtml5, SiJquery, SiFirebase, SiTerraform, SiArgo, SiCoreldraw, SiFigma } from 'react-icons/si';
import { Project } from '../types';
import { getProjects } from '../queries';
import { GrDeploy, GrKubernetes } from "react-icons/gr";

const techIcons: { [key: string]: JSX.Element } = {
  "ReactJS": <FaReact />,
  "NodeJS": <FaNodeJs />,
  "AWS": <FaAws />,
  "PostgreSQL": <SiPostgresql />,
  "MongoDB": <SiMongodb />,
  "Ruby On Rails": <SiRubyonrails />,
  "Material UI": <SiMaterialdesign />,
  "HTML5": <SiHtml5 />,
  "CSS3": <SiMaterialdesign />,
  "jQuery": <SiJquery />,
  "AWS-ECS": <FaAws />,
  'Cognito': <FaAws />,
  'Lambda': <FaAws />,
  'ECS': <FaAws />,
  'Jenkins': <FaJenkins />,
  'Docker': <FaDocker />,
  'GraphQL': <FaDatabase />,
  'CI/CD': <FaGitlab />,
  'GitLab': <FaGitlab />,
  'GitHub': <FaGithub />,
  'Heroku': <GrDeploy />,
  'Netlify': <GrDeploy />,
  'Firebase': <SiFirebase />,
  'GCP': <FaGoogle />,
  'Azure': <FaMicrosoft />,
  'Kubernetes': <GrKubernetes />,
  'Terraform': <SiTerraform />,
  'ArgoCD': <SiArgo />,
  'Java': <FaJava />,
  'Spring Boot': <FaJava />,
  'Python': <FaPython />,
  'Node.js': <FaNodeJs />,
  'Express.js': <FaNodeJs />,
  'Hibernate': <FaJava />,
  'Maven': <FaJava />,
  'Gradle': <FaJava />,
  'JUnit': <FaJava />,
  'Mockito': <FaJava />,
  'Jest': <FaReact />,
  'React': <FaReact />,
  'Angular': <FaAngular />,
  'Vue.js': <FaVuejs />,
  'Next.js': <FaReact />,
  'Gatsby': <FaReact />,
  'Nuxt.js': <FaVuejs />,
  'Redux': <FaReact />,
  'Vuex': <FaVuejs />,
  'Tailwind CSS': <SiMaterialdesign />,
  'Bootstrap': <SiMaterialdesign />,
  'JQuery': <SiJquery />,
  'SketchUp Pro': <FaDraftingCompass />,
  'SketchUp': <FaDraftingCompass />,
  'Lumion 10': <FaVideo />,
  'Lumion': <FaVideo />,
  'Adobe': <FaMagic />,
  'Adobe Lightroom': <FaMagic />,
  '3D Modeling': <FaDraftingCompass />,
  'Concept Design': <FaMagic />,
  'Print Design': <FaMagic />,
  'Branding': <SiCoreldraw />,
  'Interior Design': <FaDraftingCompass />,
};


const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([])
  
  useEffect(() => { 
    async function fetchProjects() {
      const data = await getProjects();
      setProjects(data);
    }
    
    fetchProjects()
  }, [])
  
  if (projects.length === 0) return <div>Loading...</div>;

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            className="project-card"
            href={project.link || 'https://www.behance.net/cyriltawiah'}
            target="_blank"
            rel="noopener noreferrer"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <img src={project.image.url} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.techUsed.split(', ').map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || "🔧"} {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
