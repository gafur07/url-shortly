import iconBrand from "../../images/icon-brand-recognition.svg"
import iconFully from "../../images/icon-fully-customizable.svg"
import iconDetail from "../../images/icon-detailed-records.svg"
import "./ShortLink.scss"
import "./Resources.scss"

const Recoursec = () => {
	return (
		<>
			<div className="resources flex items-center gap-[30px]" id="resources">
				<div className="item1 bg-white p-8 relative rounded-md">
					<img className="absolute top-[-30px] cursor-pointer rounded-full w-[60px] h-[60px] object-contain bg-[#34313D]" src={iconBrand} alt="" />
					<h1 className="mt-4 text-[18px] font-bold text-[#34313D]">Brand Recognition</h1>
					<p className="text-gray-500 font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, voluptas autem reprehenderit saepe quos odio quis, velit, eveniet atque eum minus odit nulla nemo iste harum? Neque consequuntur nihil eveniet.</p>
				</div>
				<div className="item2 bg-white p-8 relative rounded-md">
					<img className="absolute top-[-30px] cursor-pointer rounded-full w-[60px] h-[60px] object-contain bg-[#34313D]" src={iconDetail} alt="" />
					<h1 className="mt-4 text-[18px] font-bold text-[#34313D]">Detailed Records</h1>
					<p className="text-gray-500 font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, voluptas autem reprehenderit saepe quos odio quis, velit, eveniet atque eum minus odit nulla nemo iste harum? Neque consequuntur nihil eveniet.</p>
				</div>
				<div className="item3 bg-white p-8 relative rounded-md">
					<img className="absolute top-[-30px] cursor-pointer rounded-full w-[60px] h-[60px] object-contain bg-[#34313D]" src={iconFully} alt="" />
					<h1 className="mt-4 text-[18px] font-bold text-[#34313D]">Fully Customizable</h1>
					<p className="text-gray-500 font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, voluptas autem reprehenderit saepe quos odio quis, velit, eveniet atque eum minus odit nulla nemo iste harum? Neque consequuntur nihil eveniet.</p></div>	
			</div>
		</>
	)


}

export default Recoursec