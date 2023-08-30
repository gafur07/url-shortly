import icon from "../../images/illustration-working.svg";
import "./Home.scss"
const Home = () => {


  return (
    <div className="home relative min-h-[90vh] mb-[5%] py-[100px] mt-[100px]">
      <div className="container h-full">
				<div className="content max-w-[500px]">
						<h1 className="text-[70px] text-[#34313D] font-bold">More than just shorter links</h1>
						<p className="text-gray-500 font-medium mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum fugiat blanditiis provident impedit autem ipsa.</p>
						<button id="link-shorter" className="px-4 py-2 border-none cursor-pointer text-[18px] rounded-2xl font-medium bg-teal-500 text-white hover:opacity-70 duration-200">Get started</button>
				</div>

				
      </div>
      <img className=" absolute right-[-5%] top-0 bottom-0" src={icon} alt="" />
    </div>
  );
};

export default Home;
