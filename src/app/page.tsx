'use client';
import React, { useState, useEffect } from "react";
import Image from 'next/image';

const projects = [
  {
    title: "Gator Greetings",
    description: "A simple messaging board for newly admitted UF students to connect and learn about the campus.",
    link: "https://github.com/samgator/gator-greetings",
  },
  {
    title: "GNC Project",
    description: "WIP",
    link: "",
  },
  {
    title: "Personal Project",
    description: "WIP",
    link: "",
  },
];

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('portfolio');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.background = 'rgb(17, 24, 39)';
      document.body.style.background = 'rgb(17, 24, 39)';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.background = 'rgb(239, 246, 255)';
      document.body.style.background = 'rgb(239, 246, 255)';
    }
  }, [isDarkMode, mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white' 
        : 'bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800'
    } flex flex-col items-center px-4 sm:px-0`}>
      {/* Theme Toggle */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <svg className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>

      {/* Navigation */}
      <nav className="w-full max-w-4xl py-6">
        <div className="flex justify-center space-x-8">
          {['portfolio', 'about', 'resume', 'internship', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`capitalize transition-colors ${
                activeSection === section
                  ? isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  : isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      </nav>

      {/* Header */}
      <header className="w-full max-w-3xl py-12 flex flex-col items-center text-center">
        <h1 className={`text-4xl sm:text-5xl font-bold tracking-tight mb-4 ${
          isDarkMode ? 'text-white' : 'text-black'
        }`}>Sam Morsics</h1>
        <p className={`text-lg sm:text-xl max-w-xl ${
          isDarkMode ? 'text-gray-300' : 'text-black'
        }`}>
          CS @ UF
        </p>
        <p className={`text-lg sm:text-xl max-w-xl ${
          isDarkMode ? 'text-gray-300' : 'text-black'
        }`}>
          Class of 2027
        </p>
      </header>

      {/* Content Sections */}
      <main className="w-full max-w-4xl flex-grow">
        {/* Portfolio Section */}
        {activeSection === 'portfolio' && (
          <section className="w-full mb-16">
            <h2 className={`text-2xl font-semibold mb-4 border-b pb-2 ${
              isDarkMode ? 'border-white/10 text-white' : 'border-blue-200 text-black'
            }`}>Projects</h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {projects.map((project, idx) => (
                <a
                  key={idx}
                  href={project.link}
                  className={`block rounded-xl border backdrop-blur-sm transition p-6 shadow-lg hover:shadow-xl ${
                    isDarkMode 
                      ? 'border-white/10 bg-white/5 hover:bg-white/10' 
                      : 'border-blue-200 bg-white/80 hover:bg-white/90'
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className={`mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                  <span className={`text-sm hover:underline ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>View Project →</span>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <section className="w-full mb-16">
            <h2 className={`text-2xl font-semibold mb-4 border-b pb-2 ${
              isDarkMode ? 'border-white/10 text-white' : 'border-blue-200 text-black'
            }`}>About</h2>
            <div className="flex flex-col items-center mb-6">
              <Image 
                src="./pfp.jpg" 
                alt="Sam Morsics" 
                width={192}
                height={192}
                className="rounded-full object-cover shadow-lg mb-6"
              />
              <p className={`leading-relaxed text-center ${
                isDarkMode ? 'text-gray-300' : 'text-black'
              }`}>
                Hello! I&apos;m Sam, a student at the University of Florida studying Computer Science. I&apos;m from Satellite Beach, Florida and I&apos;m interested in web development, machine learning, and electrical engineering.
              </p>
            </div>
          </section>
        )}

        {/* Resume Section */}
        {activeSection === 'resume' && (
          <section className="w-full mb-16">
            <h2 className={`text-2xl font-semibold mb-4 border-b pb-2 ${
              isDarkMode ? 'border-white/10 text-white' : 'border-blue-200 text-black'
            }`}>Resume</h2>
            <div className={`text-center ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <a
                href="resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Samuel_Morsics_Resume.pdf"
                className={`block rounded-xl border backdrop-blur-sm transition p-6 shadow-lg hover:shadow-xl ${
                  isDarkMode 
                    ? 'border-white/10 bg-white/5 hover:bg-white/10' 
                    : 'border-blue-200 bg-white/80 hover:bg-white/90'
                }`}
              >
                <span className={`text-sm hover:underline ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Download My Resume (PDF)</span>
              </a>
              <Image src="./resume.png" alt="Resume" width={1000} height={1000}/>
            </div>
          </section>
        )}

        {/* Internship Section */}
        {activeSection === 'internship' && (
          <section className="w-full mb-16">
            <h2 className={`text-2xl font-semibold mb-4 border-b pb-2 ${
              isDarkMode ? 'border-white/10 text-white' : 'border-blue-200 text-black'
            }`}>Blog Posts</h2>
            <div className="flex flex-col gap-4">
              <div className={`rounded-xl border backdrop-blur-sm p-6 shadow-lg ${
                isDarkMode 
                  ? 'border-white/10 bg-white/5' 
                  : 'border-blue-200 bg-white/80'
              }`}>
                <div className="flex justify-between items-center mb-3">
                  <h3 className={`text-xl font-semibold ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>Week 1: Internship Goals</h3>
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    May 26, 2025
                  </span>
                </div>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} space-y-4`}>
                  <span className="block pl-4">
                    The company I am working for is called GNC Solution, and it is part of the computer science industry. The service they provide is consulting for businesses looking to implement blockchain services and AI. The company&apos;s goals and concepts are very unclear, and their website has been down since before we left for Seoul. My boss doesn&apos;t speak English very well, so it is hard to fully grasp what this company stands for.
                  </span>
                  <span className="block pl-4">
                    My first few days have been filled with lots of learning. For now, my boss wants me and the other interns to familiarize ourselves with machine learning algorithms and how to implement the program in Python. Then, he wants us to apply what we&apos;ve learned in a project for the last 3 weeks of our internship. My boss likes ChatGPT, so he has recommended using it alongside YouTube to learn these new concepts. Most of my time so far has been spent self-learning Python libraries like NumPy, Pandas, and SciKit, to be prepared to work on a project.
                  </span>
                  <span className="block pl-4">
                    The environment in my workplace is very relaxed. There are 3 interns (including myself), 3 employees, and my boss, making it a very small number of people in the office at any given time. There is no dress code (although I still wear business casual), and I often see my boss watching the news or scrolling YouTube Shorts. We are working in a small office with about 20 desks, and have had three meetings so far for our boss to guide us in the right direction for self-learning.
                  </span>
                  <span className="block pl-4">
                    My personal goal for this internship is to expand my programming knowledge and repertoire. Before beginning this internship, I had very little knowledge of machine learning, and now, after just three days, I am developing a strong foundation for learning more advanced machine learning concepts. Professionally, I want to develop better communication skills to get feedback from my boss and integrate better into the workplace culture. I would like to come out of this internship as a more confident person with not only more
                  </span>
                </p>
              </div>
              <div className={`rounded-xl border backdrop-blur-sm p-6 shadow-lg ${
                isDarkMode 
                  ? 'border-white/10 bg-white/5' 
                  : 'border-blue-200 bg-white/80'
              }`}>
                <div className="flex justify-between items-center mb-3">
                  <h3 className={`text-xl font-semibold ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>Week 2: In The Thick of The Internship</h3>
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    June 4, 2025
                  </span>
                </div>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} space-y-4`}>
                <span className="block pl-4">
                The first week at my internship has been largely filled with self learning, and no actual work projects. I have made some small programs in my learning that use machine learning models to predict housing prices, or use various tools to manipulate data. Despite the original plan that my supervisor had set up for the other interns and I, in which we were to self-learn for 3 weeks and then work on a project for the last 3, we decided to ask to begin a project this week. We got out approval, and are now in the process of researching a project that we want to create, likely a website that incorporates data science, machine learning, and the blockchain. 
                </span>
                <span className="block pl-4">
                The relationships that I have with my supervisor and coworkers are great. As far as my supervisor goes, I feel like I can easily connect with him over lunch, and easily approach him with any questions or information that I may have. This appears to be completely opposite of South Korea&apos;s high power distance, because my boss often places himself on the same level as the other interns and I. As for my coworkers, they are very nice but not talkative and haven&apos;t been in the office very much. This aligns with South Korea&apos;s high uncertainty avoidance, as the addition of 3 new, foreign interns causes a workplace filled with uncertainty.
                </span>
                <span className="block pl-4">
                The biggest thing that I have learned from working in Seoul is punctuality. Riding the subway to my internship every day has really opened up my eyes to the importance of being on time and respecting others&apos; schedules. In Seoul, everything runs on a tight timetable, from public transportation to meetings and appointments. Missing the subway by just a minute can delay your whole morning, and being late is often seen as a sign of disrespect. This culture of punctuality has pushed me to be more organized and intentional with my time. It&apos;s a habit I plan to carry with me wherever I go, both professionally and personally.
                </span>
                </p>
              </div>
              <div className={`rounded-xl border backdrop-blur-sm p-6 shadow-lg ${
                isDarkMode 
                  ? 'border-white/10 bg-white/5' 
                  : 'border-blue-200 bg-white/80'
              }`}>
                <div className="flex justify-between items-center mb-3">
                  <h3 className={`text-xl font-semibold ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>Week 3: Lasting Impressions</h3>
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    June 11, 2025
                  </span>
                </div>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} space-y-4`}>
                  <span className="block pl-4">
                  I have gained a great deal of knowledge about the software engineering industry during my internship. Most of what I&apos;ve learned stems from collaboration, as it is a very crucial part of developing any programming project. I have also learned that the fundamentals of programming cannot be shied away from, as they commonly resurface even in the most complex topics.
                  </span>
                  <span className="block pl-4">
                  My organization&apos;s strengths lie in its small team. Having such a tight-knit group of developers and blockchain engineers in one office makes for a productive team. Some of their weaknesses, however, could be that they do not have an actual product on the market right now, and are rushing to launch their cryptocurrency this year. They are scrambling to meet with investors and don&apos;t appear to have the necessary funding at this time. The opportunities that my organization is most definitely benefiting from are AI services. From natural language services like ChatGPT for translation and learning, to Copilot for generating code, AI is used in nearly all parts of my organization. At the same time, AI is also a threat to my company, as it allows other businesses with more resources and funding to produce code and projects at a much higher rate than before, threatening smaller organizations.
                  </span>
                  <span className="block pl-4">
                    The most impactful moment of my time in Seoul has been exploring the city with people whom I&apos;ve just met. Going into this program, I had fears that I would not be able to make the most of my time in South Korea; however, my fears were eased after meeting our cohort, a great group of people. Just getting lost in the city and finding new things in new districts every day has been a very great character-building experience for me, and it will shape the person I am for years to come.
                  </span>
                </p>
              </div>
            </div>
            <h2 className={`text-2xl font-semibold mb-4 border-b pb-2 mt-8 ${
              isDarkMode ? 'border-white/10 text-white' : 'border-blue-200 text-black'
            }`}>Reflection</h2>
            <div className="flex flex-col gap-4">
              <div className={`rounded-xl border backdrop-blur-sm p-6 shadow-lg ${
                isDarkMode 
                  ? 'border-white/10 bg-white/5' 
                  : 'border-blue-200 bg-white/80'
              }`}>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Coming soon
                </p>
              </div>
            </div>
            <h2 className={`text-2xl font-semibold mb-4 border-b pb-2 mt-8 ${
              isDarkMode ? 'border-white/10 text-white' : 'border-blue-200 text-black'
            }`}>NACE Competencies</h2>
            <div className="flex flex-col gap-4">
              <div className={`rounded-xl border backdrop-blur-sm p-6 shadow-lg ${
                isDarkMode 
                  ? 'border-white/10 bg-white/5' 
                  : 'border-blue-200 bg-white/80'
              }`}>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Coming soon
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="w-full mb-16">
            <h2 className={`text-2xl font-semibold mb-4 border-b pb-2 ${
              isDarkMode ? 'border-white/10 text-white' : 'border-blue-200 text-black'
            }`}>Contact</h2>
            <div className="flex flex-col gap-4">
              <a href="tel:+13214057825" className={`hover:underline transition ${
                isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
              }`}>
                <span style={{ fontFamily: 'Apple Color Emoji, Segoe UI Emoji, NotoColorEmoji, Noto Color Emoji, Android Emoji, EmojiSymbols' }}>☎️</span> +1 (321) 405-7825
              </a>
              <a href="mailto:sam.morsics@gmail.com" className={`hover:underline transition ${
                isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
              }`}>
                <span style={{ fontFamily: 'Apple Color Emoji, Segoe UI Emoji, NotoColorEmoji, Noto Color Emoji, Android Emoji, EmojiSymbols' }}>@</span> sam.morsics@gmail.com
              </a>
            </div>
          </section>
        )}

      </main>

      {/* Footer with Social Links */}
      <footer className="w-full max-w-4xl py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="flex justify-center space-x-8">
          <a 
            href="https://www.linkedin.com/in/samuelmorsics" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-flex items-center hover:underline transition ${
              isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <svg 
              className="w-6 h-6 mr-2" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a 
            href="https://github.com/samgator/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-flex items-center hover:underline transition ${
              isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <svg 
              className="w-6 h-6 mr-2" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
