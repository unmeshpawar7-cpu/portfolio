import React, { useState } from 'react';
import { Code, Cpu, Workflow, Mail, Linkedin, Github, ExternalLink, ChevronRight } from 'lucide-react';
import profilePic from '../src/assets/image.png'
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  const skills = [
    { name: 'Blue Prism', level: 90, color: 'bg-blue-500' },
    { name: 'Tulip', level: 90, color: 'bg-purple-500' },
    { name: 'Python/FastAPI', level: 90, color: 'bg-green-500' },
    { name: 'React', level: 90, color: 'bg-cyan-500' },
    { name: 'Process Automation', level: 95, color: 'bg-indigo-500' },
  ];

  const projects = [

  {
    "title": "Claim Management System",
    "client": "American Insurance Group (AIG)",
    "domain": "Banking",
    "role": "RPA Developer",
    "tech": "Blue Prism, MS Excel VBO, Queue Management, Exception Handling",
    "description": "Worked on designing, developing, and implementing an automated Claim Management System using Blue Prism. Created objects and processes based on SDD, participated in requirement gathering, feasibility analysis, and SDLC activities. Supported deployment, testing, bug fixing, and documentation including ODI, PDI, SDD, and Runbook.",
    "impact": "Improved process efficiency by automating claim workflows, reduced manual effort, enhanced accuracy through exception handling, and supported seamless deployment and production operations."
  },
  {
    "title": "Finance Management Detail Info",
    "client": "Standard Chartered",
    "role": "RPA Developer",
    "tech": "Blue Prism",
    "description": "Analyzed process scope for automation and coordinated with the team to build fully functional Blue Prism processes. Prepared SDD, ODI, and PDI documents, developed automated workflows, executed unit tests, and communicated risks and issues to technical leadership.",
    "impact": "Enhanced financial process automation, improved reliability through structured documentation, and supported stable production deployment and release management."
  }


  ];

  const experiences = [
        {
      role: 'Intern',
      company: 'Aligned Automation',
      period: 'Sep 2025 - Present',
      description: 'Working on TULIP Platform to build the frontline Operations softwares'
    },
    {
      role: 'Jr. RPA Developer',
      company: 'Infotel India',
      period: 'Jan 2025 - Aug 2025',
      description: 'Developing automation solutions using Blue Prism and Tulip platforms. Building process workflows and integrating systems with FastAPI.'
    }
  ];

    const education = [
    
    {
      course: 'MBA in Finance',
      college: 'SYMBIOSYS, PUNE',
      period:"June 2021 - Aug 2023",
      description: 'Specialized in financial analysis and business strategy, providing strong analytical foundation for process optimization.'
    },
    {
      course: 'B.Tech in Mechanical Engineering',
      college: 'DBATU, LONERE',
       period:"June 2018 - Aug 2021",
      description: 'Strong technical and problem-solving foundation, understanding of manufacturing processes and system design.'
    }
  ];

  const certificates=[
    {
        title:"Advance App Building- TULIP",
        provider:"TULIP UNIVERSITY",
        image:"/cert1.png",

    },
    {
        title:"TULIP Essentials Certified",
        provider:"TULIP UNIVERSITY",
        image:"/cert3.png",

    },
    {
        title:"TULIP User Research and App Design",
        provider:"TULIP UNIVERSITY",
        image:"/cert2.png",

    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg border-b border-blue-500/20 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Unmesh Pawar
          </div>
          <div className="flex gap-6">
            {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`hover:text-blue-400 transition-colors ${
                  activeSection === item.toLowerCase() ? 'text-blue-400' : ''
                }`}
                href={'#'+item}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6"  id="Home">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Profile Picture */}
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                  {/* Replace the src below with your actual photo URL */}
                  <img 
                    src={profilePic} 
                    alt="Unmesh Pawar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-12 h-12 rounded-full border-4 border-slate-900 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <span className="text-blue-400 font-semibold">RPA & Automation Specialist</span>
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Unmesh Pawar
              </h1>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl font-semibold text-slate-300">RPA & Automation Developer</span>
              </div>
              <p className="text-xl text-slate-300 mb-4">
                MBA | B.Tech
              </p>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl">
                RPA Developer with expertise in Blue Prism and Tulip platforms, 
                combining technical automation skills with strong business acumen from 
                finance and engineering background. Hands-on experience in creating 
                scalable automation workflows and FastAPI integrations.
              </p>
              <div className="flex gap-4">
                <a href="#Projects" className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center gap-2">
                  View Projects <ChevronRight size={20} />
                </a>
                <a href='#Contact' className="border border-blue-500 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500/10 transition-all">
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          {/* Tech Icons */}
          <div className="flex gap-6 mt-12">
            {[
              { Icon: Cpu, label: 'Blue Prism', color: 'text-blue-400' },
              { Icon: Workflow, label: 'Tulip', color: 'text-purple-400' },
              { Icon: Code, label: 'FastAPI', color: 'text-green-400' }
            ].map(({ Icon, label, color }) => (
              <div key={label} className="flex items-center gap-3 bg-slate-800/50 px-6 py-3 rounded-lg border border-slate-700/50">
                <Icon className={color} size={24} />
                <span className="text-slate-300">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-slate-800/30" id='Skills'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Expertise</h2>
          <div className="grid gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                <div className="flex justify-between mb-3">
                  <span className="text-lg font-semibold">{skill.name}</span>
                  <span className="text-blue-400">{skill.level}%</span>
                </div>
                <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${skill.color} rounded-full transition-all duration-1000`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6" id="Projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all hover:transform hover:scale-105"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <ExternalLink className="text-blue-400" size={20} />
                </div>
                <div className="inline-block bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm mb-3">
                  {project.tech}
                </div>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <div className="flex items-center gap-2 text-green-400">
                  <div className="h-2 w-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm font-semibold">{project.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Certifications Section */}
      <section className="py-20 px-6" id="Projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all hover:transform hover:scale-105"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                  <ExternalLink className="text-blue-400" size={20} />
                </div>
                <div className="inline-block bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm mb-3">
                  {cert.provider}
                </div>
                
                <div className="flex items-center gap-2 text-green-400">
                  <img src={cert.image} className='rounded' alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


     {/* Experience Timeline */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  {idx !== experiences.length - 1 && (
                    <div className="w-0.5 h-full bg-slate-700 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <h3 className="text-xl font-bold text-white mb-2">{exp.role}</h3>
                    <p className="text-purple-400 font-semibold mb-2">{exp.company}</p>
                    <p className="text-blue-400 mb-3">{exp.period}</p>
                    <p className="text-slate-300">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="space-y-8">
            {education.map((edu, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  {idx !== education.length - 1 && (
                    <div className="w-0.5 h-full bg-slate-700 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <h3 className="text-xl font-bold text-white mb-2">{edu.course}</h3>
                    <p className="text-purple-400 font-semibold mb-2">{edu.college}</p>
                    <p className="text-blue-400 mb-3">{edu.period}</p>
                    <p className="text-slate-300">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6" id="Contact">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build Something Amazing</h2>
          <p className="text-xl text-slate-300 mb-12">
            Ready to automate your processes? Let's discuss how I can help.
          </p>
          <div className="flex justify-center gap-6">
            {[
              { Icon: Mail, label: 'Email', href: 'mailto:unmeshpawar7@gmail.com' },
              { Icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/unmeshpawar7/' },
              { Icon: Github, label: 'GitHub', href: 'https://github.com/unmeshpawar7-cpu' }
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                className="flex items-center gap-3 bg-slate-800/50 px-6 py-4 rounded-lg border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800 transition-all"
              >
                <Icon className="text-blue-400" size={24} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>© {new Date().getFullYear()} RPA Developer Portfolio. Built with React & FastAPI.</p>
        </div>
      </footer>
    </div>
  );
}