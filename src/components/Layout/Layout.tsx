import Bgboost from "../../screens/BgboostBG/Bigboos"
import Home from "../../screens/Home/Home"
import ShorterLink from "../../screens/ShortenLink/ShorterLink"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"


const Layout = () => {
	return (
		<div>
			<Header />
			<Home />
			<ShorterLink />
			<Bgboost />
			<Footer />
		</div>
	)
}

export default Layout