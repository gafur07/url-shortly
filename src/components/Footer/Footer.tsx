import "./Footer.scss"
const Footer = () => {
	return (
		<>
			<footer className="py-[50px] bg-[#34313D]">
				<div className="container">
					<div className="fot-con flex justify-between gap-[30px]">
						<h1 className="footer-logo text-white font-bold text-[40px]">Shortly</h1>
						<div className="about text-white flex flex-wrap gap-[20px] w-[70%]">
							<div className="mx-auto mb-4">
								<h1 className="font-bold mb-4">Features</h1>
								<ul className="flex flex-col gap-2">
									<li className="cursor-pointer hover:text-teal-500 duration-200">Link shortening</li>
									<li className="cursor-pointer hover:text-teal-500 duration-200">Banded Links</li>
									<li className="cursor-pointer hover:text-teal-500 duration-200">Analytics</li>
								</ul>
							</div>

							<div className="mx-auto mb-4">
								<h1 className="font-bold mb-4">Resources</h1>
								<ul className="flex flex-col gap-2">
									<li className="cursor-pointer hover:text-teal-500 duration-200">Blog</li>
									<li className="cursor-pointer hover:text-teal-500 duration-200">Developers</li>
									<li className="cursor-pointer hover:text-teal-500 duration-200">Support</li>
								</ul>
							</div>

							<div className="mx-auto mb-4">
								<h1 className="font-bold mb-4">Company</h1>
								<ul className="flex flex-col gap-2">
									<li className="cursor-pointer hover:text-teal-500 duration-200">About</li>
									<li className="cursor-pointer hover:text-teal-500 duration-200">Our team</li>
									<li className="cursor-pointer hover:text-teal-500 duration-200">Contact</li>
								</ul>
							</div>
							<div className="mx-auto mb-4">
								<span className="flex gap-4 items-center">
									<a href="https://www.instagram.com/gafa_lv/" target="_blank"><i className='hover:text-teal-500 duration-200 text-3xl bx bxl-instagram'></i></a>
									<a href="https://t.me/gafa_lv" target="_blank"><i className='hover:text-teal-500 duration-200 text-3xl bx bxl-telegram'></i></a>
									<a href="https://github.com/gafur07" target="_blank"><i className='hover:text-teal-500 duration-200 text-3xl bx bxl-github'></i></a>
									<a href="#"><i className='cursor-pointer hover:text-teal-500 duration-200 text-3xl bx bxl-facebook-circle'></i></a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer