const skillTags = [
  'HTML5',
  'CSS',
  'JavaScript',
  'React JS',
  'Tailwind CSS',
  'Node.js',
  'Authentication',
  'Firebase',
  'GIT',
  'Sales',
  'Teamwork',
  'Problem Solving',
]

const About = () => {
  return (
    <section id="about" className="page-section bg-[#efefef] px-6 py-10 text-[#1f1f1f] sm:px-10 lg:px-8 lg:py-14">
      <div className="mx-auto 'max-w-300' ">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-[2.2rem] font-black uppercase tracking-tight text-[#1b1d20] sm:text-[3.15rem]">
            ABOUT ME
          </h1>
          <span className="mt-3 block h-1 w-20 rounded-full bg-[#4d7cb2]" />
        </div>

        <div className="mt-12 grid items-start gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="pt-2">
            
            <div className="mt-7 space-y-6 text-[1.04rem] leading-8 text-[#2b2b2b] sm:text-[1.06rem]">
              <p>
                Hello! I’m Victory Odah, a passionate Frontend Developer with a growing interest in full-stack development and a strong foundation in building responsive, user-friendly web applications.
              </p>

              <p>
                I have hands-on experience working with HTML, CSS, JavaScript, React.js, and Tailwind CSS, alongside tools such as Git, GitHub, and Vercel. Through personal projects, I have developed practical skills in creating web interfaces, building reusable components, structuring applications, and deploying websites.
              </p>
              <p>
                Beyond technology, my background in Accounting and Sales Management has strengthened my analytical thinking, problem-solving, communication, teamwork, and attention to detail. These skills influence how I approach development challenges and collaborate with others.
              </p>
              <p>
               I am passionate about technology, continuous learning, and building digital solutions that make everyday experiences better. I enjoy exploring new technologies, tackling challenges, and constantly improving my craft as I grow into a well-rounded software developer.
              </p>

            </div>

            <div className="mt-10 flex flex-wrap gap-4 sm:gap-5">
              <a
                href="mailto:victoryspace001@gmail.com"
                className="inline-flex items-center justify-center rounded-md border border-[#0a3d6d] bg-[#0a3d6d] px-7 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition hover:bg-[#0b4d8b] focus:outline-none focus:ring-2 focus:ring-[#0a3d6d] focus:ring-offset-2"
              >
                Contact
              </a>
              <a
                href="/Victory_Odah_Frontend_Dev(1).pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-[#0a3d6d] bg-[#0a3d6d] px-7 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition hover:bg-[#0b4d8b] focus:outline-none focus:ring-2 focus:ring-[#0a3d6d] focus:ring-offset-2"
              >
                Resume
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-[2.15rem] font-bold text-[#0d1117] sm:text-[2.5rem]">My Skills</h2>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 'lg:max-w-130'">
              {skillTags.map((skill) => (
                <div
                  key={skill}
                  className="flex 'min-h-13' items-center justify-center rounded-md border border-[#d8d8d8] bg-[#dfe0e2] px-3 py-2 text-center text-[0.75rem] font-medium text-[#1e1e1e] shadow-sm sm:text-[0.8rem]"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
