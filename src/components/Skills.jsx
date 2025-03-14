import { useEffect, useRef } from 'react';
import '@styles/Skills.css';
import { frontendSkills, backendSkills, toolsSkills } from '../assets/skills.json';
import RenderIcon from '../hooks/RenderIcon';

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const currentRef = skillsRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Ma Stack</h2>
      <div className="skills-content" ref={skillsRef}>
        <div className="skills-description">
          <p>
            J'ai acquis une variété de compétences techniques au cours de mon parcours, me permettant de mener à bien
            des projets de bout en bout, de la conception à la mise en production.
          </p>
        </div>

        <div className="skills-grid">
          <div className="skills-category">
            <h3>Frontend</h3>
            <div className="skills-list">
              {frontendSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-icon">{RenderIcon(skill, '36px')}</div>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>Backend</h3>
            <div className="skills-list">
              {backendSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-icon">{RenderIcon(skill, '36px')}</div>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>Outils & Autres</h3>
            <div className="skills-list">
              {toolsSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-icon">{RenderIcon(skill, '36px')}</div>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
