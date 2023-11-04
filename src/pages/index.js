import { useEffect, useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import HomeSection from '@/components/HomeSection';
import ProjectSection from '@/components/ProjectSection';
import ContactSection from '@/components/contactSection';
import ExperianceSection from '@/components/experianceSection';


export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experianceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    projects: projectsRef,
    contact: contactRef
  };

  useEffect(() => {
    const handleScroll = () => {
      const { home, about, experiance, projects, contact } = sectionRefs;

      if (window.scrollY >= contact.current.offsetTop - 134) {
        setActiveSection('contact');
      } else if (window.scrollY >= projects.current.offsetTop - 134) {
        setActiveSection('projects');
      } else if (window.scrollY >= about.current.offsetTop - 134) {
        setActiveSection('about');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Navbar activeSection={activeSection} sectionRefs={sectionRefs} />
      <HomeSection ref={homeRef} sectionRefs={sectionRefs} />
      <AboutSection ref={aboutRef} />
      <ProjectSection ref={projectsRef} />
      <ContactSection ref={contactRef} />
    </div>
  );
}
