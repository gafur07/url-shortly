import "./bgboost.scss"

const Bgboost = () => {
	return (
		<div className="bg-boost">
			<div className="container h-full">
				<div className="boost flex flex-col justify-center h-full items-center my-auto">
					<h1 className="text-center text-[50px] mb-4 text-white font-bold">Boost your links today</h1>
					<button className="bg-teal-500 duration-200 rounded-3xl text-[20px] px-6 py-2 text-white transform active:scale-95 hover:bg-teal-400 duration-200">
					<a href="#link-shorter">
						Get Started
					</a>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Bgboost