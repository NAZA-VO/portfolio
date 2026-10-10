import backgroundImage from '../assets/imgbg.jpg'

const Home = () => {
	return (
		<main
			className="min-h-svh bg-cover bg-center bg-no-repeat pt-18"
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			<div className="mx-auto flex min-h-[calc(100svh-72px)] max-w-6xl flex-col justify-between px-5 py-8 sm:px-8 sm:py-10">
				<section className="flex flex-1 flex-col justify-center py-8 sm:py-12">
					<p className="mb-3 font-sans text-base font-medium uppercase tracking-[0.2em] text-slate-600 sm:text-xl">
						ODAH VICTORY
					</p>
					<h1 className="font-['Barlow_Condensed'] text-[clamp(3.25rem,15vw,10rem)] font-extrabold leading-[0.9] text-blue-800">
						Portfolio
					</h1>
					<p className="mt-4 font-['Barlow_Condensed'] text-xl font-semibold uppercase tracking-[0.14em] text-slate-600 sm:text-3xl">
						Frontend Developer
					</p>
				</section>
				<p className="font-sans text-sm text-slate-600 sm:text-base">
					www.victoryspace001@gmail.com
				</p>
			</div>
		</main>
	)
}

export default Home