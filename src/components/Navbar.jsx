import React from 'react'

function Navbar({ activeSection, sectionRefs }) {
    const scrollToSection = (sectionRef) => {
        if (sectionRef.current) {
            window.scrollTo({
                top: sectionRef.current.offsetTop,
                behavior: 'smooth'
            });
        }
    }
    return (
        <nav className="flex h-36 bg-gradient-to-b from-slate-800 to-black text-white lg:px-20 pt-8  sm: pl-3 justify-between">
            <div id='title' className='h3' >
                Rounald Andrawes
            </div>
            <div className='lg:flex  gap-4 text-lg sm: hidden'>
                <a
                    href='#home'
                    onClick={(e) => { e.preventDefault(); scrollToSection(sectionRefs.home); }}>Home</a>
                <a
                    href='#about'
                    onClick={(e) => { e.preventDefault(); scrollToSection(sectionRefs.about); }}>About</a>
                <a
                    href='#projects'
                    onClick={(e) => { e.preventDefault(); scrollToSection(sectionRefs.projects); }}>Projects</a>
                <a
                    href='#contact'
                    onClick={(e) => { e.preventDefault(); scrollToSection(sectionRefs.contact); }}>Contact</a>
            </div>
        </nav>
    )
}

export default Navbar