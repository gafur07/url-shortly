import { useState } from "react"
import logo from "../../images/logo.svg"
import "./Header.scss"


const Header = () => {

	const [isActive, setIsActive] = useState(false)

	return (
		<>
			<header className="px-[10%] flex items-center justify-between gap-[50px]">
				<img className="cursor-pointer" src={logo} alt="" />
				<nav className={`${isActive ? "active" : ""} flex justify-between items-center`}>
						<ul onClick={() => {
						setIsActive(!isActive)
					}} className="nav_menu">
							<li>
								<a href="#">Features</a>
							</li>
							<li>
								<a href="#">Pricing</a>
							</li>
							<li>
								<a href="#resources">Resources</a>
							</li>
						</ul>
						<hr />
					<div onClick={() => {
						setIsActive(!isActive)
					}} className="nav_right flex items-center gap-4">
							<h2 className="">Login</h2>
							<button className="px-4 py-2 border-none cursor-pointer rounded-2xl font-medium bg-teal-500 text-white hover:opacity-70 duration-200">Sign Up</button>
					</div>
				</nav>
					<button onClick={() => {
						setIsActive(!isActive)
					}} className="menu-btn right-0">
						<i className={`bx ${isActive ? "bx-x text-teal-500" : "bx-menu"} text-4xl hover:text-teal-500 duration-200`}></i>
					</button>
			</header>
		</>
	)
}

export default Header