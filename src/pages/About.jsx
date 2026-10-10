import profileImage from '../assets/mypicture.jpeg'

const technicalSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Git', 'GitHub', 'Vercel']

const About = () => {
	return (
		<main className="pt-[72px]">
			<div className="grid min-h-[calc(100svh-72px)] md:grid-cols-[0.9fr_1.1fr]">
				<section className="flex flex-col items-center bg-white px-6 py-12 text-center sm:px-10 sm:py-16">
					<img
						src={profileImage}
						alt="Odah Victory"
						className="mb-6 aspect-square w-44 object-cover object-top sm:w-52"
					/>
					<h1 className="text-3xl font-bold leading-tight text-slate-950">Odah Victory</h1>
					<p className="mt-2 text-lg text-slate-600">Frontend Developer</p>

					<div className="mt-8 w-full max-w-xs text-left">
						<h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-blue-800">
							Technical Skills
						</h2>
						<ul className="space-y-2 text-sm text-slate-700">
							{technicalSkills.map((skill) => (
								<li className="flex items-start gap-3" key={skill}>
									<span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-800" />
									{skill}
								</li>
							))}
						</ul>
					</div>
				</section>

				<section className="flex flex-col justify-center bg-blue-800 px-7 py-14 text-white sm:px-12 lg:px-16">
					<div className="mx-auto w-full max-w-xl">
						<h2 className="text-4xl font-bold sm:text-5xl">About Me</h2>
						<p className="mt-5 max-w-lg text-base leading-7 text-blue-50">
							I build responsive web experiences with a focus on clear design and thoughtful details. I enjoy turning ideas into accessible, easy-to-use interfaces and continue growing my skills with every project.
						</p>
					</div>
				</section>
			</div>
		</main>
	)
}

export default About
